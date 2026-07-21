export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/15 dark:bg-black/25 backdrop-blur-2xl transition-all duration-500">
      {/* 1. Subtle Ambient Glows (Ultra Soft) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      {/* 2. Ultra-Transparent Floating Glass Card */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-8 sm:p-12 rounded-3xl bg-white/10 dark:bg-white/3 border border-white/30 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
        {/* 3. Laser Orbit Spinner & Floating Badge */}
        <div className="relative flex items-center justify-center w-28 h-28">
          {/* Outer Thin Static Track */}
          <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/20" />

          {/* Clockwise Laser Orbit */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 animate-spin" />

          {/* Counter-Clockwise Inner Orbit */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyan-400 border-l-pink-500 animate-[spin_2.5s_linear_infinite_reverse]" />

          {/* Center Glass Badge with Glow */}
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
              &lt;SS/&gt;
            </span>
          </div>
        </div>

        {/* 4. Minimalist Developer Typography */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Salman Sahed
          </h3>

          {/* Animated Neon Line */}
          <div className="w-32 h-0.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden relative my-1">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
          </div>

          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-slate-600 dark:text-slate-400">
            SYSTEM_LOADING...
          </span>
        </div>
      </div>
    </div>
  );
}
