import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name}`,
};

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 lg:py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          description={`The best contact method is email: ${profile.email}.`}
        />
        <div className="mt-12 max-w-4xl">
          <ContactBlock />
        </div>
      </Container>
    </section>
  );
}
