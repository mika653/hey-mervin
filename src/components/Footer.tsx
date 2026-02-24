export default function Footer() {
  return (
    <footer className="py-10 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-text-primary"
        >
          mervin<span className="text-accent">.</span>
        </a>
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Mervin De Castro. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
