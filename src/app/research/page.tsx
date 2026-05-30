import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PublicationItem } from "@/components/PublicationItem";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Publications",
  description: `Publications and preprints for ${profile.name}`,
};

export default function ResearchPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 lg:py-20">
        <SectionHeader
          eyebrow="Publications"
          title="Publications and preprints"
          description="Research output is collected here."
        />
        <div className="mt-8">
          {profile.publications.map((publication) => (
            <PublicationItem
              key={publication.bibtexKey}
              publication={publication}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
