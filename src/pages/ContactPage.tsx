import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/Contact";
import { Seo } from "@/components/Seo";

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Salman Bashir — E-commerce Operations & Automation"
        description="Get in touch about marketplace operations, profit dashboards, workflow automation, ERP prototyping or online training. Based in Pakistan, working remotely with clients internationally."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build systems around your{" "}
            <span className="text-gradient-brand">real business</span>
          </>
        }
        description="Tell me where your operations are today and what you want to change. I'll respond personally — and if I'm not the right fit, I'll say so."
      />
      <ContactSection />
    </>
  );
}
