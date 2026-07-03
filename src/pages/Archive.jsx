import ContentPage from "../components/ContentPage";

const ARCHIVE_ITEMS = [
  {
    year: "2026",
    items: [
      { title: "CFA Founding & Inaugural General Meeting", date: "Mar 2026", type: "Event" },
      { title: "Federation Bylaws & Code of Conduct", date: "Mar 2026", type: "Policy" },
      { title: "Member Onboarding Drive — First Cohort", date: "Apr 2026", type: "Initiative" },
    ],
  },
];

export default function Archive() {
  return (
    <ContentPage
      title="Archive"
      subtitle="Records and documents from the Coaching Federation of Aligarh, founded in 2026."
    >
      <p>
        Browse announcements, policy documents, and event records from CFA since our founding in Aligarh
        in 2026. For certified copies of any document, contact the CFA Secretariat.
      </p>

      {ARCHIVE_ITEMS.map((group) => (
        <div key={group.year} className="archive-year-group">
          <h2>{group.year}</h2>
          <ul className="archive-list">
            {group.items.map((item) => (
              <li key={item.title} className="archive-item">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-semibold text-primary">{item.title}</span>
                  <span className="archive-meta">{item.type} · {item.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ContentPage>
  );
}
