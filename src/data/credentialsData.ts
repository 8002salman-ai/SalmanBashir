import type { IconName } from "@/components/ui";

export type CredentialStatus =
  | "Verified"
  | "Pending Upload"
  | "Private"
  | "Available on Request";

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  status: CredentialStatus;
};

export type CredentialSection = {
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  items: Credential[];
};

/* No real certificates, issuers, dates or IDs are invented here. Every
   section is intentionally empty until a document has been verified and
   uploaded. Each empty section renders the standard placeholder message:
   "Credential details will be added after document verification." */
export const credentialSections: CredentialSection[] = [
  {
    id: "certificates",
    title: "Certificates",
    desc: "Formal certificates and completed courses.",
    icon: "badge",
    items: [],
  },
  {
    id: "training",
    title: "Training",
    desc: "Training programs and structured learning completed.",
    icon: "book",
    items: [],
  },
  {
    id: "tools-and-platforms",
    title: "Tools and Platforms",
    desc: "Platforms and tools used in day-to-day operational and technical work.",
    icon: "layers",
    items: [],
  },
  {
    id: "professional-documents",
    title: "Professional Documents",
    desc: "References, statements and other professional documentation.",
    icon: "file",
    items: [],
  },
  {
    id: "verified-credentials",
    title: "Verified Credentials",
    desc: "Credentials that have been independently verified.",
    icon: "shield",
    items: [],
  },
];

export const credentialsEmptyMessage =
  "Credential details will be added after document verification.";
