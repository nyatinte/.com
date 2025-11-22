import { NavActions } from "./nav-actions";
import { NavMenu } from "./nav-menu";
import { Logo } from "./ui/logo";

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 z-40 w-full border-[var(--border-color)]/50 border-b bg-[var(--bg-primary)]/80 backdrop-blur-md transition-all duration-500"
      id="navbar"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-8">
          <NavMenu />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}
