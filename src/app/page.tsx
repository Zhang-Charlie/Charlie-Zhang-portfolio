import { TopBar } from "@/components/layout/top-bar"
import { AboutSection } from "@/components/sections/about-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/tech-stack-section"

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </>
  )
}
