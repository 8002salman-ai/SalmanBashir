import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";
import type { Credential } from "@/data/credentialsData";

const statusTone: Record<Credential["status"], string> = {
  Verified: "border-brand-500/30 bg-brand-500/10 text-accent-strong",
  "Pending Upload": "border-gold-accent/30 bg-gold-accent/10 text-gold-accent",
  Private: "border-edge-strong bg-panel text-faint",
  "Available on Request": "border-edge-strong bg-panel text-soft",
};

/* Preview card for a single credential item — image/PDF, issuer, date and
   verification link. No layout shift: the media slot reserves a fixed
   aspect ratio whether or not an image has been supplied. */
export function CredentialPreview({ credential }: { credential: Credential }) {
  return (
    <div className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-panel-strong">
        {credential.image ? (
          <img
            src={credential.image}
            alt={credential.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <Icon name="file" className="h-6 w-6 text-faint" strokeWidth={1.4} />
            <p className="text-xs font-medium text-faint">No document uploaded yet</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-strong">{credential.title}</p>
          <span
            className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium",
              statusTone[credential.status],
            )}
          >
            {credential.status}
          </span>
        </div>
        <p className="text-xs text-muted">{credential.issuer}</p>
        <p className="text-xs text-faint">{credential.date}</p>
        {credential.credentialId && (
          <p className="text-xs text-faint">ID: {credential.credentialId}</p>
        )}
        {credential.verificationUrl && (
          <a
            href={credential.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong"
          >
            Verify
            <Icon name="external" className="external-icon h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}
