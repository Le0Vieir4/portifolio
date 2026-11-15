import type { Portfolio } from "@/types/portfolio";

// Rendered content follows docs/portifolio-content.md. Update that source first.
// TODO: Add real project screenshots and verified demo URLs when available.
// The personal phone number is intentionally omitted pending publishing consent.
export const portfolio: Portfolio = {
  name: "Leonardo Vieira Moreira",
  preferredName: "Leo",
  professionalTitle: "Software Engineer",
  focus: "Full-Stack Web Development",
  hero: {
    headline: "Olá, sou Leo.",
    introduction:
      "Engenheiro de Software apaixonado por transformar ideias em experiências digitais bem construídas. Da interface à API, gosto de entender o problema antes de escrever a primeira linha de código.",
  },
  about: [
    "Sou Leo, Engenheiro de Software apaixonado por transformar ideias em experiências digitais bem construídas.",
    "Minha atuação envolve todo o ciclo de desenvolvimento web, desde interfaces com React e Next.js até serviços e APIs com Python (FastAPI) e Node.js (NestJS).",
    "Gosto de explorar a arquitetura por trás das aplicações, conectar diferentes tecnologias e desenvolver sistemas que sejam não apenas funcionais, mas também escaláveis, organizados e preparados para evoluir.",
    "Minha abordagem é guiada pela simplicidade, pela atenção aos detalhes e pela convicção de que boas soluções surgem quando entendemos profundamente o problema antes de escrever a primeira linha de código.",
  ],
  projects: [
    {
      title: "Weather.io",
      subtitle: "Plataforma de inteligência meteorológica em tempo real",
      category: "Desenvolvimento full-stack · Microsserviços · Arquitetura orientada a eventos",
      summary:
        "Uma plataforma full-stack de monitoramento meteorológico baseada em arquitetura de microsserviços, que reúne coleta de dados do tempo, processamento assíncrono de mensagens e análises interativas.",
      details:
        "O projeto reúne um painel em React, uma API em NestJS, um produtor de dados em Python e um consumidor em Go, com RabbitMQ para comunicação assíncrona. O MongoDB armazena os dados, enquanto a infraestrutura baseada em Docker organiza os serviços.",
      highlights: [
        "Fluxos de autenticação com JWT e OAuth 2.0",
        "Exportação em CSV/Excel e registro de auditoria, conforme a documentação do projeto",
        "Ambiente de desenvolvimento conteinerizado",
      ],
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Recharts", "NestJS", "Python", "Go", "RabbitMQ", "MongoDB", "Docker", "Nginx", "pnpm"],
      visual: {
        kind: "architecture",
        label: "Weather.io / Mapa do sistema",
        caption: "Diagrama baseado na arquitetura documentada no repositório; não é uma captura da interface.",
        groups: [
          { label: "APLICAÇÃO", items: ["Painel React", "API NestJS", "MongoDB"] },
          { label: "PROCESSAMENTO", items: ["Produtor Python", "RabbitMQ", "Consumidor Go"] },
        ],
      },
      repository: { label: "Ver repositório", href: "https://github.com/Le0Vieir4/weather-io" },
    },
    {
      title: "Rocket Notes",
      subtitle: "API REST para gerenciamento de notas",
      category: "Engenharia de backend · Desenvolvimento de APIs · Autenticação",
      summary:
        "Uma aplicação de backend para gerenciar notas pessoais, criada para demonstrar o desenvolvimento de APIs REST, fluxos de usuários autenticados e gerenciamento de dados relacionais.",
      details:
        "Desenvolvido com Node.js e Express, o projeto inclui autenticação com JWT, gerenciamento de notas, etiquetas, filtros e envio de avatares de usuário. SQLite e Knex dão suporte à persistência e às consultas ao banco de dados.",
      highlights: ["Gerenciamento de notas por API REST", "Autenticação com JWT e fluxos de usuários", "Etiquetas, filtros e envio de avatares"],
      stack: ["Node.js", "Express", "JavaScript", "SQLite", "Knex", "JWT"],
      visual: {
        kind: "endpoints",
        label: "Rocket Notes / Trecho da API",
        caption: "Rotas documentadas no repositório. Esta visualização não representa um frontend do projeto.",
        endpoints: [
          { method: "POST", path: "/sessions" },
          { method: "GET", path: "/notes" },
          { method: "POST", path: "/notes" },
          { method: "DELETE", path: "/notes/:id" },
        ],
      },
      repository: { label: "Ver repositório", href: "https://github.com/Le0Vieir4/rocket_note_back-end" },
    },
    {
      title: "3D Model",
      subtitle: "Experimento web interativo em 3D",
      category: "Frontend criativo · Gráficos para web · Experiências interativas",
      summary:
        "Um experimento frontend que explora tecnologias de renderização 3D em uma aplicação React. O repositório serve de base para apresentar o interesse por experiências web interativas e pelo desenvolvimento de interfaces criativas.",
      details:
        "O projeto utiliza React e Vite, com dependências ligadas a 3D e animação, incluindo Three.js, React Three Fiber, Drei e GSAP. A cena, as interações e os resultados visuais específicos ainda precisam ser confirmados na aplicação em execução.",
      highlights: ["Estrutura de frontend baseada em React", "Ferramentas Three.js e React Three Fiber", "Dependências de Drei e GSAP"],
      stack: ["React", "Vite", "JavaScript", "Three.js", "React Three Fiber", "Drei", "GSAP"],
      visual: {
        kind: "tooling",
        label: "3D Model / Ferramentas",
        caption: "Tecnologias registradas no repositório; não é uma imagem da cena em execução.",
        groups: [
          { label: "RENDERIZAÇÃO", items: ["React", "React Three Fiber", "Three.js"] },
          { label: "UTILITÁRIOS E ANIMAÇÃO", items: ["Drei", "GSAP"] },
        ],
      },
      repository: { label: "Ver repositório", href: "https://github.com/Le0Vieir4/3d_model_vite" },
    },
    {
      title: "Azure ML",
      subtitle: "Experimento em Python com busca de dados e integração de IA",
      category: "Desenvolvimento em Python · Processamento de dados · Integração de IA",
      summary:
        "Um projeto em Python que explora indexação de dados, busca e fluxos relacionados a IA. O repositório contém scripts voltados à indexação e busca de dados de produtos, a interações conversacionais com esses dados e à avaliação.",
      details:
        "Uma exploração de scripts em Python e fluxos voltados à integração. A configuração dos serviços, o comportamento dos modelos e a prontidão para produção devem ser verificados antes de fazer afirmações mais específicas.",
      highlights: ["Indexação e busca de dados de produtos", "Fluxos de conversa com dados de produtos", "Scripts relacionados à avaliação"],
      stack: ["Python", "Indexação de dados", "Fluxos de busca", "Integração de IA"],
      visual: {
        kind: "workflow",
        label: "Azure ML / Scripts do repositório",
        caption: "Seleção de scripts presentes no repositório; não é uma captura de execução ou resultado.",
        steps: ["create_search_index.py", "get_product_documents.py", "chat_with_products.py", "evaluate.py"],
      },
      repository: { label: "Ver repositório", href: "https://github.com/Le0Vieir4/azure_ML" },
    },
  ],
  expertise: [
    {
      title: "Full-Stack Development",
      description:
        "Desenvolvimento de aplicações web modernas e escaláveis com React, Next.js, TypeScript, Python e Node.js, conectando interfaces intuitivas a sistemas de backend confiáveis.",
    },
    {
      title: "Backend Engineering & APIs",
      description:
        "Projeto de serviços de backend estruturados, APIs RESTful, fluxos de autenticação seguros e integrações fluidas entre aplicações.",
    },
    {
      title: "Asynchronous Systems & Data",
      description:
        "Atuação com processamento de tarefas em segundo plano, sistemas de mensageria, cache e bancos de dados com Celery, Redis e MongoDB.",
    },
    {
      title: "Software Architecture & DevOps",
      description:
        "Desenvolvimento de aplicações de ponta a ponta fáceis de manter, com padrões arquiteturais claros, ambientes em contêineres e fluxos de desenvolvimento eficientes.",
    },
  ],
  skillGroups: [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", skills: ["Python", "FastAPI", "Node.js", "NestJS"] },
    { category: "Data & Infrastructure", skills: ["MongoDB", "Redis", "Celery", "Docker"] },
    { category: "Security & Integration", skills: ["REST APIs", "OAuth 2.0", "JWT"] },
  ],
  experience: [],
  contact: {
    email: "leovieir4.dev@gmail.com",
    socialLinks: [{ label: "GitHub", href: "https://github.com/Le0Vieir4" }],
  },
  resumePath: null,
  siteUrl: null,
};
