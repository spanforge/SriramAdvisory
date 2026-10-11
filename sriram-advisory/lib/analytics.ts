// Analytics is optional in v2.1 and disabled until page-URL redaction and the
// three-event allowlist are verified. Preserve existing call sites without
// sending legacy assessment scores, role values, amounts or href parameters.
export function track(...arguments_: unknown[]): void {
  void arguments_;
}
