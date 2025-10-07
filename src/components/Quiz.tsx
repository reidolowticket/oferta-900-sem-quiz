import { useState } from 'react';
import { Check, X, Coins } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

interface QuizProps {
  onComplete: (totalReward: number) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [totalReward, setTotalReward] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    const correct = answerIndex === question.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const newTotal = totalReward + 20;
      setTotalReward(newTotal);
    }

    setShowFeedbackModal(true);
  };

  const handleContinue = () => {
    setShowFeedbackModal(false);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onComplete(totalReward);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
                <span className="text-cyan-400 font-bold text-sm">
                  Pergunta {currentQuestion + 1}/{quizQuestions.length}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-bold">R$ {totalReward}</span>
            </div>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 leading-tight">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showCorrect = showFeedback && isCorrect;
              const showIncorrect = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full text-left p-4 rounded-xl border-2 transition-all duration-300
                    ${!showFeedback && !isSelected ? 'border-slate-700 hover:border-cyan-500 hover:bg-slate-800/50' : ''}
                    ${!showFeedback && isSelected ? 'border-cyan-500 bg-cyan-500/10' : ''}
                    ${showCorrect ? 'border-emerald-500 bg-emerald-500/10' : ''}
                    ${showIncorrect ? 'border-red-500 bg-red-500/10' : ''}
                    ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg">{option}</span>
                    {showCorrect && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {showIncorrect && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showFeedbackModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50 backdrop-blur-sm">
            <div className="animate-scale-in max-w-lg w-full">
              <div className={`rounded-2xl p-8 shadow-2xl border-2 ${
                isCorrect
                  ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-emerald-500/50'
                  : 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/50'
              }`}>
                <div className="text-center mb-6">
                  {isCorrect ? (
                    <>
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-4 animate-bounce-in">
                        <Check className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Coins className="w-8 h-8 text-emerald-400" />
                        <div className="text-4xl font-bold text-emerald-400">+R$ 20</div>
                      </div>
                      <div className="text-emerald-400 font-bold text-xl">Resposta Correta!</div>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-4 animate-bounce-in">
                        <X className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-red-400 font-bold text-xl mb-2">Ops! Resposta Incorreta</div>
                    </>
                  )}
                </div>

                <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 mb-6">
                  <p className="text-slate-200 leading-relaxed text-center">{question.feedback}</p>
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Meu Desconto'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
