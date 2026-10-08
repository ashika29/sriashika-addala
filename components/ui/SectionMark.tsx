type SectionMarkProps = {
  n: string;
  label: string;
};

export function SectionMark({ n, label }: SectionMarkProps) {
  return (
    <div
      className="font-mono"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 56,
      }}
    >
      <span style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em" }}>{n}</span>
      <span style={{ flex: "0 0 64px", height: 1, background: "var(--rule-strong)" }} />
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
