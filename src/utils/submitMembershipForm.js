const CFA_FORM_EMAIL = "cfaofficialin@gmail.com";

export async function submitMembershipApplication({
  principalName,
  instituteName,
  mobile,
  email,
  message,
}) {
  const response = await fetch(`https://formsubmit.co/ajax/${CFA_FORM_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: "New CFA Membership Application",
      _template: "table",
      _captcha: "false",
      "Principal / Owner": principalName,
      "Institute Name": instituteName,
      "Mobile Number": mobile,
      "Email Address": email,
      "Message / Inquiry": message || "—",
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Could not send your application. Please try again.");
  }
  return result;
}
