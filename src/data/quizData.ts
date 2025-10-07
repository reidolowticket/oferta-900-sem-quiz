import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a nota máxima que um candidato pode tirar na redação do ENEM?',
    options: ['800', '900', '1000'],
    correctAnswer: 2,
    feedback: 'Isso mesmo! 1000 é a nota máxima. Mas menos de 1% consegue — a maioria trava nos 600–700 porque não entende os blocos ocultos da banca.'
  },
  {
    id: 2,
    question: 'Quantos eixos oficiais o ENEM usa para corrigir uma redação?',
    options: ['3', '5', '7'],
    correctAnswer: 1,
    feedback: 'Correto! São 5. Mas dentro deles existem subpadrões invisíveis que explicam porque uns ficam em 700 e outros passam de 900.'
  },
  {
    id: 3,
    question: 'O que pesa mais na hora do corretor avaliar sua redação?',
    options: ['Escrever bonito', 'Decorar citações', 'Seguir a estrutura que ele espera'],
    correctAnswer: 2,
    feedback: 'Exatamente. O corretor não avalia sua opinião, mas sim se você segue o checklist oculto de estrutura.'
  },
  {
    id: 4,
    question: 'Quantos alunos conseguem acima de 900 por ano, em média?',
    options: ['Menos de 2%', '15%', '30%'],
    correctAnswer: 0,
    feedback: 'Perfeito. É uma elite, não porque são gênios, mas porque aplicam os blocos invisíveis.'
  },
  {
    id: 5,
    question: 'Qual o erro mais comum dos candidatos?',
    options: ['Fugir do tema', 'Não citar filósofos', 'Escrever sem estrutura'],
    correctAnswer: 2,
    feedback: 'Isso mesmo. Fugir do tema acontece, mas o que derruba mesmo é a falta da estrutura que a banca exige.'
  },
  {
    id: 6,
    question: 'O que realmente garante uma nota acima de 900?',
    options: ['Sorte no tema', 'Vocabulário avançado', 'Aplicar a Estrutura Oculta das Bancas'],
    correctAnswer: 2,
    feedback: 'Exato. Não é sorte nem vocabulário rebuscado. É dominar os 5 blocos invisíveis.'
  }
];
