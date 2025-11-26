import ConsolePanel from "../ConsolePanel";

export default function ConsolePanelExample() {
  const chips = [
    { label: "LTV ceiling", value: "50%", variant: "limit" as const, meta: "System-enforced" },
    { label: "Exception path", value: "Active", variant: "exception" as const, meta: "Human sign-off" },
    { label: "PII retained", value: "0", variant: "info" as const, meta: "Privacy by design" },
  ];

  const metrics = [
    { label: "System latency", value: "14 ms" },
    { label: "Uptime", value: "99.99%" },
  ];

  return (
    <div className="p-4 bg-background max-w-md">
      <ConsolePanel title="Policy Status" chips={chips} metrics={metrics} />
    </div>
  );
}
