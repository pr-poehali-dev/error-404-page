const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full bg-[#e8e0d4] opacity-[0.05] blur-[120px]" />

      <div className="relative flex flex-col items-center text-center">
        <h1
          className="font-display text-[28vw] md:text-[20rem] leading-none font-semibold text-[#f5f1e8] tracking-tight animate-fade-in"
          style={{ animationDelay: '0.05s', animationFillMode: 'backwards' }}
        >
          404
        </h1>

        <div
          className="mt-2 h-px w-24 bg-[#f5f1e8]/20 animate-fade-in"
          style={{ animationDelay: '0.25s', animationFillMode: 'backwards' }}
        />

        <p
          className="mt-8 font-sans text-sm md:text-base uppercase tracking-[0.4em] text-[#f5f1e8]/50 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
        >
          Not found
        </p>

        <p
          className="mt-4 font-display italic text-lg md:text-xl text-[#f5f1e8]/40 animate-fade-in"
          style={{ animationDelay: '0.55s', animationFillMode: 'backwards' }}
        >
          Страница не найдена
        </p>
      </div>
    </div>
  );
};

export default Index;
