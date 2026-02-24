export default function Footer() {
  return (
    <footer className="py-14 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-text-primary"
        >
          hey mervin<span className="text-accent">!</span>
        </a>
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Mervin De Castro. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
