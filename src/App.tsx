import { useEffect, useState } from 'react'

type Language = 'pt-BR' | 'en' | 'es'

const copy = {
  'pt-BR': {
    nav: ['início', 'sobre', 'stack', 'contato'],
    badge: 'SYSTEM.STATUS // ONLINE',
    greeting: 'Olá, eu sou',
    role: 'Engenheiro de Computação & Software Developer.',
    intro: 'Transformo problemas complexos em produtos digitais sólidos, legíveis e prontos para escalar.',
    linkedin: 'Ver LinkedIn', github: 'Explorar GitHub',
    scroll: 'scroll para explorar',
    aboutEyebrow: '01 // sobre mim',
    aboutTitle: 'Código com propósito.\nProdutos que avançam.',
    about: 'Sou um desenvolvedor de software e engenheiro de computação de Anápolis, GO. Gosto de entender o problema antes de escrever a primeira linha de código — e de construir soluções que continuem simples de evoluir depois do deploy.',
    factLocation: 'base', factLocationValue: 'Anápolis, GO · Brasil',
    factCurrent: 'atual', factCurrentValue: 'Software Developer · SuperFrete',
    factEducation: 'formação', factEducationValue: 'Engenharia de Computação',
    stackEyebrow: '02 // toolkit', stackTitle: 'Tecnologia é meio.\nEntrega é o objetivo.',
    stackText: 'Uma base versátil para pensar o produto de ponta a ponta — da interface que as pessoas usam à infraestrutura que mantém tudo de pé.',
    groups: [
      { title: 'interfaces', text: 'Experiências rápidas, claras e sustentáveis.', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
      { title: 'serviços', text: 'APIs bem definidas e regras de negócio robustas.', skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
      { title: 'dados', text: 'Informação acessível, consistente e performática.', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
      { title: 'prática', text: 'Qualidade, automação e ambiente de entrega.', skills: ['Docker', 'Jest', 'Linux', 'Git'] },
    ],
    quote: 'A melhor solução não é a mais complexa. É a que torna o próximo passo mais simples.',
    contactEyebrow: '03 // conexão', contactTitle: 'Vamos construir\nalgo relevante.',
    contactText: 'Quer conhecer melhor minha trajetória, trocar ideias sobre tecnologia ou iniciar uma conversa? Me encontre nas redes.',
    contactLinkedin: 'Conectar no LinkedIn', contactGithub: 'Ver código no GitHub',
    footer: 'Projetado e desenvolvido por Jonathan Ramos.',
  },
  en: {
    nav: ['home', 'about', 'stack', 'contact'],
    badge: 'SYSTEM.STATUS // ONLINE', greeting: 'Hi, I am',
    role: 'Computer Engineer & Software Developer.',
    intro: 'I turn complex problems into solid, readable digital products built to scale.',
    linkedin: 'View LinkedIn', github: 'Explore GitHub', scroll: 'scroll to explore',
    aboutEyebrow: '01 // about', aboutTitle: 'Purposeful code.\nProducts that move forward.',
    about: 'I am a software developer and computer engineer from Anápolis, Brazil. I enjoy understanding the problem before writing the first line of code — and building solutions that remain easy to evolve after deployment.',
    factLocation: 'base', factLocationValue: 'Anápolis, GO · Brazil', factCurrent: 'current', factCurrentValue: 'Software Developer · SuperFrete', factEducation: 'education', factEducationValue: 'Computer Engineering',
    stackEyebrow: '02 // toolkit', stackTitle: 'Technology is a means.\nDelivery is the goal.',
    stackText: 'A versatile foundation to think about products end to end — from the interface people use to the infrastructure that keeps it running.',
    groups: [
      { title: 'interfaces', text: 'Fast, clear and maintainable experiences.', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
      { title: 'services', text: 'Well-defined APIs and resilient business rules.', skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
      { title: 'data', text: 'Accessible, consistent and performant information.', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
      { title: 'practice', text: 'Quality, automation and delivery environments.', skills: ['Docker', 'Jest', 'Linux', 'Git'] },
    ],
    quote: 'The best solution is not the most complex one. It is the one that makes the next step simpler.',
    contactEyebrow: '03 // connect', contactTitle: 'Let’s build\nsomething meaningful.',
    contactText: 'Want to learn more about my journey, exchange ideas about technology, or start a conversation? Find me online.',
    contactLinkedin: 'Connect on LinkedIn', contactGithub: 'See code on GitHub', footer: 'Designed and developed by Jonathan Ramos.',
  },
  es: {
    nav: ['inicio', 'sobre mí', 'stack', 'contacto'], badge: 'SYSTEM.STATUS // ONLINE', greeting: 'Hola, soy',
    role: 'Ingeniero Informático & Software Developer.',
    intro: 'Transformo problemas complejos en productos digitales sólidos, legibles y listos para escalar.',
    linkedin: 'Ver LinkedIn', github: 'Explorar GitHub', scroll: 'desliza para explorar',
    aboutEyebrow: '01 // sobre mí', aboutTitle: 'Código con propósito.\nProductos que avanzan.',
    about: 'Soy desarrollador de software e ingeniero informático de Anápolis, Brasil. Me gusta entender el problema antes de escribir la primera línea de código y crear soluciones que sigan siendo fáciles de evolucionar después del despliegue.',
    factLocation: 'base', factLocationValue: 'Anápolis, GO · Brasil', factCurrent: 'actual', factCurrentValue: 'Software Developer · SuperFrete', factEducation: 'formación', factEducationValue: 'Ingeniería Informática',
    stackEyebrow: '02 // toolkit', stackTitle: 'La tecnología es un medio.\nLa entrega es el objetivo.',
    stackText: 'Una base versátil para pensar el producto de punta a punta, desde la interfaz que usan las personas hasta la infraestructura que lo sostiene.',
    groups: [
      { title: 'interfaces', text: 'Experiencias rápidas, claras y sostenibles.', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
      { title: 'servicios', text: 'APIs bien definidas y reglas de negocio sólidas.', skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
      { title: 'datos', text: 'Información accesible, consistente y de alto rendimiento.', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
      { title: 'práctica', text: 'Calidad, automatización y entorno de entrega.', skills: ['Docker', 'Jest', 'Linux', 'Git'] },
    ],
    quote: 'La mejor solución no es la más compleja. Es la que hace más simple el siguiente paso.',
    contactEyebrow: '03 // conexión', contactTitle: 'Construyamos\nalgo relevante.',
    contactText: '¿Quieres conocer mejor mi trayectoria, intercambiar ideas sobre tecnología o iniciar una conversación? Encuéntrame en las redes.',
    contactLinkedin: 'Conectar en LinkedIn', contactGithub: 'Ver código en GitHub', footer: 'Diseñado y desarrollado por Jonathan Ramos.',
  },
} as const

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/jonathanramosnascimento/',
  github: 'https://github.com/JonathanRamosNascimento',
}

function Avatar() {
  return <div className="avatar" aria-label="Avatar abstrato de Jonathan Ramos" role="img"><span className="avatar-glow" /><div className="avatar-face"><i /><b /><em /></div><span className="avatar-code">&lt;/&gt;</span></div>
}

function ExternalArrow() { return <span aria-hidden="true">↗</span> }

export default function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('language') as Language) || 'pt-BR')
  const t = copy[language]
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.title = `Jonathan Ramos — ${t.role.replace('.', '')}`
  }, [language, t.role])
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  return <main>
    <div className="noise" />
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Jonathan Ramos — início"><span>JR</span><i /></a>
      <nav aria-label="Navegação principal"><a href="#home">{t.nav[0]}</a><a href="#about">{t.nav[1]}</a><a href="#stack">{t.nav[2]}</a><a href="#contact">{t.nav[3]}</a></nav>
      <div className="language" aria-label="Idioma">
        {(['pt-BR', 'en', 'es'] as Language[]).map((item) => <button key={item} className={language === item ? 'active' : ''} onClick={() => setLanguage(item)} aria-pressed={language === item}>{item === 'pt-BR' ? 'PT' : item.toUpperCase()}</button>)}
      </div>
    </header>

    <section id="home" className="hero">
      <div className="hero-copy hero-reveal">
        <p className="eyebrow"><span className="status-dot" /> {t.badge}</p>
        <p className="greeting">{t.greeting}</p>
        <h1>Jonathan<br /><span>Ramos.</span></h1>
        <p className="role">{t.role}</p>
        <p className="intro">{t.intro}</p>
        <div className="actions"><a className="button primary" href={LINKS.linkedin} target="_blank" rel="noreferrer">{t.linkedin} <ExternalArrow /></a><a className="button secondary" href={LINKS.github} target="_blank" rel="noreferrer">{t.github} <ExternalArrow /></a></div>
      </div>
      <div className="hero-art hero-art-reveal"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Avatar /><p className="coordinates">16°19′S / 48°57′W<br />BRAZIL // UTC−03</p></div>
      <a className="scroll-hint" href="#about"><span />{t.scroll}</a>
    </section>

    <section id="about" className="section about">
      <div className="section-heading reveal"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2></div>
      <div className="about-content reveal reveal-delay"><p>{t.about}</p><dl><div><dt>{t.factLocation}</dt><dd>{t.factLocationValue}</dd></div><div><dt>{t.factCurrent}</dt><dd>{t.factCurrentValue}</dd></div><div><dt>{t.factEducation}</dt><dd>{t.factEducationValue}</dd></div></dl></div>
    </section>

    <section id="stack" className="section stack"><div className="stack-intro reveal"><p className="eyebrow">{t.stackEyebrow}</p><h2>{t.stackTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2><p>{t.stackText}</p></div><div className="skill-grid">{t.groups.map((group, index) => <article className={`skill-card reveal reveal-card-${index + 1}`} key={group.title}><span className="card-index">0{index + 1}</span><h3>{group.title}</h3><p>{group.text}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>

    <section className="quote reveal"><span>“</span><p>{t.quote}</p><i /></section>

    <section id="contact" className="section contact reveal"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2><p>{t.contactText}</p><div className="contact-links"><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><span>in</span>{t.contactLinkedin}<ExternalArrow /></a><a href={LINKS.github} target="_blank" rel="noreferrer"><span>gh</span>{t.contactGithub}<ExternalArrow /></a></div></section>

    <footer><a className="brand" href="#home"><span>JR</span><i /></a><p>© {new Date().getFullYear()} · {t.footer}</p><a href="#home">↑ TOP</a></footer>
  </main>
}
