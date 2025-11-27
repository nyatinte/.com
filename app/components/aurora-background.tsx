export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-aurora-float rounded-full bg-[#5E81AC] opacity-5 mix-blend-screen blur-[120px] dark:opacity-20" />
      <div
        className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] animate-aurora-float rounded-full bg-[#8FBCBB] opacity-3 mix-blend-screen blur-[100px] dark:opacity-10"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] animate-aurora-float rounded-full bg-[#88C0D0] opacity-4 mix-blend-screen blur-[130px] dark:opacity-15"
        style={{ animationDelay: "-2s" }}
      />
    </div>
  );
}
