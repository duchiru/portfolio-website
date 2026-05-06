import Link from "next/link";

function Header() {
  return (
    <header className="h-16">
      <div className="mx-auto xl:max-w-6xl lg:max-w-4xl h-full px-3 py-3 grid grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-row items-center justify-start gap-3"></div>
        <div className="flex flex-row items-center justify-center gap-3">
          <HeaderLink href="/projects">Projects</HeaderLink>
          <HeaderLink href="/blogs">Blogs</HeaderLink>
        </div>
        <div className="flex flex-row items-center justify-end gap-3"></div>
      </div>
    </header>
  );
}

function HeaderLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className="px-3 py-1.5 text-sm font-medium tracking-wide rounded-sm hover:bg-gray-500/10 transition-colors duration-200"
      {...props}
    />
  );
}

export default Header;
