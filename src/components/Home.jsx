import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const onKey = () => {
      // noop for now - could handle interactions
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold tracking-tight">@yourname</div>
        <nav className="flex items-center gap-6 text-sm text-blue-200/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="py-16">
          <h1 className="text-4xl font-bold md:text-6xl">Hi, I'm Your Name</h1>
          <p className="mt-4 max-w-2xl text-blue-200/80 md:text-lg">
            I build delightful web experiences with React, TypeScript, and 3D touches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200/90">Frontend</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200/90">Backend</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200/90">3D</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200/90">UI/UX</span>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="py-12 border-t border-white/10">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30" />
              <h3 className="mt-4 text-xl font-semibold">Interactive Dashboard</h3>
              <p className="mt-1 text-blue-200/80 text-sm">A data-rich UI with animations and charts.</p>
            </article>
            <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="h-40 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30" />
              <h3 className="mt-4 text-xl font-semibold">3D Product Teaser</h3>
              <p className="mt-1 text-blue-200/80 text-sm">A playful 3D experience built with Spline.</p>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 border-t border-white/10">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl text-blue-200/80">
            I'm a developer and designer focused on crafting interfaces that feel fast, polished, and fun.
            I enjoy working across the stack and bringing ideas to life with modern tools.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 border-t border-white/10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-blue-200/80">Email me at you@example.com</p>
        </section>
      </main>

      <footer className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-6 py-8 text-sm text-blue-300/60">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}
