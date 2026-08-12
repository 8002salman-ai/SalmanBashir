import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/Contact";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { contact, inquiryTypeSlugs } from "@/data/content";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("inquiry");
  const initialInquiry =
    slug && typeof slug === "string"
      ? contact.inquiryTypes.find(
          (t) => inquiryTypeSlugs[t] === slug,
        )
      : undefined;

  return (
    <>
      <Seo
        title="Contact | Salman Bashir — E-commerce Operations & Automation"
        description="Get in touch about marketplace operations, product sourcing, Himalayan salt & wholesale, profit dashboards, workflow automation, ERP prototyping or online training. Based in Pakistan, working remotely with clients internationally."
        path="/contact"
      />
    <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build systems around your{" "}
            <span className="text-gradient-brand">real business</span>
          </>
        }
        description="Tell me what you need — sourcing, marketplace operations, salt & wholesale or a business system. I'll respond personally, and if I'm not the right fit, I'll say so."
      />
      <ContactSection initialInquiry={initialInquiry} />
    </>
  );
}
