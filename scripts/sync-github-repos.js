import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_FILE = path.resolve(__dirname, '../src/data/content.ts');
const GITHUB_USER = '8002salman-ai';

async function checkLiveUrl(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
    clearTimeout(timer);
    return res.status >= 200 && res.status < 400;
  } catch {
    return false;
  }
}

async function syncRepos() {
  console.log(`[daily-sync] Fetching latest repositories for ${GITHUB_USER}...`);
  const headers = { 'Accept': 'application/vnd.github+json', 'User-Agent': 'SalmanBashir-DailySync' };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=100`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`GitHub API returned status ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('Expected array of repos from GitHub API');
  }

  console.log(`[daily-sync] Found ${data.length} total public repositories on GitHub.`);

  let content = fs.readFileSync(CONTENT_FILE, 'utf-8');

  const regex = /export const githubRepos: PortfolioRepo\[\] = \[[\s\S]*?\];/;
  const match = content.match(regex);

  if (!match || match.index === undefined) {
    console.error('[daily-sync] Could not locate githubRepos block in content.ts');
    process.exit(1);
  }

  const startIndex = match.index;
  const matchLength = match[0].length;

  // Check for any newly added repositories or new live deployments
  const enrichedRepos = [];

  for (const r of data) {
    let homepage = r.homepage && r.homepage.trim() ? r.homepage.trim() : null;

    // If no homepage specified in repo metadata, test common Vercel deployment URL
    if (!homepage) {
      const vercelUrl = `https://${r.name.toLowerCase()}.vercel.app`;
      const isLive = await checkLiveUrl(vercelUrl);
      if (isLive) {
        homepage = vercelUrl;
        console.log(`[daily-sync] Discovered live Vercel deployment for ${r.name}: ${vercelUrl}`);
      }
    }

    const daysSincePushed = (Date.now() - Date.parse(r.pushed_at)) / (1000 * 60 * 60 * 24);
    const isNew = daysSincePushed <= 60;

    enrichedRepos.push({
      name: r.name,
      desc: r.description || `${r.name} repository`,
      url: r.html_url,
      homepage: homepage || undefined,
      language: r.language || undefined,
      category: isNew ? 'new' : 'old',
      status: homepage ? (isNew ? 'Active Store' : 'Live') : (isNew ? 'New Repo' : 'System'),
      pushed_at: r.pushed_at,
    });
  }

  // Include known planned/coming projects like commerceos if not yet published
  if (!enrichedRepos.some(r => r.name.toLowerCase() === 'commerceos')) {
    enrichedRepos.push({
      name: 'commerceos',
      desc: 'Next-gen omnichannel commerce operating system & headless API',
      url: `https://github.com/${GITHUB_USER}/commerceos`,
      language: 'TypeScript',
      category: 'coming',
      status: 'Architecture / Coming',
    });
  }

  // Format updated array
  let output = 'export const githubRepos: PortfolioRepo[] = [\n';
  for (const repo of enrichedRepos) {
    output += `  {\n`;
    output += `    name: ${JSON.stringify(repo.name)},\n`;
    output += `    desc: ${JSON.stringify(repo.desc)},\n`;
    output += `    url: ${JSON.stringify(repo.url)},\n`;
    if (repo.homepage) output += `    homepage: ${JSON.stringify(repo.homepage)},\n`;
    if (repo.language) output += `    language: ${JSON.stringify(repo.language)},\n`;
    output += `    category: ${JSON.stringify(repo.category)},\n`;
    output += `    status: ${JSON.stringify(repo.status)},\n`;
    output += `  },\n`;
  }
  output += '];';

  const newContent = content.slice(0, startIndex) + output + content.slice(startIndex + matchLength);
  fs.writeFileSync(CONTENT_FILE, newContent, 'utf-8');
  console.log(`[daily-sync] Successfully synchronized ${enrichedRepos.length} repos into content.ts`);
}

syncRepos().catch((err) => {
  console.error('[daily-sync] Error syncing repos:', err);
  process.exit(1);
});
