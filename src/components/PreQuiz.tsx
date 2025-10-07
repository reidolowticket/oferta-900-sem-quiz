import { Zap, Award, TrendingUp } from 'lucide-react';

interface PreQuizProps {
  onStart: () => void;
}

export default function PreQuiz({ onStart }: PreQuizProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="relative max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Quiz Interativo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Descubra se você sabe os segredos que os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              corretores usam
            </span>{' '}
            para dar nota máxima no ENEM!
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Responda 6 perguntas rápidas, desbloqueie até{' '}
            <span className="text-cyan-400 font-bold">R$120 de desconto exclusivo</span>{' '}
            e veja se está pronto para romper a barreira dos 900 pontos.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Estrutura Oculta</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A maioria dos candidatos nunca percebe que existe uma estrutura oculta que guia o olhar do corretor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Teste seu Conhecimento</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Neste quiz gamificado, você vai testar seus conhecimentos sobre os bastidores da correção do ENEM, descobrir onde está errando — e ainda acumular até R$120 de desconto.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-slate-400 mb-6">
            É rápido, divertido e pode ser o primeiro passo para transformar sua redação.
          </p>

          <button
            onClick={onStart}
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            <span className="text-lg">Começar o Quiz e Ganhar Descontos</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>6 perguntas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>2 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Até R$120 OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
