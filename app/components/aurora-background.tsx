export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/20 opacity-20 opacity-5 mix-blend-screen blur-[120px] dark:opacity-20" />
      <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/10 opacity-10 opacity-3 mix-blend-screen blur-[100px] [animation-delay:-5s] dark:opacity-10" />
      <div className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] animate-[aurora-float_10s_ease-in-out_infinite] rounded-full bg-primary/15 opacity-15 opacity-4 mix-blend-screen blur-[130px] [animation-delay:-2s] dark:opacity-15" />
    </div>
  );
}
