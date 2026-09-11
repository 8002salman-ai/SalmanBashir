import os
import subprocess
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOWREEL_DIR = os.path.join(BASE_DIR, "public", "images", "showreel")
OUTPUT_VIDEO = os.path.join(BASE_DIR, "public", "intro-video.mp4")
AUDIO_FILE = os.path.join(SHOWREEL_DIR, "master_audio.aac")

SCENES = [
    {
        "file": "scene1_intro.jpg",
        "duration": 8.0,
        "zoom": "in",
        "title": "SALMAN BASHIR",
        "subtitle": "Marketplace Operations & Systems Consultant",
        "tag": "EXECUTIVE SHOWREEL // 01"
    },
    {
        "file": "scene2_marketplaces.jpg",
        "duration": 10.0,
        "zoom": "out",
        "title": "MULTI-MARKETPLACE OPERATIONS",
        "subtitle": "eBay · TikTok Shop · Etsy · Mercari · Depop",
        "tag": "LIVE OPERATIONS // 02"
    },
    {
        "file": "scene3_sourcing.jpg",
        "duration": 9.0,
        "zoom": "in",
        "title": "SOURCING & GLOBAL FREIGHT",
        "subtitle": "Supplier Vetting · Freight Forwarding · Customs Logistics",
        "tag": "SUPPLY CHAIN // 03"
    },
    {
        "file": "scene4_systems.jpg",
        "duration": 9.0,
        "zoom": "out",
        "title": "AI AGENTS & CUSTOM ERP",
        "subtitle": "Hermes AI Agent · Embani ERP · Automation Pipelines",
        "tag": "SYSTEMS ARCHITECTURE // 04"
    },
    {
        "file": "scene5_profit.jpg",
        "duration": 8.0,
        "zoom": "in",
        "title": "PROFIT & REAL COGS AUDITS",
        "subtitle": "Unit Economics · Net Margin Audits · Cash Flow Systems",
        "tag": "FINANCIAL AUDIT // 05"
    },
    {
        "file": "scene6_consulting.jpg",
        "duration": 8.0,
        "zoom": "out",
        "title": "HANDS-ON CONSULTING & TRAINING",
        "subtitle": "Real Ops Floor Work · Team Training · Scalable SOPs",
        "tag": "CONSULTATION // 06"
    },
    {
        "file": "scene7_outro.jpg",
        "duration": 8.0,
        "zoom": "in",
        "title": "LET'S BUILD WHAT HOLDS UP",
        "subtitle": "Direct Consultation · Available on Fiverr & Remote Worldwide",
        "tag": "8002 SALMAN BASHIR // 07"
    },
]

def render_clip(scene, index, temp_dir):
    input_img = os.path.join(SHOWREEL_DIR, scene["file"])
    output_clip = os.path.join(temp_dir, f"clip_{index}.mp4")
    duration = scene["duration"]
    fps = 30
    total_frames = int(duration * fps)
    
    if scene["zoom"] == "in":
        zp = f"zoompan=z='min(zoom+0.0006,1.10)':d={total_frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps={fps}"
    else:
        zp = f"zoompan=z='if(lte(zoom,1.0),1.10,max(1.001,zoom-0.0006))':d={total_frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps={fps}"
    
    title_esc = scene["title"].replace(":", "\\:").replace("'", "")
    subtitle_esc = scene["subtitle"].replace(":", "\\:").replace("'", "")
    tag_esc = scene["tag"].replace(":", "\\:").replace("'", "")

    filter_complex = (
        f"scale=1440:810,{zp},"
        f"drawbox=y=ih-140:color=black@0.7:width=iw:height=140:t=fill,"
        f"drawbox=y=ih-142:color=#F59E0B@0.9:width=iw:height=2:t=fill,"
        f"drawtext=text='{tag_esc}':fontcolor=#F59E0B:fontsize=15:x=50:y=h-118:shadowcolor=black@0.9:shadowx=1:shadowy=1,"
        f"drawtext=text='{title_esc}':fontcolor=white:fontsize=28:x=50:y=h-92:shadowcolor=black@0.9:shadowx=1:shadowy=1,"
        f"drawtext=text='{subtitle_esc}':fontcolor=#CBD5E1:fontsize=17:x=50:y=h-54:shadowcolor=black@0.9:shadowx=1:shadowy=1,"
        f"drawtext=text='SALMAN BASHIR // 8002':fontcolor=#94A3B8:fontsize=14:x=w-230:y=h-50,"
        f"drawtext=text='4K UHD':fontcolor=#10B981:fontsize=13:x=w-95:y=25:box=1:boxcolor=black@0.7:boxborderw=5"
    )

    cmd = [
        "ffmpeg", "-y",
        "-loop", "1",
        "-i", input_img,
        "-vf", filter_complex,
        "-t", str(duration),
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "faster",
        "-crf", "20",
        output_clip
    ]
    
    print(f"Rendering Clip {index+1}/{len(SCENES)}: {scene['title']} ({duration}s)...", flush=True)
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error rendering clip {index}:", res.stderr, flush=True)
        sys.exit(1)
    return output_clip

def main():
    temp_dir = os.path.join(SHOWREEL_DIR, "temp_render")
    os.makedirs(temp_dir, exist_ok=True)
    
    clips = []
    for i, scene in enumerate(SCENES):
        clip = render_clip(scene, i, temp_dir)
        clips.append(clip)
        
    concat_list = os.path.join(temp_dir, "concat.txt")
    with open(concat_list, "w") as f:
        for clip in clips:
            f.write(f"file '{clip.replace(os.sep, '/')}'\n")
            
    print("Concatenating clips...", flush=True)
    temp_video = os.path.join(temp_dir, "combined_no_audio.mp4")
    concat_cmd = [
        "ffmpeg", "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", concat_list,
        "-c", "copy",
        temp_video
    ]
    subprocess.run(concat_cmd, check=True)
    
    print(f"Mixing master audio and creating final video: {OUTPUT_VIDEO}...", flush=True)
    final_cmd = [
        "ffmpeg", "-y",
        "-i", temp_video,
        "-i", AUDIO_FILE,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "192k",
        "-af", "afade=t=out:st=58:d=2",
        "-movflags", "+faststart",
        "-shortest",
        OUTPUT_VIDEO
    ]
    res = subprocess.run(final_cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Error in final merge:", res.stderr, flush=True)
        sys.exit(1)
        
    print("Successfully generated high-definition showreel video!", flush=True)

if __name__ == "__main__":
    main()
