export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[700px] h-[700px] bg-purple-600/25 blur-[180px] rounded-full top-[-150px] right-[-120px] animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full bottom-[-150px] left-[-120px] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
    </div>
  );
}
