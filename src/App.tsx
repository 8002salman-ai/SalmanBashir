import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { TrainingPage } from "@/pages/TrainingPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { JourneyPage } from "@/pages/JourneyPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { CredentialsPage } from "@/pages/CredentialsPage";
import { AiAutomationPage } from "@/pages/AiAutomationPage";
import { ResumePage } from "@/pages/ResumePage";
import { ContactPage } from "@/pages/ContactPage";
import { BookPage } from "@/pages/BookPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { MarketplaceServicesPage } from "@/pages/MarketplaceServicesPage";
import { SourcingFreightPage } from "@/pages/SourcingFreightPage";
import { BusinessSystemsPage } from "@/pages/BusinessSystemsPage";
import { BusinessRelationshipsPage } from "@/pages/BusinessRelationshipsPage";
import { TeamPage } from "@/pages/TeamPage";
import { CommunityPage } from "@/pages/CommunityPage";
import { AdminLoginPage } from "@/pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "@/pages/admin/AdminDashboardPage";
import { AdminGuard } from "@/components/admin/AdminGuard";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
        <Route path="/ai-automation" element={<AiAutomationPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/marketplace-services" element={<MarketplaceServicesPage />} />
        <Route path="/sourcing-freight" element={<SourcingFreightPage />} />
        <Route path="/business-systems" element={<BusinessSystemsPage />} />
        <Route path="/business-relationships" element={<BusinessRelationshipsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminGuard>
            <AdminDashboardPage />
          </AdminGuard>
        }
      />
    </Routes>
  );
}
