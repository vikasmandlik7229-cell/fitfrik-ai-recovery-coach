import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/analysis.css'

const logEntries = [
  'Initializing sub-routine 4.9.1... Analyzing heart rate variance...',
  'Correlating sleep quality with daily exertion metrics...',
  'Detecting micro-recovery patterns in quad muscles...',
  'Syncing with global athletic benchmarks for power output...',
  'Neural Engine processing... 78% complete...',
  'Optimizing recovery schedule for upcoming 48 hours...',
]

export default function AnalysisPage() {
  const navigate = useNavigate()
  const pageRef = useRef<HTMLDivElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)
  const currentLogRef = useRef(0)

  useEffect(() => {
    const consoleEl = consoleRef.current
    if (!consoleEl) return

    const interval = setInterval(() => {
      currentLogRef.current = (currentLogRef.current + 1) % logEntries.length
      consoleEl.classList.remove('console-text')
      void consoleEl.offsetWidth
      consoleEl.textContent = logEntries[currentLogRef.current]
      consoleEl.classList.add('console-text')
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const root = pageRef.current
    if (!root) return

    const cards = root.querySelectorAll('.glass-card')
    const handlers: { card: Element; onEnter: () => void; onLeave: () => void }[] = []

    cards.forEach((card) => {
      const el = card as HTMLElement
      const onEnter = () => {
        el.style.transform = 'translateY(-4px)'
        el.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
      const onLeave = () => {
        el.style.transform = 'translateY(0px)'
      }
      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
      handlers.push({ card, onEnter, onLeave })
    })

    return () => {
      handlers.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <div
      ref={pageRef}
      className="analysis-page bg-background text-on-surface font-body-md min-h-screen overflow-hidden"
    >
      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-surface/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col py-8 px-4 z-50">
        <div 
          className="mb-10 px-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <h1 className="font-headline-md text-headline-md font-bold text-primary">FitFrik AI</h1>
          <p className="text-on-surface-variant opacity-60 text-sm">Elite Performance</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl active:scale-[0.98]"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-white/10 transition-all duration-200 rounded-xl"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigate('/analysis')
            }}
          >
            <span className="material-symbols-outlined">history</span>
            <span className="font-body-md">Scan History</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl active:scale-[0.98]"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigate('/recovery')
            }}
          >
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="font-body-md">Recovery Plans</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/10 transition-all duration-200 rounded-xl active:scale-[0.98]"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-body-md">Profile</span>
          </a>
        </nav>
        <div className="mt-auto px-2">
          <button className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg">
            Upgrade to Pro
          </button>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="ml-64 w-[calc(100%-16rem)] h-screen flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 flex justify-between items-center px-margin-desktop bg-surface/70 backdrop-blur-xl border-b border-white/10 z-40">
          <div className="flex items-center gap-4 bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-xl">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md p-0 w-64"
              placeholder="Global search..."
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
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
              <img
                className="w-full h-full object-cover"
                data-alt="A professional headshot of a fit athlete with short hair, wearing a high-tech athletic tank top. The lighting is crisp and cool-toned, reflecting a laboratory-like precision environment. The background is slightly blurred with soft neon green hints, maintaining a premium fitness app aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNRAvJJYOHBmV1wUR44Qm3bE5XYotHmwC1rQ_Xo0Qtu2W5NN7N5mV26MWrfk-CLyRC2oi-AwXEUpQq_VYN-RiHPI3ytJru7w3wJ9nLTmxW9Kuv-r6c2WCmvRWx4sAzPLVw4rKWXeHJfpdqL8Lrl8oGuzQFiZ-0QTJElGGQfMQNh0W75UPai4aQLmAsv099q5AtS5Fx2dJg3vTI21B2koAxdgycjb13eHna3ESz2q-TgpBy0jJtnWCxWQE0PDEeEy9njIj_sUGGFv8"
              />
            </div>
          </div>
        </header>
        {/* Command Center View */}
        <div className="flex-1 p-margin-desktop relative overflow-y-auto custom-scrollbar">
          {/* Background Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
            {/* Left: Checklist Analysis */}
            <section className="col-span-12 lg:col-span-3 space-y-gutter">
              <div className="glass-card p-stack-lg rounded-[20px] relative overflow-hidden">
                <div className="scan-line"></div>
                <h3 className="font-headline-md text-label-sm uppercase tracking-widest text-on-surface-variant mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Live Diagnostics
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-body-md font-medium">Reading Profile</span>
                    </div>
                    <span className="text-xs font-mono-stats text-primary">Done</span>
                  </li>
                  <li className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-body-md font-medium">Checking Goals</span>
                    </div>
                    <span className="text-xs font-mono-stats text-primary">Done</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary animate-spin">sync</span>
                      <span className="text-body-md font-medium">BMI Analysis</span>
                    </div>
                    <span className="text-xs font-mono-stats text-on-surface-variant">78%</span>
                  </li>
                  <li className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">radio_button_unchecked</span>
                      <span className="text-body-md font-medium">Weekly Diet</span>
                    </div>
                    <span className="text-xs font-mono-stats">Wait</span>
                  </li>
                  <li className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">radio_button_unchecked</span>
                      <span className="text-body-md font-medium">Sleep Cycle</span>
                    </div>
                    <span className="text-xs font-mono-stats">Wait</span>
                  </li>
                  <li className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">radio_button_unchecked</span>
                      <span className="text-body-md font-medium">Muscle Recovery</span>
                    </div>
                    <span className="text-xs font-mono-stats">Wait</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-stack-lg rounded-[20px]">
                <h4 className="text-label-sm font-bold text-on-surface-variant mb-4 uppercase">Environmental Load</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-medium">Metabolic Rate</span>
                    <span className="text-sm font-mono-stats text-primary">High</span>
                  </div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary-container w-[82%]"></div>
                  </div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-medium">Oxidative Stress</span>
                    <span className="text-sm font-mono-stats text-error">Moderate</span>
                  </div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-error w-[45%]"></div>
                  </div>
                </div>
              </div>
            </section>
            {/* Center: AI Neural Engine */}
            <section className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center py-stack-lg relative">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Orbit Rings */}
                <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-[1px] border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-10 border-[1px] border-primary/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                {/* Core Engine */}
                <div className="relative w-48 h-48 bg-white glass-card rounded-full flex flex-col items-center justify-center ai-glow z-10">
                  <span className="text-display-lg font-display-lg text-primary mb-0">
                    78<span className="text-headline-md">%</span>
                  </span>
                  <span className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    Processing
                  </span>
                  {/* Visualizer Particles (Simulated) */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 right-0 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 left-0 w-2 h-2 bg-primary-container rounded-full opacity-50"></div>
                  </div>
                </div>
                {/* Radial Data Nodes */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-xs font-mono-stats text-on-surface-variant block mb-1">DATA_INFLUX</span>
                  <div className="h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent mx-auto"></div>
                </div>
                <div className="absolute top-1/4 -left-20 text-right">
                  <span className="text-xs font-mono-stats text-on-surface-variant">NEURAL_ID: 0x8FA2</span>
                </div>
                <div className="absolute top-1/4 -right-20 text-left">
                  <span className="text-xs font-mono-stats text-on-surface-variant">LAYER_DEPTH: 12</span>
                </div>
              </div>
              <div className="mt-12 text-center max-w-md">
                <h2 className="font-headline-md text-headline-md mb-2">Analyzing Performance Patterns</h2>
                <p className="text-on-surface-variant">
                  The AI is cross-referencing your biomechanical data with your 90-day trajectory to optimize the
                  next recovery phase.
                </p>
              </div>
            </section>
            {/* Right: Metrics & Insights */}
            <section className="col-span-12 lg:col-span-3 space-y-gutter">
              <div className="glass-card p-stack-lg rounded-[20px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                  </div>
                  <div>
                    <h4 className="text-body-md font-bold">Neural Load</h4>
                    <p className="text-xs text-on-surface-variant">System efficiency</p>
                  </div>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-headline-md font-mono-stats font-bold">4.2</span>
                  <span className="text-label-sm text-primary pb-1">ms/query</span>
                </div>
                <div className="flex gap-1 h-4 items-end">
                  <div className="w-full bg-primary/20 h-2 rounded-t-sm"></div>
                  <div className="w-full bg-primary/40 h-3 rounded-t-sm"></div>
                  <div className="w-full bg-primary/20 h-1 rounded-t-sm"></div>
                  <div className="w-full bg-primary h-4 rounded-t-sm"></div>
                  <div className="w-full bg-primary/60 h-2 rounded-t-sm"></div>
                  <div className="w-full bg-primary/30 h-3 rounded-t-sm"></div>
                </div>
              </div>
              <div className="glass-card p-stack-lg rounded-[20px]">
                <h4 className="text-label-sm font-bold text-on-surface-variant mb-4 uppercase">Anomaly Detection</h4>
                <div className="p-3 bg-error/5 border border-error/10 rounded-xl mb-3">
                  <div className="flex items-center gap-2 text-error mb-1">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    <span className="text-xs font-bold uppercase">Minor Alert</span>
                  </div>
                  <p className="text-xs font-medium">
                    Irregular HRV pattern detected during REM cycle. Suggesting magnesium adjustment.
                  </p>
                </div>
                <button
                  className="w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/20"
                  onClick={() => navigate('/nutrition')}
                >
                  View Detailed Log
                </button>
              </div>
              <div className="glass-card p-stack-lg rounded-[20px] bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-primary-container bg-primary/10 px-2 py-0.5 rounded">
                    AI COACH
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">more_horiz</span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;You&apos;re tracking 15% above your baseline for power output. I recommend a 20-minute cold
                  plunge today to maintain this momentum.&quot;
                </p>
              </div>
            </section>
          </div>
        </div>
        {/* Footer / Console Bar */}
        <footer className="h-24 bg-on-background text-white px-margin-desktop flex items-center gap-12 z-40">
          <div className="flex items-center gap-4 border-r border-white/10 pr-12">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Neural Link: Active</span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-6 overflow-hidden">
            <span className="material-symbols-outlined text-white/40">terminal</span>
            <div ref={consoleRef} className="font-mono-stats text-sm text-white/60 console-text">
              Initializing sub-routine 4.9.1... Analyzing heart rate variance... Correlating sleep quality...
            </div>
          </div>
          <div className="flex items-center gap-8 ml-auto">
            <div className="text-right">
              <p className="text-[10px] uppercase text-white/40 font-bold mb-1">Encrypted Session</p>
              <p className="text-xs font-mono-stats text-white/80">AES-256 BIT</p>
            </div>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-95 group">
              <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">
                sync
              </span>
            </button>
          </div>
        </footer>
        {/* AI Floating Element */}
        <button className="fixed bottom-32 right-8 w-16 h-16 rounded-full bg-white glass-card flex items-center justify-center ai-glow group z-50">
          <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
            bolt
          </span>
          <div className="absolute -top-12 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ASK AI COACH
          </div>
        </button>
      </main>
    </div>
  )
}