type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen scroll-smooth"
      style={{ backgroundColor: "#B695C0" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex gap-12 items-center justify-center">
          <a
            href="#home"
            className="text-white uppercase tracking-[0.3em] hover:opacity-70"
          >
            Home
          </a>

          <a
            href="#gallery"
            className="text-white uppercase tracking-[0.3em] hover:opacity-70"
          >
            Gallery
          </a>

          <a
            href="#foryou"
            className="text-white uppercase tracking-[0.3em] hover:opacity-70"
          >
            ForYou
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">{children}</div>
    </div>
  );
}