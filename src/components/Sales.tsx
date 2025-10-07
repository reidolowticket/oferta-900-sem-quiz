import { useState, useEffect } from 'react';
import { Check, Shield, Zap, Award, TrendingUp, Users, Star, Clock, ShoppingCart, ChevronDown } from 'lucide-react';

interface SalesProps {
  discount: number;
}

export default function Sales({ discount }: SalesProps) {
  const basicFinalPrice = 10;
  const completeFinalPrice = 24.90;
  const basicAnchorPrice = basicFinalPrice + discount;
  const completeAnchorPrice = completeFinalPrice + discount;

  const [timeLeft, setTimeLeft] = useState(600);
  const [notifications, setNotifications] = useState<Array<{ id: number; name: string; plan: string }>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const names = [
      'João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Lucas Ferreira',
      'Juliana Lima', 'Rafael Souza', 'Camila Rocha', 'Bruno Alves', 'Fernanda Martins',
      'Gabriel Pereira', 'Larissa Carvalho', 'Mateus Ribeiro', 'Beatriz Correia', 'Thiago Mendes'
    ];
    const plans = ['Plano Completo', 'Plano Básico', 'Plano Completo'];

    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomPlan = plans[Math.floor(Math.random() * plans.length)];
      const id = Date.now();

      setNotifications((prev) => [...prev, { id, name: randomName, plan: randomPlan }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 5000);
    };

    const interval = setInterval(showNotification, 15000);
    showNotification();

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-yellow-500 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              <div className="text-center sm:text-left">
                <div className="text-black font-bold text-xs uppercase tracking-wide">Oferta Expira em:</div>
                <div className="text-2xl sm:text-3xl font-black text-black tabular-nums">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-12 sm:pt-32 sm:pb-16">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="fixed bottom-4 left-4 z-50 animate-slide-up"
          >
            <div className="bg-zinc-900 border border-yellow-500 rounded-lg px-4 py-3 shadow-2xl max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{notification.name}</p>
                  <p className="text-slate-400 text-xs">acabou de adquirir o {notification.plan}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-yellow-500 font-bold">Desconto de R$ {discount} Desbloqueado</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Você já viu: 94% travam nos 600–700.
            <br />
            Agora é a sua vez de entrar nos 2% que conquistam 900+
            <br />
            <span className="text-yellow-500">
              com a Estrutura Oculta das Bancas.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            Não é sobre escrever mais bonito ou decorar citações.
            <br />
            É sobre obedecer à estrutura invisível que a banca usa para dar nota máxima —
            <br />
            e que já está nas suas mãos a partir de hoje.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Você acabou de provar para si mesmo no quiz que existe um padrão secreto por trás da correção do ENEM.
            Agora chegou o momento decisivo: aplicar a Estrutura Oculta das Bancas de forma prática, passo a passo, e transformar sua redação em uma resposta inevitavelmente nota 900+.
            <br /><br />
            O Protocolo 900+ foi criado exatamente para isso.
            Em poucas horas de estudo, você terá um mapa claro do que o corretor quer ver — e vai entregar essa estrutura em qualquer tema, sem depender de inspiração ou "sorte no dia da prova"
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">A Diferença Que o Corretor Enxerga em Segundos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="text-slate-400 font-bold text-lg mb-3">Sem Estrutura Oculta</div>
              <div className="text-5xl font-bold text-slate-500 mb-2">720</div>
              <div className="text-slate-600 text-sm">pontos na média</div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-6">
              <div className="text-yellow-500 font-bold text-lg mb-3">Com Estrutura Oculta</div>
              <div className="text-5xl font-bold text-yellow-500 mb-2">920</div>
              <div className="text-slate-400 text-sm">elite dos aprovados</div>
            </div>
          </div>

          <p className="text-center text-slate-300 mt-6 leading-relaxed">
            Veja a diferença real:
            <br /><br />
            Redação sem Estrutura Oculta: 720 pontos.
            <br />
            Redação com Estrutura Oculta: 920 pontos.
            <br /><br />
            👉 O conteúdo pode até ser parecido, mas o resultado não tem comparação.
            <br />
            Não é sobre escrever bonito. É sobre escrever do jeito que a banca espera corrigir.
          </p>
        </div>

        <div className="bg-zinc-900 border border-yellow-500/30 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">O Que Realmente Faz a Banca Dar Nota Máxima</h3>
              <p className="text-slate-300 leading-relaxed">
                O Protocolo 900+ revela a <strong className="text-yellow-500">Estrutura Oculta das Bancas</strong>: os 5 blocos invisíveis que identificamos ao analisar 1.427 redações corrigidas entre 2017 e 2024.
              </p>
              <p className="text-slate-300 mt-3 leading-relaxed">
                São padrões replicados ano após ano que explicam por que a maioria trava em 700 enquanto uma pequena elite rompe os 900.
              </p>
              <p className="text-slate-300 mt-3 leading-relaxed">
                👉 Quando você segue essa estrutura, a nota sobe automaticamente.
                <br />
                👉 Quando ignora, fica preso na média, mesmo com um texto bonito.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            O que você vai dominar com o Protocolo 900+
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Aprender modelos prontos que se adaptam a qualquer tema',
              'Garantir parágrafos sólidos, sem travar',
              'Evitar os erros mais comuns que fazem a banca cortar pontos',
              'Usar repertórios que impressionam em qualquer tema',
              'Ganhar confiança para treinar e simular sem medo',
              'Aplicar a Estrutura Oculta em qualquer tema de forma automática, sem depender de inspiração'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Sem a Estrutura Oculta vs. Com a Estrutura Oculta
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-400">👉 Sem a Estrutura Oculta, você vai:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <span className="text-slate-600 mt-1">❌</span>
                <span>Ficar preso na faixa 600–700</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <span className="text-slate-600 mt-1">❌</span>
                <span>Perder pontos mesmo escrevendo bem</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <span className="text-slate-600 mt-1">❌</span>
                <span>Travar quando aparecer um tema inesperado</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">👉 Com a Estrutura Oculta, você vai:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-yellow-500 mt-1">✅</span>
                <span>Entregar exatamente o que a banca espera</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-yellow-500 mt-1">✅</span>
                <span>Romper a barreira dos 900</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-yellow-500 mt-1">✅</span>
                <span>Se juntar à elite de menos de 2% dos candidatos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Escolha seu acesso ao Protocolo 900+</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                {discount > 0 ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-600 line-through text-lg">R$ {basicAnchorPrice.toFixed(2)}</span>
                      <span className="text-4xl font-bold text-yellow-500">R$ {basicFinalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-yellow-500 mt-1">Você economiza R$ {discount.toFixed(2)}</p>
                  </>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-yellow-500">R$ {basicFinalPrice.toFixed(2)}</span>
                  </div>
                )}
                <p className="text-sm text-slate-500 mt-2">Pagamento único</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Guia Definitivo: A Estrutura Secreta para a Nota Máxima</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">10 Modelos Prontos de Redação Nota 900+</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Desvendando as Estruturas Secretas das Bancas</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">20+ Repertórios Coringas</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Modelo Nota 900+ (Comentado)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Modelo Nota 1000 (Comentado)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span>Garantia de 30 dias</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>Acesso de 1 ano</span>
                </li>
              </ul>

              <a href="https://pay.kirvano.com/59605c69-df1e-4926-b7e5-5b374e39f477" target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-all duration-300">
                  Quero o Plano Básico por R$ {basicFinalPrice.toFixed(2)}
                </button>
              </a>
            </div>

            <div className="relative bg-zinc-900 border-2 border-yellow-500 rounded-2xl p-6 sm:p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  MAIS ESCOLHIDO
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Plano Completo</h3>
                {discount > 0 ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-600 line-through text-lg">R$ {completeAnchorPrice.toFixed(2)}</span>
                      <span className="text-4xl font-bold text-yellow-500">
                        R$ {completeFinalPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-yellow-500 mt-1">Você economiza R$ {discount.toFixed(2)}</p>
                  </>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-yellow-500">
                      R$ {completeFinalPrice.toFixed(2)}
                    </span>
                  </div>
                )}
                <p className="text-sm text-slate-500 mt-2">Pagamento único</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Guia Definitivo: A Estrutura Secreta para a Nota Máxima</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="font-bold text-yellow-500">50 Modelos Prontos de Redação Nota 900+</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">Desvendando as Estruturas Secretas das Bancas</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">20+ Repertórios Coringas e Modelos de Conexão Rápida</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">01 Modelo de Redação Nota 900+ (Comentado)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-300">01 Modelo de Redação Nota 1000 (Comentado)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span>Garantia de 30 dias</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-yellow-500 font-bold">
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  <span>Acesso VITALÍCIO + Atualizações</span>
                </li>
              </ul>

              <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-4 mb-6">
                <p className="text-sm text-center text-slate-300">
                  <Users className="w-4 h-4 inline mr-1" />
                  Mais de <strong className="text-yellow-500">80%</strong> dos alunos escolhem o Plano Completo
                </p>
              </div>

              <a href="https://pay.kirvano.com/d63c3c4e-6a49-4889-af82-19df0b8c2171" target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-all duration-300">
                  Quero o Plano Completo por R$ {completeFinalPrice.toFixed(2)}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">O Que Nossos Alunos Estão Dizendo</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829612-710x1536.jpg.webp',
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829590.jpg.webp',
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829596-710x1536.jpg.webp',
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829602.jpg.webp',
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829623-710x1536.jpg.webp',
              'https://imperiodosconcursos.site/wp-content/webp-express/webp-images/uploads/2025/08/4949735666321829609.jpg.webp'
            ].map((image, index) => (
              <div key={index} className="bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition-all">
                <img
                  src={image}
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                question: 'Como receberei o acesso?',
                answer: 'Imediatamente após a confirmação do pagamento, você receberá no seu e-mail um login e senha para acessar a área de membros.'
              },
              {
                question: 'Preciso de material extra?',
                answer: 'Não. O PROTOCOLO 900+ é um método completo. Você terá os modelos prontos e as estruturas secretas que precisa para ir direto à prática e atingir notas altas.'
              },
              {
                question: 'Serve para qual banca?',
                answer: 'Os modelos são divididos por bancas (ENEM, vestibulares, concursos) e se adaptam a qualquer tema. O foco está na estrutura que os corretores buscam.'
              },
              {
                question: 'O acesso é vitalício?',
                answer: 'O acesso é vitalício com atualizações para compradores do Plano Completo. Para o Plano Básico, o acesso é de 1 ano e não inclui futuras atualizações de conteúdo.'
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-zinc-900 transition-colors">
                  <h3 className="text-lg font-bold text-slate-200 pr-4">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Quem criou o Protocolo 900+?</h3>
              <p className="text-slate-300 leading-relaxed mb-3">
                Somos especialistas em concursos e redações, com mais de 10 turmas e milhares de alunos treinados.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Mapeamos padrões ocultos que os cursinhos ignoram — e transformamos em um método prático que já ajudou dezenas de alunos a conquistar notas acima de 900.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4">
            <Shield className="w-12 h-12 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">Risco Zero</h3>
              <p className="text-slate-300 leading-relaxed">
                Você tem <strong>30 dias</strong> para aplicar o Protocolo 900+. Se não sentir evolução clara, devolvemos seu dinheiro sem perguntas.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sua Chance de Romper a Barreira dos 900 Chegou</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Agora é sua chance de aplicar a Estrutura Oculta na sua própria redação e destravar a nota que muda sua aprovação.
          </p>

          <a href="https://pay.kirvano.com/d63c3c4e-6a49-4889-af82-19df0b8c2171" target="_blank" rel="noopener noreferrer">
            <button className="group inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-5 rounded-xl transition-all duration-300 text-lg">
              <TrendingUp className="w-6 h-6" />
              Quero destravar minha nota 900 agora
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
