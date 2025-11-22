import { NavLink } from "./nav-link";

export function NavMenu() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <NavLink href="#articles">Articles</NavLink>
      <NavLink href="#featured">Featured</NavLink>
      <NavLink href="#about">About</NavLink>
    </div>
  );
}
