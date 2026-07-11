import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/dashboard.css'

export default function DashboardPage() {
  const navigate = useNavigate()
  const progressRingRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const circle = progressRingRef.current
    if (!circle) return

    const radius = circle.r.baseVal.value
    const circumference = radius * 2 * Math.PI

    circle.style.strokeDasharray = `${circumference} ${circumference}`

    function setProgress(percent: number) {
  if (!circle) return

  const offset = circumference - (percent / 100) * circumference
  circle.style.strokeDashoffset = `${offset}`
}

    circle.style.strokeDashoffset = `${circumference}`

    const timeout = setTimeout(() => {
      setProgress(82)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="dashboard-page font-body-md text-on-surface"
      style={{
        backgroundColor: '#f8f9ff',
        backgroundImage:
          'radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.05) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.08) 0px, transparent 50%)',
        minHeight: '100vh',
      }}
    >
      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface/70 backdrop-blur-xl border-r border-white/10 flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">FitFrik AI</h1>
          <p className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">Elite Performance</p>
        </div>
        <nav className="flex-1 space-y-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-primary font-bold border-r-2 border-primary bg-white/10 w-full text-left"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span>Dashboard</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/analysis")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:bg-white/10 w-full text-left"
          >
            <span className="material-symbols-outlined" data-icon="history">
              history
            </span>
            <span>Scan History</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/recovery")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:bg-white/10 w-full text-left"
          >
            <span className="material-symbols-outlined" data-icon="fitness_center">
              fitness_center
            </span>
            <span>Recovery Plans</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/nutrition")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-on-surface-variant hover:bg-white/10 w-full text-left"
          >
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span>Profile</span>
          </button>
        </nav>
        <div className="mt-auto px-4">
          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
            <p className="text-xs font-bold text-primary mb-2">PRO PLAN ACTIVE</p>
            <button className="w-full py-2 bg-gradient-to-r from-primary to-primary-container text-white rounded-lg text-sm font-semibold transition-transform active:scale-95">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/70 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-10 z-40">
        <div className="relative w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="w-full bg-white/20 border-none rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary/30 transition-all"
            placeholder="Search metrics or insights..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">
              notifications
            </span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
          </button>
          <div className="flex items-center gap-3 ml-2">
            <div className="text-right">
              <p className="text-sm font-bold">Alex Johnson</p>
              <p className="text-[10px] text-on-surface-variant">ELITE LEVEL</p>
            </div>
            <img
              className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover"
              data-alt="Professional portrait of an athletic user with short hair, clean-shaven face, looking directly at the camera with a confident smile. The lighting is bright and high-key, set against a minimalist white studio background. The overall aesthetic is clean, modern, and health-focused, matching the premium emerald and white UI of the fitness application."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaSzRRJqe2lgqE1VEDPc3yL-eLpsV_0ksEGRB5VYdBBXr2D09pKFO-zsDNXCxeVbtMmjw3rbWzw7IgxwjIegBsXBLFiaI4veGD36M8iPyY14z54vNn-4mtFdjHvTyVdFsyv_KsIUT1RgfRZdk32UztLKBikQi7c31VBRFX1h1EB4aOJzQesn0oMC-uA8lIS97H6S020E_Zby_3eiXt5idb7xQAqidu_kFyi3CyCQ4qL4MoUQ7OFhxg7yyhRtOoZnKJkJT63B0vo14D"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-10 pb-12 min-h-screen">
        {/* Header Section */}
        <section className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-background mb-1">Good Evening, Alex</h2>
            <p className="text-body-lg text-on-surface-variant">
              Your nervous system is primed for peak performance tomorrow.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2 bg-white/50 border border-white/20 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">AI Sync Active</span>
            </div>
          </div>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Left Column: Recovery Score */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
            <div className="glass-card rounded-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-full">
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Recovery Score
                </span>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="info">
                  info
                </span>
              </div>
              <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-surface-container-low"
                    cx="96"
                    cy="96"
                    fill="transparent"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="12"
                  ></circle>
                  <circle
                    ref={progressRingRef}
                    className="progress-ring-circle"
                    cx="96"
                    cy="96"
                    fill="transparent"
                    r="90"
                    stroke="url(#emerald-grad)"
                    strokeDasharray="565"
                    strokeDashoffset="101"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                  <defs>
                    <linearGradient id="emerald-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#10b981' }}></stop>
                      <stop offset="100%" style={{ stopColor: '#006c49' }}></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-extrabold font-mono-stats text-on-background">82</span>
                  <span className="text-sm font-medium text-on-surface-variant">/ 100</span>
                </div>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-6 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" data-icon="trending_up">
                  trending_up
                </span>
                +12% vs Yesterday
              </div>
              <p className="text-sm text-on-surface-variant max-w-[240px]">
                Optimal recovery detected. Focus on high-intensity training today.
              </p>
            </div>
          </div>

          {/* Center Column: 2x2 Metric Grid */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-gutter">
            {/* Calories */}
            <div className="glass-card rounded-card p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100/50 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined" data-icon="local_fire_department">
                    local_fire_department
                  </span>
                </div>
                <span className="text-xs font-mono-stats text-on-surface-variant">Goal: 2,800</span>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-extrabold font-mono-stats">2,140</p>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
                  Calories Consumed
                </p>
              </div>
              <div className="mt-auto">
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 w-[76%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Protein */}
            <div className="glass-card rounded-card p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" data-icon="egg">
                    egg
                  </span>
                </div>
                <span className="text-xs font-mono-stats text-on-surface-variant">Goal: 180g</span>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-extrabold font-mono-stats">
                  142<span className="text-sm font-normal ml-1">g</span>
                </p>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
                  Protein Intake
                </p>
              </div>
              <div className="mt-auto">
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[78%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Water */}
            <div className="glass-card rounded-card p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100/50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined" data-icon="water_drop">
                    water_drop
                  </span>
                </div>
                <span className="text-xs font-mono-stats text-on-surface-variant">Goal: 3.5L</span>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-extrabold font-mono-stats">
                  2.8<span className="text-sm font-normal ml-1">L</span>
                </p>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
                  Hydration Level
                </p>
              </div>
              <div className="mt-auto">
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-[80%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="glass-card rounded-card p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100/50 flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined" data-icon="footprint">
                    footprint
                  </span>
                </div>
                <span className="text-xs font-mono-stats text-on-surface-variant">Goal: 10k</span>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-extrabold font-mono-stats">8,412</p>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
                  Daily Steps
                </p>
              </div>
              <div className="mt-auto">
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[84%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI & Actions */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-gutter">
            {/* AI Insights */}
            <div className="glass-card rounded-card p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-primary rounded-full ai-orb"></div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-on-background">AI Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/40 rounded-xl border border-white/20">
                  <p className="text-xs text-primary font-bold mb-1">NUTRITION TIP</p>
                  <p className="text-sm text-on-surface leading-snug">
                    Increase magnesium intake tonight to improve deep sleep cycles.
                  </p>
                </div>
                <div className="p-4 bg-white/40 rounded-xl border border-white/20">
                  <p className="text-xs text-secondary font-bold mb-1">WORKOUT ANALYTICS</p>
                  <p className="text-sm text-on-surface leading-snug">
                    Your HRV is 15% higher than usual. Optimal for personal records.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate("/recovery")}
                className="mt-auto w-full py-3 bg-on-background text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-on-background/90 transition-colors"
              >
                <span className="material-symbols-outlined text-sm" data-icon="chat">
                  chat
                </span>
                Open AI Coach
              </button>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-card p-6 h-fit">
              <h3 className="font-bold text-sm uppercase tracking-widest text-on-background mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20"
                  onClick={() => navigate('/analysis')}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined" data-icon="photo_camera">
                      photo_camera
                    </span>
                  </div>
                  <span className="text-sm font-semibold">Scan Meal</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/recovery")}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined" data-icon="add_circle">
                      add_circle
                    </span>
                  </div>
                  <span className="text-sm font-semibold">Log Workout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Performance Chart (Bento Style) */}
        <section className="mt-gutter">
          <div className="glass-card rounded-card p-8 h-80 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-headline-md text-headline-md">Weekly Performance Focus</h3>
                <p className="text-on-surface-variant text-sm">
                  Aggregated recovery and exertion levels over the last 7 days.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Recovery
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-on-surface-variant"></span> Exertion
                </div>
              </div>
            </div>
            {/* Simple CSS Visual for the Chart */}
            <div className="flex items-end justify-between h-32 gap-4 px-4">
              {/* Day Columns */}
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[45%]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[65%]"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">MON</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[60%]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[40%]"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">TUE</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[30%]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[80%]"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">WED</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[75%]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[55%]"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">THU</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[50%]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[70%]"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">FRI</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-[90%] shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                  <div className="absolute bottom-0 w-1/2 left-1/4 bg-primary rounded-t h-[82%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                <span className="text-[10px] font-bold text-primary">SAT</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 opacity-50">
                <div className="w-full bg-surface-container-low rounded-t-lg relative h-24 overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary/20 h-0"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">SUN</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating AI Bubble (Trigger) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-primary to-primary-container rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center justify-center text-white ai-orb z-50">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          smart_toy
        </span>
      </button>
    </div>
  )
}