import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/nutrition.css'

export default function NutritionPage() {
  const navigate = useNavigate()
  const pageRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    const segments = page.querySelectorAll('.donut-segment')

    const handleMouseEnter = (event: Event) => {
      ;(event.currentTarget as SVGCircleElement).setAttribute('stroke-width', '18')
    }

    const handleMouseLeave = (event: Event) => {
      ;(event.currentTarget as SVGCircleElement).setAttribute('stroke-width', '14')
    }

    segments.forEach((segment) => {
      segment.addEventListener('mouseenter', handleMouseEnter)
      segment.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      segments.forEach((segment) => {
        segment.removeEventListener('mouseenter', handleMouseEnter)
        segment.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const searchInput = searchInputRef.current
    if (!searchInput?.parentElement) return

    const parent = searchInput.parentElement

    const handleFocus = () => {
      parent.classList.add('ring-2', 'ring-primary/20', 'bg-white')
    }

    const handleBlur = () => {
      parent.classList.remove('ring-2', 'ring-primary/20', 'bg-white')
    }

    searchInput.addEventListener('focus', handleFocus)
    searchInput.addEventListener('blur', handleBlur)

    return () => {
      searchInput.removeEventListener('focus', handleFocus)
      searchInput.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <div ref={pageRef} className="nutrition-page bg-surface font-body-md text-on-surface">
      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface/70 backdrop-blur-xl border-r border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] z-50 flex flex-col py-8 px-4">
        <div className="mb-12 px-4">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">FitFrik AI</h1>
          <p className="text-on-surface-variant text-sm opacity-70">Elite Performance</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-white/10 rounded-xl group active:scale-[0.98]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/analysis");
            }}
          >
            <span className="material-symbols-outlined">history</span>
            <span className="font-body-md text-body-md">Scan History</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/recovery");
            }}
          >
            <span className="material-symbols-outlined group-hover:text-primary">fitness_center</span>
            <span className="font-body-md text-body-md">Recovery Plans</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl group active:scale-[0.98]"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-primary">person</span>
            <span className="font-body-md text-body-md">Profile</span>
          </a>
        </nav>
        <div className="mt-auto px-4 py-6">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
            Upgrade to Pro
          </button>
        </div>
      </aside>
      {/* Top App Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/70 backdrop-blur-xl border-b border-white/10 shadow-sm z-40 flex justify-between items-center px-margin-desktop">
        <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            ref={searchInputRef}
            className="bg-transparent border-none focus:ring-0 text-sm w-full"
            placeholder="Search nutrition scans..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              settings
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
              <img
                className="w-full h-full object-cover"
                data-alt="A professional profile headshot of a fitness-conscious user, looking clean and high-performance, against a minimalist soft gray background that complements the elite health platform aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnyNbZu0ywvFnSzNE-_T5mj8_mrTNnhGhymxN5v02IecjQvi20Z2cVtr8R92uSN6RbvzQHA6IqMZQY2aOyFipUeZFLublvK0gJSFz5svAruMUyuIuMNRp0qz7VPm95nJQSxJfVhiCuV9bERG0Ue3zRsxgwFIZ-kkAbfWp02nu1ZkLv1a7rvcYpAZFWmvp1v411TabvAPghedBHMNauG02XfQNTsXMh5FYYfKTaajrNgdRcPLX9kljt69SjOshmS3_yNInc7s6-ghw_"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Main Content Area */}
      <main className="ml-64 mt-16 p-margin-desktop min-h-screen">
        <div className="max-w-container-max mx-auto space-y-stack-lg">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Nutrition Analysis</span>
              <h2 className="font-display-lg text-display-lg mt-2">Burger Combo Scan</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-outline-variant text-primary font-semibold rounded-xl hover:bg-white/10 transition-all">
                Export Data
              </button>
              <button className="px-6 py-2 bg-primary text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-md shadow-primary/20">
                Log Entry
              </button>
            </div>
          </div>
          {/* Dashboard Split View */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column: Visual Analysis */}
            <div className="col-span-5 space-y-gutter">
              <div className="relative rounded-[20px] overflow-hidden group aspect-[4/5] glass-card">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A gourmet, high-quality photograph of a grass-fed beef burger combo with crispy sweet potato fries on a minimalist ceramic plate. The lighting is bright and crisp, emphasizing textures and fresh ingredients. The background is a clean, modern kitchen surface with subtle emerald green accents, fitting the professional health-tech UI style."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwhSZqjVcA9GHf8qm_cbatL6WGZX94Y1MuARAaBjGGzwauWuzYaVRqajTJypOceXWTq1dQQ6S4OAmtYaYrh9S0Sp4WTh9rdY_rlm_JXEsLUcFg8Ux3tqUe2fBPkkVP28Bkwpiw4hqEDL-4Qdf8s7O6t_MgEhOHLJDaHuPXUOkRAupfvDn0pJ_KidHG5GhA4fOmyY397GZ75Cue3AeajLA9sAyj2yOeAThAhk2yuxQ4kqB6i276WHAVNRdiQjgG34JC_cMxRa7gQmZA"
                />
                {/* Macro Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="glass-card p-4 rounded-xl border-white/20 text-white backdrop-blur-md">
                    <p className="text-xs uppercase tracking-widest opacity-80">Detected Content</p>
                    <p className="text-lg font-bold">Grass-fed Beef Burger</p>
                    <p className="text-sm opacity-90">Sweet Potato Fries, Brioche</p>
                  </div>
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </div>
                </div>
                {/* AR Labels (Simulated) */}
                <div className="absolute top-[30%] left-[40%] flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-white animate-pulse"></div>
                  <div className="mt-2 glass-card px-3 py-1 rounded-full text-[10px] font-bold text-on-surface">
                    PROTEIN: 32g
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Data Breakdown */}
            <div className="col-span-7 space-y-gutter">
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-4 gap-4">
                <div className="glass-card p-6 rounded-[20px] border-white/10 flex flex-col">
                  <span className="text-on-surface-variant text-sm font-medium">Calories</span>
                  <span className="font-mono-stats text-2xl font-bold mt-2">842</span>
                  <div className="mt-4 w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[42%]"></div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-[20px] border-white/10 flex flex-col">
                  <span className="text-on-surface-variant text-sm font-medium">Protein</span>
                  <span className="font-mono-stats text-2xl font-bold mt-2 text-primary">34g</span>
                  <div className="mt-4 w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[68%]"></div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-[20px] border-white/10 flex flex-col">
                  <span className="text-on-surface-variant text-sm font-medium">Carbs</span>
                  <span className="font-mono-stats text-2xl font-bold mt-2">78g</span>
                  <div className="mt-4 w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[55%]"></div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-[20px] border-white/10 flex flex-col">
                  <span className="text-on-surface-variant text-sm font-medium">Fat</span>
                  <span className="font-mono-stats text-2xl font-bold mt-2">42g</span>
                  <div className="mt-4 w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
                    <div className="bg-error h-full w-[80%]"></div>
                  </div>
                </div>
              </div>
              {/* Chart and Detailed Grid Section */}
              <div className="glass-card p-8 rounded-[20px] border-white/10 flex gap-8">
                <div className="w-1/2 flex flex-col items-center justify-center relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      className="text-surface-container-low"
                      cx="96"
                      cy="96"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="14"
                    ></circle>
                    <circle
                      className="text-primary donut-segment"
                      cx="96"
                      cy="96"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeDasharray="502"
                      strokeDashoffset="150"
                      strokeWidth="14"
                    ></circle>
                    <circle
                      className="text-secondary donut-segment"
                      cx="96"
                      cy="96"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeDasharray="502"
                      strokeDashoffset="380"
                      strokeWidth="14"
                    ></circle>
                    <circle
                      className="text-tertiary-container donut-segment"
                      cx="96"
                      cy="96"
                      fill="transparent"
                      r="80"
                      stroke="currentColor"
                      strokeDasharray="502"
                      strokeDashoffset="450"
                      strokeWidth="14"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-mono-stats text-3xl font-extrabold">Macro</span>
                    <span className="text-xs uppercase tracking-widest text-on-surface-variant">Distribution</span>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-xs font-bold">Protein</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <span className="text-xs font-bold">Carbs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                      <span className="text-xs font-bold">Fat</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 space-y-4">
                  <h3 className="font-bold text-lg mb-4">Micronutrient Profile</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-on-surface-variant">Sodium</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-stats font-bold">1200mg</span>
                        <span className="text-error material-symbols-outlined text-sm">trending_up</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-on-surface-variant">Fiber</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-stats font-bold">8g</span>
                        <span className="text-primary material-symbols-outlined text-sm">check_circle</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-on-surface-variant">Sugars</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-stats font-bold">12g</span>
                        <span className="text-on-surface-variant material-symbols-outlined text-sm">info</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-on-surface-variant">Vitamin A</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-stats font-bold">15% DV</span>
                        <span className="text-primary material-symbols-outlined text-sm">add</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Recommendations Panel */}
          <section className="glass-card p-8 rounded-[24px] border-primary/10 emerald-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-32 h-32 ai-orb-glow rounded-full blur-3xl opacity-20"></div>
            </div>
            <div className="flex items-start gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Nutrition Insights</h3>
                  <p className="text-on-surface-variant">
                    Based on your metabolic profile and today's activity level, here is the recovery strategy for this
                    meal.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white/40 p-5 rounded-2xl border border-white/20">
                    <span className="material-symbols-outlined text-primary mb-3">water_drop</span>
                    <h4 className="font-bold mb-1">Increase Hydration</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      High sodium content detected. Aim for 500ml extra water in the next 2 hours.
                    </p>
                  </div>
                  <div className="bg-white/40 p-5 rounded-2xl border border-white/20">
                    <span className="material-symbols-outlined text-primary mb-3">directions_run</span>
                    <h4 className="font-bold mb-1">Post-Meal Walk</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      A 15-min steady walk will help blunt the glucose spike from the brioche bun.
                    </p>
                  </div>
                  <div className="bg-white/40 p-5 rounded-2xl border border-white/20">
                    <span className="material-symbols-outlined text-primary mb-3">restaurant</span>
                    <h4 className="font-bold mb-1">Next Meal Adjustment</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Prioritize leafy greens and lean protein for dinner to balance today's fats.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-surface"
                        data-alt="User avatar 1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvG7mAZKmSfKuregytsZf3XwMaV0TY6zV-2ZuRwxFuY9VPLWrG6hbt-QiJ5vrC95-edIQwrcMTFHG8rtQSAMyvWerTAcidhm639sZJQswUCWBI32N3JYH0EPrS6V0527rZIp89WGyKgNbFL1XqwXM-BT4HwitiBrmNqBCHNU5A-ymQwyp0PZdhryBufol6qZj3qrZKGV8FvFmu20TIdvRr4E_NyLo-bKtaRwbQw7-RUTaOLOuvFti4N2lkYMYs6qs2MrB7EOp4OMla"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-surface"
                        data-alt="User avatar 2"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXAmCDE1LStlt1VqwAMYsBQNz6DOjmq6KlJLwuSCm1fii617Pl4ekYEjD4McaYKSqpfbMJ2yGIv9v6f6fInaOFWsrjAFJi-YqAUqga73q9EI32MNcgBl4-MPVkYgNZOvTeahyOgDCdWVkPZlafDAt8nkDbcm-Ly3o8CFt9gYsefTet88-9PntH9fT-8s-D9Qv0Pp6uVohN_DptpjXuykFr5LoOZtRpKh_2vjNoKpE11EM3BJlLQfK2QPeebGbldPAVJYGQ--1kSQaz"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-surface"
                        data-alt="User avatar 3"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6psDKGzGiq37tsconGYTbxFmY0msbmgUmQ46ZYW_vdSdWA6WLluEx9voHlGFylCGHijbwmQAKybwAcKLhLGmbXiLDk9Xiog-jK8TdZ_9U3Dptr8Cmih16zLGx2WdrbGJKMsvPWcsG6T9RWos2KELqY7WU3_wP8LzzXT1KtEcIaIdMPBDnwtjRJ7ZCClmj63NsscY5fvMlDk7No5sOk86MKhWHMUTaB0BD1tso8Yv5T0PabfQVPUoHc1HL2PW02vrGjkxCi5NDY6E"
                      />
                    </span>
                    <span className="text-sm font-medium text-on-surface-variant">
                      Join 2,400+ users optimizing their recovery today.
                    </span>
                  </div>
                  <button
                    className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:gap-4 transition-all duration-300 group shadow-lg shadow-primary/20"
                    onClick={() => navigate('/recovery')}
                  >
                    Continue to Recovery Coach
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Floating AI Trigger */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-full glass-card border-primary/30 flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20"></div>
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </button>
      </div>
    </div>
  )
}