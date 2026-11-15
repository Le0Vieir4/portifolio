import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { ContactFormDialog } from "@/components/sections/contact-form-dialog";
import { ProjectFeature } from "@/components/sections/project-feature";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#contato", label: "Contato" },
] as const;

export default function Home() {
  const name = portfolio.name;
  const hasContact = Boolean(portfolio.contact.email || portfolio.contact.socialLinks.length);

  return (
    <>
      <Link className="skip-link" href="#conteudo">Pular para o conteúdo</Link>

      <header className="site-header">
        <div className="site-header-inner shell">
          <Link className="brand" href="#inicio" aria-label="Voltar ao início">
            <span className="brand-name">{portfolio.preferredName}</span>
            <span className="brand-detail">/ PORTFÓLIO</span>
          </Link>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>

          <Button asChild variant="outline" size="compact" className="header-contact">
            <Link href="#contato">Contato <ArrowUpRight aria-hidden="true" /></Link>
          </Button>

          <details className="mobile-nav">
            <summary><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>Menu</span></summary>
            <nav aria-label="Navegação móvel">
              {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/zen-architecture.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-inner shell">
            <div className="hero-copy">
              <h1 id="hero-title">{portfolio.hero.headline}</h1>
              <p className="hero-byline">{name} · {portfolio.professionalTitle} · {portfolio.focus}</p>
              <p className="hero-introduction">{portfolio.hero.introduction}</p>
              <div className="hero-actions">
                <Button asChild><Link href="#projetos">Explorar projetos <ArrowDownRight aria-hidden="true" /></Link></Button>
                <Link className="text-action" href="#contato">Ir para contato <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="hero-bottom" aria-hidden="true"><span>SOFTWARE ENGINEERING / FULL-STACK WEB</span><span className="hero-bottom-line" /><span>ROLE PARA EXPLORAR</span></div>
          </div>
        </section>

        <section className="section work-section" id="projetos" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading">
              <h2 id="work-title">Projetos selecionados<span className="heading-period">.</span></h2>
              <p>Do sistema distribuído à experimentação visual: uma seleção de projetos e estudos com contextos diferentes.</p>
            </div>
            {portfolio.projects.length ? (
              <div className="project-list">
                {portfolio.projects.map((project, index) => <ProjectFeature key={project.title} project={project} index={index} total={portfolio.projects.length} />)}
              </div>
            ) : (
              <div className="work-empty">
                <div className="work-empty-top"><span>ACERVO EM PREPARAÇÃO</span><span>—</span></div>
                <div className="work-empty-body">
                  <p className="work-empty-title">O trabalho entra aqui.</p>
                  <p>Projetos reais serão apresentados com contexto, imagens próprias e links verificados assim que estiverem disponíveis.</p>
                </div>
                <div className="work-empty-bottom">Sem estudos fictícios. Sem resultados inventados.</div>
              </div>
            )}
          </div>
        </section>

        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="shell split-section">
            <h2 id="about-title">Sobre<span className="heading-period">.</span></h2>
            <div className="section-content about-content">
              {portfolio.about.length ? portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : (
                <p>Uma apresentação sobre trajetória, interesses e forma de trabalhar será adicionada aqui após a confirmação dessas informações.</p>
              )}
              {portfolio.resumePath && <a className="inline-link" href={portfolio.resumePath} download>Baixar currículo <ArrowUpRight aria-hidden="true" /></a>}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="especialidades" aria-labelledby="skills-title">
          <div className="shell split-section">
            <h2 id="skills-title">Especialidades<span className="heading-period">.</span></h2>
            <div className="section-content">
              <div className="expertise-list">
                {portfolio.expertise.map((area) => (
                  <article className="expertise-item" key={area.title}>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
              <div className="skills-catalog">
                <h3>Tecnologias</h3>
                {portfolio.skillGroups.map((group) => (
                  <div className="skill-group" key={group.category}>
                    <h4>{group.category}</h4>
                    <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {portfolio.experience.length > 0 && (
          <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
            <div className="shell split-section">
              <h2 id="experience-title">Experiência<span className="heading-period">.</span></h2>
              <ol className="section-content experience-list">
                {portfolio.experience.map((item) => (
                  <li key={`${item.organization}-${item.period}`}>
                    <span>{item.period}</span>
                    <div><h3>{item.role} · {item.organization}</h3><p>{item.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="section contact-section" id="contato" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <div>
              <h2 id="contact-title">{hasContact ? "Vamos conversar." : "Um ponto de encontro."}</h2>
              <p>{hasContact ? "Gostou de algum projeto ou quer conversar sobre desenvolvimento web? Envie um e-mail ou explore o código no GitHub." : "Um endereço de contato verificado será publicado aqui em breve."}</p>
            </div>
            <div className="contact-actions">
              {portfolio.contact.email && <ContactFormDialog fallbackEmail={portfolio.contact.email} />}
              {portfolio.contact.socialLinks.map((link) => <a className="inline-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight aria-hidden="true" /></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>{name} <span>· {portfolio.professionalTitle}</span></p>
          <nav aria-label="Navegação do rodapé"><Link href="#projetos">Projetos</Link><Link href="#sobre">Sobre</Link><Link href="#contato">Contato</Link></nav>
          <Link className="back-to-top" href="#inicio">Voltar ao início <ArrowUp aria-hidden="true" /></Link>
        </div>
      </footer>
    </>
  );
}
