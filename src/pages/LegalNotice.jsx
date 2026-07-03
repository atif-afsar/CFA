import ContentPage from "../components/ContentPage";

export default function LegalNotice() {
  return (
    <ContentPage
      title="Legal Notice"
      subtitle="Official legal information regarding the Coaching Federation of Aligarh."
    >
      <h2>Federation Identity</h2>
      <p>
        <strong>Registered Name:</strong> Coaching Federation of Aligarh (CFA)<br />
        <strong>Location:</strong> Aligarh, Uttar Pradesh, India<br />
        <strong>Founded:</strong> 2026<br />
        <strong>Contact:</strong> <a href="mailto:info@cfaaligarh.org">info@cfaaligarh.org</a>
      </p>

      <h2>Disclaimer</h2>
      <p>
        The information on this website is provided for general informational purposes. While CFA strives
        to keep content accurate and up to date, we make no warranties—express or implied—about the
        completeness, reliability, or suitability of the information.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Content on this site does not constitute legal, financial, or professional advice. Member institutes
        should seek independent counsel for matters specific to their operations.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to third-party sites. CFA is not responsible for the content or
        privacy practices of external websites.
      </p>

      <h2>Copyright</h2>
      <p>
        © 2026 Coaching Federation of Aligarh (CFA). All rights reserved. The CFA name, logo, and official
        seal may not be used without written authorization from the Executive Council.
      </p>

      <h2>Governing Law</h2>
      <p>
        These notices and use of this website are governed by the laws of India. Any disputes shall be
        subject to the jurisdiction of courts in Aligarh, Uttar Pradesh.
      </p>
    </ContentPage>
  );
}
