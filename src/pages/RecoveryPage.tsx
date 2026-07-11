import { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/recovery.css'

export default function RecoveryPage() {
  const navigate = useNavigate()
  const pageRef = useRef<HTMLDivElement>(null)
  const addWaterBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const root = pageRef.current
      if (!root) return

      const cards = root.querySelectorAll('.glass-card')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const el = card as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const addWaterBtn = addWaterBtnRef.current
    if (!addWaterBtn) return

    const handleMouseDown = () => {
      addWaterBtn.style.transform = 'scale(0.95)'
    }
    const handleMouseUp = () => {
      addWaterBtn.style.transform = 'scale(1)'
    }

    addWaterBtn.addEventListener('mousedown', handleMouseDown)
    addWaterBtn.addEventListener('mouseup', handleMouseUp)

    return () => {
      addWaterBtn.removeEventListener('mousedown', handleMouseDown)
      addWaterBtn.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={pageRef}
      className="recovery-page bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary-container/30"
    >
      {/* Side Navigation Shell */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface/70 backdrop-blur-xl border-r border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">FitFrik AI</h1>
          <p className="text-xs uppercase tracking-widest text-outline mt-1">Elite Performance</p>
        </div>
        <div className="space-y-2 flex-grow">
          {/* Dashboard */}
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98] text-left"
            onClick={() => navigate("/")}
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary">dashboard</span>
            <span className="font-medium">Dashboard</span>
          </button>
          {/* Recovery Plans (Active) */}
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-primary/5 transition-all duration-200 rounded-xl group active:scale-[0.98] text-left"
            onClick={() => navigate("/recovery")}
          >
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fitness_center
            </span>
            <span className="font-medium">Recovery Plans</span>
          </button>
          {/* Scan History / Analysis */}
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98] text-left"
            onClick={() => navigate("/analysis")}
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary">history</span>
            <span className="font-medium">Analysis</span>
          </button>
          {/* Nutrition */}
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98] text-left"
            onClick={() => navigate("/nutrition")}
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary">person</span>
            <span className="font-medium">Nutrition</span>
          </button>
        </div>
        <div className="mt-auto px-4 pb-4">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
            Upgrade to Pro
          </button>
        </div>
      </nav>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/70 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center bg-surface-container-low px-4 py-1.5 rounded-full w-96 border border-outline-variant/30">
          <span className="material-symbols-outlined text-outline mr-2">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/60"
            placeholder="Search insights..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="relative hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-variant border border-white/20 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Profile avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FA9NLLQWIdvZ1cXiN33imAi76Bm4-ufGe4ikAgQJ0R9UfUI8tQpKdNSKfYH-J1DdhssrLn-Ej4jsdOzw5F2Z67MrNNWJxIQJ9mi7eeDeVkU8hKbKwmQHrZVeA3oIA2rWSl9aQ-XrmX4dcLzHjKeUt-GHXpw_-NdGBiB9LZjB2ybD4VUZvYvYsJYJxAXYJgtvvKJ1TPUVolcZrjj1MU3SSaJoAYO4NaK8h4OOzTk2jkF91me119kWPjENhosYDU_BEs7dYwQw0Ed7"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 pb-32 px-margin-desktop min-h-screen">
        {/* Hero AI Status Card */}
        <section className="glass-card ai-inner-glow rounded-[20px] p-stack-lg flex items-center justify-between gap-8 mb-stack-lg border-primary/10">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-container p-1 bg-white">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="AI Coach avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3v-w4sEFKus0bhVhitPdax9M1EiqsZ2wVZmXAv62lVw0Hik-qDDInolQuoTcfeaIZ98xynOU9QlpthebVZffvwZdoI_l7WrSFcYLWUOxaQweIjqMgYVDVFVJKYLVxcHJqyp8waGH3u3ptLkc07pffghnEz3q9PLo__XQ9qLxZCMCgf0Z_0dgIC7XNBDYexH20PjmmQcpVEM3yJBKyjBX1Knnl4CoE_NphX2g6Hj2ozVh5GsfaCV2pLBdLcNIUNBf8GY4Oa9UjkSAM"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-container rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <span className="material-symbols-outlined text-white text-[14px]">auto_awesome</span>
              </div>
            </div>
            <div>
              <span className="bg-primary-container/10 text-primary text-[12px] px-3 py-1 rounded-full font-bold tracking-wide uppercase">
                AI COACH ANALYSIS READY
              </span>
              <h2 className="font-display-lg text-[32px] leading-tight text-on-background mt-2">
                Your Recovery Plan is Ready
              </h2>
              <p className="text-on-surface-variant mt-1">
                Based on your sleep score (84) and morning heart rate variability.
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-primary font-bold text-headline-md">Optimum</div>
            <div className="text-outline text-sm">Status: High Readiness</div>
          </div>
        </section>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Recommendations Section */}
          <div className="col-span-8 space-y-gutter">
            {/* Diet Recommendations */}
            <div className="glass-card rounded-[20px] p-stack-lg group hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                  </div>
                  <h3 className="font-headline-md text-xl">Diet Recommendations</h3>
                </div>
                <span className="text-primary text-sm font-bold">Today&apos;s Focus</span>
              </div>
              <div className="grid grid-cols-2 gap-stack-md">
                <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                  <div className="text-outline text-[13px] font-bold uppercase tracking-wider">Dinner Strategy</div>
                  <div className="font-bold text-on-surface">Reduce dinner carbs</div>
                  <p className="text-sm text-on-surface-variant">
                    Switch to steamed greens to optimize overnight fat oxidation.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                  <div className="text-outline text-[13px] font-bold uppercase tracking-wider">Post-Training</div>
                  <div className="font-bold text-on-surface">Increase protein</div>
                  <p className="text-sm text-on-surface-variant">
                    Aim for 40g whey isolate or plant protein within 30 mins.
                  </p>
                </div>
              </div>
            </div>

            {/* Workout Recommendations */}
            <div className="glass-card rounded-[20px] p-stack-lg group hover:border-secondary/30 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">fitness_center</span>
                  </div>
                  <h3 className="font-headline-md text-xl">Workout Recommendations</h3>
                </div>
                <span className="text-secondary text-sm font-bold">Active Recovery</span>
              </div>
              <div className="grid grid-cols-2 gap-stack-md">
                <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">directions_walk</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">30 min walk</div>
                    <div className="text-sm text-on-surface-variant">Low intensity (Zone 1)</div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">self_improvement</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Stretching</div>
                    <div className="text-sm text-on-surface-variant">15 min full-body mobility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-4 space-y-gutter">
            {/* Hydration Tracker */}
            <div className="glass-card rounded-[20px] p-stack-lg h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface">water_drop</span>
                </div>
                <h3 className="font-headline-md text-xl">Hydration</h3>
              </div>
              <div className="relative flex-grow flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 rounded-full border-8 border-surface-container overflow-hidden flex items-center justify-center">
                  {/* Animated Wave Background */}
                  <div className="absolute bottom-0 left-0 w-full h-[70%] bg-primary-container/20 overflow-hidden">
                    <div
                      className="absolute bottom-0 left-0 w-[200%] h-full bg-primary-container/40 animate-wave rounded-t-[40%]"
                      style={{ left: '-50%' }}
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-[200%] h-full bg-primary-container/60 animate-wave rounded-t-[45%] delay-700"
                      style={{ left: '-10%' }}
                    ></div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="font-display-lg text-4xl text-on-background">1.4L</div>
                    <div className="text-outline text-sm font-bold">Goal: 2.0L</div>
                  </div>
                </div>
                <button
                  ref={addWaterBtnRef}
                  className="mt-8 text-primary font-bold flex items-center gap-2 hover:bg-primary/5 px-4 py-2 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined">add</span>
                  Add 250ml
                </button>
              </div>
              {/* AI Quote */}
              <div className="mt-12 bg-primary/5 p-4 rounded-2xl border-l-4 border-primary italic text-on-surface-variant text-sm relative">
                <span className="material-symbols-outlined absolute -top-3 -left-1 text-primary-container opacity-20 text-4xl">
                  format_quote
                </span>
                &quot;A hydrated muscle is a strong muscle. Maintaining cell volume is key to accelerating your recovery today.&quot;
                <div className="mt-2 font-bold not-italic text-primary">— FitFrik AI</div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* AI Coach Floating Orb Trigger */}
      <div className="fixed bottom-32 right-12 z-50">
        <button className="w-14 h-14 rounded-full glass-card flex items-center justify-center relative group overflow-hidden">
          <div className="absolute inset-0 ai-orb-glow"></div>
          <span className="material-symbols-outlined text-primary relative z-10 group-hover:scale-110 transition-transform">
            auto_awesome
          </span>
        </button>
      </div>

      {/* Primary Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit z-50">
        <div className="glass-card px-8 py-4 rounded-full flex items-center gap-12 border-primary/20 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Plan Overview</span>
            <span className="text-on-surface font-bold">7-Day Optimized Recovery Cycle</span>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            Accept Recovery Plan
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
          </button>
        </div>
      </div>
    </div>
  )
}