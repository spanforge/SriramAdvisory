import Link from "next/link";
export default function SprintOutline() {
  return <div>
    <p className="sa-illustrative">Illustrative engagement format. Your proposal confirms the actual scope, schedule and participant time.</p>
    <div className="sa-grid">
      <article className="sa-card"><h3>Frame the question</h3><p>Begin with a sponsor discussion. Agree the intended outcome, boundaries, people to involve and materials to review.</p></article>
      <article className="sa-card"><h3>Examine and challenge</h3><p>Review the evidence and speak with agreed participants. Compare explanations, identify gaps and test the options with you.</p></article>
      <article className="sa-card"><h3>Decide and prepare</h3><p>Discuss the recommendation, assign the first actions and agree a review point. Receive the brief, decision note and action plan.</p></article>
    </div>
    <dl className="sa-scenario-detail">
      <div><dt>Planning example</dt><dd>A bounded question could be organised over two to three weeks, followed by an agreed review. Evidence availability and scope determine the actual timetable.</dd></div>
      <div><dt>Your involvement</dt><dd>A sponsor for the question, access to agreed participants, relevant redacted materials and time to review the findings. A planning example is two to four hours of sponsor involvement, with participant conversations scoped separately.</dd></div>
      <div><dt>Fees and commitment</dt><dd>The proposal sets out the fee for the agreed scope before work starts. Additional implementation work requires a separate agreement. An enquiry does not commit you to a paid service.</dd></div>
    </dl>
    <Link href="/resources/sprint-deliverables-example">See the level of detail in sample deliverables</Link>
  </div>;
}
