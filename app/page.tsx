import OnboardingFlow from '@/components/OnboardingFlow';

export default function Home() {
  return (
    <main className="h-[100dvh] w-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      {/* Mobile container simulator for desktop viewing */}
      <div className="w-full h-full max-w-md mx-auto bg-white dark:bg-zinc-950 sm:shadow-2xl sm:h-[850px] sm:max-h-[100dvh] sm:rounded-[40px] sm:overflow-hidden relative sm:border-[8px] sm:border-zinc-800">
        <OnboardingFlow />
      </div>
    </main>
  );
}
