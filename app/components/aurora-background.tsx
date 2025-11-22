export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="aurora-blob -left-20 -top-20 h-[500px] w-[500px] animate-aurora bg-[#5E81AC]" />
      <div
        className="aurora-blob top-40 right-0 h-[400px] w-[400px] animate-aurora bg-[#88C0D0]"
        style={{
          animationDirection: "reverse",
          animationDuration: "25s",
        }}
      />
      <div className="aurora-blob bottom-0 left-1/3 h-[300px] w-[300px] animate-pulse-glow bg-[#B48EAD]" />
    </div>
  );
}
