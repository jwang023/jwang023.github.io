import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export default function HomePage() {
  const [summaryBeforeSupervisor, summaryAfterSupervisor] = profile.summary.split(
    profile.supervisor,
  );

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">
                {profile.affiliation}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold tracking-normal text-ink sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-9 text-muted">
                {profile.title}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                {summaryBeforeSupervisor}
                <a
                  href={profile.supervisorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-signal underline-offset-4 hover:underline"
                >
                  {profile.supervisor}
                </a>
                {summaryAfterSupervisor}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-signal"
                >
                  View publications
                  <ArrowRight aria-hidden size={16} />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
                >
                  <Mail aria-hidden size={16} />
                  Email
                </a>
              </div>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {profile.highlights.map((highlight) => (
                  <div key={highlight.label} className="border-l-2 border-signal pl-4">
                    <dt className="text-sm text-muted">{highlight.label}</dt>
                    <dd className="mt-1 font-serif text-2xl font-semibold text-ink">
                      {highlight.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <aside className="mx-auto w-full max-w-xs lg:justify-self-center">
              <ProfilePhoto />
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Publications"
              title="Publications and preprints"
              description="Research focuses on well-posedness, intermittency, and functional quantitative CLT."
            />
            <Link
              href="/research"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-signal hover:text-teal-900"
            >
              View publications
              <ArrowRight aria-hidden size={16} />
            </Link>
          </div>
          <div className="mt-8 max-w-3xl text-base leading-8 text-muted">
            <p>
              My current method is Malliavin calculus, and I am also interested in
              studying additional methods for stochastic analysis.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper">
        <Container className="py-16">
          <SectionHeader
            eyebrow="Plog"
            title="Photo log"
            description="A simple place for selected photos and short videos."
          />
          <div className="mt-8 flex">
            <Link
              href="/plog"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
            >
              View plog
              <ArrowRight aria-hidden size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
