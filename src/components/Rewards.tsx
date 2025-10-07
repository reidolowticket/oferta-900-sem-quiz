import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

interface RewardsProps {
  totalReward: number;
  onComplete: () => void;
}

export default function Rewards({ totalReward, onComplete }: RewardsProps) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = totalReward / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(totalReward);
        setIsComplete(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    const redirectTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [totalReward, onComplete]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.03),transparent_70%)]" />

      <div className="relative text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-black" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
          Parabéns!
        </h2>

        <p className="text-xl text-slate-400 mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
          Você desbloqueou
        </p>

        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
          <div className={`text-7xl sm:text-8xl font-black text-yellow-500 transition-all duration-300 ${isComplete ? 'scale-110' : 'scale-100'}`}>
            R$ {count}
          </div>
        </div>

        <p className="text-lg text-slate-300 mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
          de desconto exclusivo para o{' '}
          <span className="text-yellow-500 font-bold">
            Protocolo 900+
          </span>
        </p>

        <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_1.2s_forwards]">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
          <p className="text-slate-600 text-sm">Redirecionando para a oferta...</p>
        </div>
      </div>
    </div>
  );
}
