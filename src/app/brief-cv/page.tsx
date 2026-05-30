import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Brief CV",
  description: `Brief CV for ${profile.name}`,
};

export default function BriefCvPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 lg:py-20">
        <SectionHeader
          eyebrow="Brief CV"
          title="Brief CV"
          description="A concise academic CV with education and current affiliation."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {profile.name}
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Title</dt>
                <dd className="mt-1 text-muted">{profile.title}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Affiliation</dt>
                <dd className="mt-1 text-muted">{profile.affiliation}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Supervisor</dt>
                <dd className="mt-1 text-muted">{profile.supervisor}</dd>
              </div>
            </dl>
          </aside>
          <section>
            <SectionHeader
              eyebrow="Education"
              title="Education"
            />
            <div className="mt-8 divide-y divide-line rounded-lg border border-line bg-white shadow-sm">
              {profile.education.map((item) => (
                <article
                  key={`${item.degree}-${item.period}`}
                  className="grid gap-2 p-6 md:grid-cols-[1fr_auto] md:items-start"
                >
                  <div>
                    <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink">
                      {item.degree}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.institution}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-signal">
                    {item.period}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
