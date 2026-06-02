import { profile } from "@/data/profile";

export function ProfilePhoto() {
  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="aspect-[4/5] overflow-hidden rounded-md border border-line bg-paper">
        <img
          src={profile.portraitUrl}
          alt={profile.portraitAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
