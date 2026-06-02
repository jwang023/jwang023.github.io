import { Mail, MapPin, Users } from "lucide-react";
import { VisitorStats } from "@/components/VisitorStats";
import { profile } from "@/data/profile";

export function ContactBlock() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px]">
      <a
        href={`mailto:${profile.email}`}
        className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
      >
        <Mail aria-hidden className="text-signal" size={22} />
        <p className="mt-4 text-sm font-semibold text-ink">Email</p>
        <p className="mt-1 break-words text-sm text-muted">{profile.email}</p>
      </a>
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm">
        <MapPin aria-hidden className="text-signal" size={22} />
        <p className="mt-4 text-sm font-semibold text-ink">Location</p>
        <p className="mt-1 text-sm text-muted">{profile.location}</p>
      </div>
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm">
        <Users aria-hidden className="text-signal" size={22} />
        <p className="mt-4 text-sm font-semibold text-ink">Visitors</p>
        <div className="mt-4">
          <VisitorStats />
        </div>
      </div>
    </div>
  );
}
