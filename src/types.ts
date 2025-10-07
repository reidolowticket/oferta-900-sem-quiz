export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

export type FunnelStep = 'pre-quiz' | 'quiz' | 'rewards' | 'sales';
