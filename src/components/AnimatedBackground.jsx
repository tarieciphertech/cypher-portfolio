export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full bg-cyan-500/10 blur-[150px] animate-pulse" />
      <div className="absolute -bottom-48 -left-40 w-[620px] h-[620px] rounded-full bg-purple-600/15 blur-[170px] animate-pulse" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </div>
  );
}
