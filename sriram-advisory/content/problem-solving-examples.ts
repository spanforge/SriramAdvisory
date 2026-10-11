// Fictional scenarios for demonstrating the approach; never present as client history.
export const problemSolvingExamples = [
  {
    slug: "busy-team", title: "Everyone is busy. Customers are still waiting.", context: "A growing business has a backlog of customer requests. The first suggestion is to recruit more people.",
    assumption: "The team does not have enough capacity.",
    examine: "Trace a few requests from arrival to completion. Look at queues, repeated checks, handovers and decisions awaiting approval. Ask the people doing the work where requests stop moving.",
    alternative: "The constraint could be waiting between steps rather than the time needed to do the work. More people may add another handover without removing the delay.",
    experiment: "Trial one owner for a defined request type, agree which decisions they can make and review outstanding items in a short daily check.",
    review: "Compare elapsed completion time, time spent waiting, errors and workload. Continue, adjust or stop based on what the trial reveals.",
  },
  {
    slug: "customer-promise", title: "A delivery problem that starts with the promise.", context: "A business repeatedly disappoints customers even though its team works hard to meet commitments. The first suggestion is tighter performance management.",
    assumption: "The delivery team needs more discipline.",
    examine: "Compare the customer's expectation, the proposal, the handover and the team's available capacity. Look for assumptions that became commitments without being checked.",
    alternative: "The team could be inheriting a promise it cannot reliably fulfil. The issue may sit between commercial decisions and operational reality.",
    experiment: "For one type of new commitment, introduce a short feasibility check and a written handover naming assumptions, dependencies and ownership.",
    review: "Track commitment changes, clarification requests, rework and customer feedback. Check whether the change prevents confusion without slowing straightforward decisions.",
  },
  {
    slug: "training-transfer", title: "The training happened. The work stayed the same.", context: "A business invests in a course, but sees little change in day-to-day practice. The first suggestion is a more advanced course.",
    assumption: "People still do not know enough.",
    examine: "Ask participants to apply one skill to a real task. Look at the time available to practise, manager expectations, feedback and the incentives around existing routines.",
    alternative: "The skill gap may be real, but a lack of practice and support could also prevent learning from becoming useful capability.",
    experiment: "Choose one task, protect a small practice window, pair participants for feedback and involve a manager in reviewing the work produced.",
    review: "Examine the quality of the work, confidence applying the skill and continued use after the practice period. Use the evidence to decide whether further training is needed.",
  },
] as const;
