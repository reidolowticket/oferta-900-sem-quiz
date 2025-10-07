import { useState } from 'react';
import PreQuiz from './components/PreQuiz';
import Quiz from './components/Quiz';
import Rewards from './components/Rewards';
import Sales from './components/Sales';
import { FunnelStep } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('pre-quiz');
  const [totalReward, setTotalReward] = useState(0);

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (reward: number) => {
    setTotalReward(reward);
    setCurrentStep('rewards');
  };

  const handleRewardsComplete = () => {
    setCurrentStep('sales');
  };

  return (
    <>
      {currentStep === 'pre-quiz' && <PreQuiz onStart={handleStartQuiz} />}
      {currentStep === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {currentStep === 'rewards' && <Rewards totalReward={totalReward} onComplete={handleRewardsComplete} />}
      {currentStep === 'sales' && <Sales discount={totalReward} />}
    </>
  );
}

export default App;
