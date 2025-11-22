import { GeometricPenguin } from "./geometric-penguin";

export function HeroVisual() {
  return (
    <div className="relative order-1 flex h-[500px] w-full animate-fade-in-up items-center justify-center delay-500 lg:order-2 lg:justify-end">
      <div className="absolute h-[500px] w-[500px] animate-[spin_60s_linear_infinite] rounded-full border border-[#88C0D0]/10" />
      <div className="absolute h-[300px] w-[300px] animate-[spin_40s_linear_infinite_reverse] rounded-full border border-[var(--text-secondary)]/20 border-dashed" />
      <GeometricPenguin />
    </div>
  );
}
