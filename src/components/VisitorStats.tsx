const flagCounterId = "SSkt";
const flagCounterHref = `https://info.flagcounter.com/${flagCounterId}`;
const flagCounterImageUrl =
  `https://s01.flagcounter.com/count/${flagCounterId}` +
  "/bg_FFFFFF/txt_1F2933/border_D9E2EC/columns_1/maxflags_5" +
  "/viewers_0/labels_1/pageviews_1/flags_0/percent_0/";

export function VisitorStats() {
  return (
    <a
      href={flagCounterHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Visitor statistics by country"
      className="inline-flex max-w-full"
    >
      <img
        src={flagCounterImageUrl}
        alt="Visitors by country"
        width={160}
        height={190}
        loading="lazy"
        className="max-w-full rounded-md border border-line"
      />
    </a>
  );
}
