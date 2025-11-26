import PolicyChip from "../PolicyChip";

export default function PolicyChipExample() {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-background">
      <PolicyChip label="LTV ceiling" value="50%" variant="limit" meta="System-enforced" />
      <PolicyChip label="Exception path" value="Active" variant="exception" meta="Human sign-off" />
      <PolicyChip label="PII retained" value="0" variant="info" meta="Privacy by design" />
      <PolicyChip label="Breach detected" value="Alert" variant="breach" />
    </div>
  );
}
