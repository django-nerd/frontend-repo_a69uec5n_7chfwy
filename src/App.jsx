import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/home'), 5000)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      {/* Accent radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Spline Scene */}
      <div className="relative z-10 h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle top gradient overlay so text reads well */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Heading / Copy */}
      <section className="relative z-20 mx-auto -mt-12 max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Crafting playful, modern, interactive experiences
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-200/80 md:text-lg">
          Welcome to my world of code and creativity. Dive in — you’ll be taken to the full portfolio in a moment.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <p className="text-sm text-blue-200/80">Loading homepage… redirecting in 5s</p>
        </div>
      </section>

      {/* Footer hint */}
      <div className="relative z-20 mx-auto mt-10 flex max-w-5xl items-center justify-center px-6 pb-12 text-sm text-blue-300/60">
        Press any key to skip
      </div>
    </div>
  )
}

export default App
