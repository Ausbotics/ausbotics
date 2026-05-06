import { Navigation } from "@/components/navigation";
import { AboutHero } from "@/components/about-hero";
import { ProblemSolution } from "@/components/problem-solution";

import { CompanyValues } from "@/components/company-values";
import { SiteFooter } from "@/components/site-footer";
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <ProblemSolution />
    <CompanyValues />
    <SiteFooter />
    </main>
  );
}
