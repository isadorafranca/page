import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen, Code2, User, Home as HomeIcon, MessageCircle } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'biografia', 'publicacoes', 'boteco', 'contatos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'biografia', label: 'Biografia', icon: User },
    { id: 'publicacoes', label: 'Publicações', icon: BookOpen },
    { id: 'boteco', label: 'Boteco do Código', icon: Code2 },
    { id: 'contatos', label: 'Contatos', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-800">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-gray-800 bg-gray-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'text-gray-800 bg-gray-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Olá, seja <span className="text-gray-700">bem-vindo</span>
            </h1>
            <p className="text-xl text-gray-600">
              Doutoranda em Biotecnologia. Especialista em Desenvolvimento e Gestão Estratégica em IoT e Big Data. Mestre em Biociências. Atuo em bioinformática, IA, Estatística Evolutiva e Educação. Desenvolvo trabalhos de Design de Aprendizagem voltado para o Ensino Superior.

            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection('contatos')}
                className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => scrollToSection('publicacoes')}
                className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-100 transition-all"
              >
                Ver Trabalhos
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gray-400 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1764410481612-7544525b2991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njk2NTE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Biografia Section */}
      <section id="biografia" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Sobre <span className="text-gray-700">Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1555988482-7f61e883c2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjkwMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Minha Jornada</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sou um profissional dedicado ao desenvolvimento de soluções tecnológicas inovadoras, 
                  com foco em criar experiências digitais que fazem a diferença.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Minha paixão por tecnologia começou cedo e se transformou em uma carreira 
                  voltada para a pesquisa, desenvolvimento e compartilhamento de conhecimento 
                  com a comunidade.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Acredito no poder da educação e da colaboração para construir um futuro 
                  tecnológico mais inclusivo e acessível para todos.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 shadow-lg text-center">
                  <div className="text-3xl font-bold text-gray-800">5+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 shadow-lg text-center">
                  <div className="text-3xl font-bold text-gray-800">20+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 shadow-lg text-center">
                  <div className="text-3xl font-bold text-gray-800">10+</div>
                  <div className="text-sm text-gray-600">Publicações</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publicações Section */}
      <section id="publicacoes" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Minhas <span className="text-gray-700">Publicações</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'INTELIGÊNCIA ARTIFICIAL E CONSTRUÇÃO DE UNIVERSIDADES INTELIGENTES',
                category: 'Pesquisa',
                date: '2025',
                description: 'Este  estudo  investiga  a  integração  da inteligência  artificial  (IA)  no  ensino  à  distância  (EaD)  no  contexto  de  universidades  inteligentes.',
                link: 'https://ppg.revistas.uema.br/index.php/PESQUISA_EM_FOCO/article/view/4406/2979',
              },
              {title: 'ECOSSISTEMA DE APRENDIZAGEM HÍBRIDO PARA O ENSINO SUPERIOR: MODELAGEM TEÓRICO-PRÁTICA E APLICAÇÃO',
                category: 'Pesquisa',
                date: '2025',
                description: 'O estudo teve como objetivo desenvolver e analisar essa proposta, articulando fundamentos teóricos, práticas pedagógicas e tecnologias digitais da informação e comunicação de forma integrada.',
                link: 'https://journalppc.com/RPPC/article/view/2858',
              },
              {
                title: 'Mutations in the melanocortin-1 receptor (MC1R)',
                category: 'Genética',
                date: '2018',
                description: 'The MC1R sequences of the two species was analyzed, and the observed nucleotide variation was compared. Six polymorphic sites were identified, representing seven distinct genotypes. ',
                link: 'https://pubmed.ncbi.nlm.nih.gov/30304221/'
              },
              
            ].map((pub, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-gray-400 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    {pub.category}
                  </span>
                  <span className="text-gray-600 text-sm">{pub.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.description}</p>
                {pub.link ? (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <span>Ver publicação</span>
                    <BookOpen size={16} />
                  </a>
                ) : (
                  <button className="text-gray-800 hover:text-gray-600 transition-colors flex items-center space-x-2">
                    <span>Ler mais</span>
                    <BookOpen size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boteco do Código Section */}
      <section id="boteco" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Boteco do <span className="text-gray-700">Código</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                  <Code2 className="text-gray-800" />
                  <span>Um espaço informal para amantes de código</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O Boteco do Código é um projeto onde compartilho dicas, tutoriais e 
                  experiências do dia a dia de desenvolvimento e análise de dados de forma descontraída.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aqui você encontra desde conceitos fundamentais até discussões sobre 
                  as tecnologias mais recentes, sempre com uma linguagem acessível e prática.
                  Nós vamos abordar muito sobre LLMs, Machine Learning e IA aplicados para dados Biológicos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1763568258311-8da2b4233921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb2ZmZWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk3MDgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '10 Dicas para Clean Code',
                topic: 'Boas Práticas',
                views: '2.5k',
              },
              {
                title: 'Debugando como um Pro',
                topic: 'Desenvolvimento',
                views: '1.8k',
              },
              {
                title: 'Git: Além do Básico',
                topic: 'Versionamento',
                views: '3.2k',
              },
              {
                title: 'Performance em React',
                topic: 'Frontend',
                views: '2.1k',
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-gray-200 shadow-lg hover:border-gray-400 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{post.title}</h4>
                  <span className="text-gray-600 text-sm">{post.views} views</span>
                </div>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  {post.topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatos Section */}
      <section id="contatos" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Entre em <span className="text-gray-700">Contato</span>
          </h2>
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <p className="text-center text-gray-600 mb-12 text-lg">
              Vamos conversar sobre projetos, colaborações ou apenas trocar ideias sobre tecnologia!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:contato@exemplo.com"
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-gray-400 transition-all transform hover:-translate-y-2 flex flex-col items-center space-y-4 group"
              >
                <div className="bg-gray-200 p-4 rounded-full group-hover:bg-gray-300 transition-colors">
                  <Mail className="text-gray-800" size={32} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm">contato@exemplo.com</p>
                </div>
              </a>

              <a
                href="https://github.com/isadorafranca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-gray-400 transition-all transform hover:-translate-y-2 flex flex-col items-center space-y-4 group"
              >
                <div className="bg-gray-200 p-4 rounded-full group-hover:bg-gray-300 transition-colors">
                  <Github className="text-gray-800" size={32} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">GitHub</h3>
                  <p className="text-gray-600 text-sm">@isadorafranca</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/isadorafranca/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-gray-400 transition-all transform hover:-translate-y-2 flex flex-col items-center space-y-4 group"
              >
                <div className="bg-gray-200 p-4 rounded-full group-hover:bg-gray-300 transition-colors">
                  <Linkedin className="text-gray-800" size={32} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 text-sm">/in/IsadoraFranca</p>
                </div>
              </a>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="itfrancaresearch@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Assunto</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="Sobre o que gostaria de falar?"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 font-bold text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2026 Portfolio. Desenvolvido com ❤️ e tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
}