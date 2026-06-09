'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Map, Camera } from 'lucide-react';

// Define the steps data
const steps = [
  {
    id: 1,
    title: 'Selamat Datang di Smart Waste City',
    description: 'Bergabunglah dalam gerakan menuju komunitas yang lebih bersih dan hijau. Lapor, lacak, dan pantau sampah dengan efisien.',
    icon: Leaf,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    id: 2,
    title: 'Lapor Masalah Seketika',
    description: 'Menemukan sampah yang belum diangkut atau pembuangan ilegal? Ambil foto dan laporkan langsung ke pemerintah kota.',
    icon: Camera,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 3,
    title: 'Lacak & Pantau',
    description: 'Lacak status laporan Anda dan lihat rute pengumpulan sampah yang dioptimalkan secara langsung (real-time).',
    icon: Map,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10'
  }
];

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push('/login');
    }
  };

  const handleSkip = () => {
    router.push('/login');
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-zinc-950 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center text-center max-w-sm w-full"
          >
            {/* Illustration Placeholder / Icon */}
            <div className={`w-40 h-40 rounded-full flex items-center justify-center mb-8 ${steps[currentStep].bg}`}>
              {(() => {
                const Icon = steps[currentStep].icon;
                return <Icon size={80} className={steps[currentStep].color} strokeWidth={1.5} />;
              })()}
            </div>

            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
              {steps[currentStep].title}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              {steps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation / Footer */}
      <div 
        className="p-6 relative z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md"
        style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
      >
        {/* Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep === index ? 'w-8 bg-emerald-600' : 'w-2 bg-zinc-200 dark:bg-zinc-800'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleSkip}
            className={`text-zinc-500 font-medium px-4 py-3 transition-opacity ${
              isLastStep ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            Lewati
          </button>

          <button
            onClick={handleNext}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg shadow-emerald-500/30 min-w-[140px]"
          >
            {isLastStep ? (
              'Mulai Sekarang'
            ) : (
              <>
                Lanjut
                <ArrowRight size={20} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
