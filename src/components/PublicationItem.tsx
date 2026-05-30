import { ExternalLink } from "lucide-react";
import type { Publication } from "@/data/profile";

type PublicationItemProps = {
  publication: Publication;
};

export function PublicationItem({ publication }: PublicationItemProps) {
  const bibtexType = publication.type;

  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            @{bibtexType}&#123;{publication.bibtexKey}, ...&#125;
          </p>
          {publication.url ? (
            <a
              href={publication.url}
              className="mt-3 inline-flex items-start gap-2 font-serif text-2xl font-semibold tracking-normal text-ink transition hover:text-signal"
            >
              <span>{publication.title}</span>
              <ExternalLink aria-hidden className="mt-1 shrink-0" size={17} />
            </a>
          ) : (
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-normal text-ink">
              {publication.title}
            </h2>
          )}
          <p className="mt-3 text-sm leading-7 text-muted">
            {publication.authors.join(", ")}. <span className="italic">{publication.venue}</span>,{" "}
            {publication.year}.
          </p>
        </div>
        {publication.status ? (
          <span className="w-fit rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold text-oxide">
            {publication.status}
          </span>
        ) : null}
      </div>
      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-4">
        <div>
          <dt className="font-semibold text-ink">Year</dt>
          <dd className="mt-1 text-muted">{publication.year}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Venue</dt>
          <dd className="mt-1 text-muted">{publication.venue}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">arXiv</dt>
          <dd className="mt-1 text-muted">
            {publication.arxivId ? (
              <a href={publication.url} className="hover:text-signal">
                {publication.arxivId}
              </a>
            ) : (
              "Pending"
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Keywords</dt>
          <dd className="mt-1 text-muted">{publication.keywords.join(", ")}</dd>
        </div>
      </dl>
    </article>
  );
}
