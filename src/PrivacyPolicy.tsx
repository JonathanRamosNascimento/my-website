import { useEffect } from 'react'

export const PRIVACY_POLICY_PATH = '/politica-de-privacidade-sacode-despertaador'

const CONTACT_EMAIL = '[preencha com o e-mail de contato]'

const permissions = [
  ['Sensor de movimento (acelerômetro)', 'Medir o chacoalho enquanto o alarme toca. As leituras são processadas na hora e descartadas.'],
  ['Atividade física (contador de passos)', 'Contar os passos no desafio de andar, só enquanto o alarme toca. Nada é registrado.'],
  ['Notificações', 'Avisar e abrir o alarme no horário agendado.'],
  ['Alarmes exatos', 'Tocar no minuto certo, como o relógio do sistema.'],
  ['Notificação em tela cheia', 'Acender a tela e mostrar o alarme por cima da tela de bloqueio.'],
  ['Vibração e manter a tela ligada', 'Vibrar junto com o som e impedir que a tela apague no meio do desafio.'],
  ['Iniciar com o aparelho', 'Reagendar os alarmes depois que o celular reinicia.'],
] as const

export default function PrivacyPolicy() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR'
    document.title = 'Política de privacidade — Sacode'
  }, [])

  return <main>
    <div className="noise" />
    <header className="site-header">
      <a className="brand" href="/" aria-label="Jonathan Ramos — início"><span>JR</span><i /></a>
      <a className="policy-back" href="/">← voltar ao site</a>
    </header>

    <article className="policy">
      <p className="eyebrow">sacode // privacidade</p>
      <h1>Política de privacidade do Sacode</h1>
      <p className="policy-date">Vigente desde <time dateTime="2026-11-09">9 de novembro de 2026</time>.</p>
      <p className="policy-lead">O Sacode é um despertador que só desliga quando você se movimenta. Esta política explica quais informações o app usa e o que acontece com elas. A versão curta: <strong>nada sai do seu celular.</strong></p>

      <section>
        <h2>O que o app coleta</h2>
        <p>Nenhum dado pessoal. O Sacode não tem conta, login, anúncios, analytics nem relatórios de erro, e não se comunica com servidores — não precisa de internet para funcionar.</p>
      </section>

      <section>
        <h2>O que fica guardado no seu aparelho</h2>
        <p>Os alarmes que você cria (horário, dias, nome, desafio, dificuldade, toque e preferências) e o estado de cada despertar (sonecas usadas, último disparo) ficam no armazenamento interno do app, no seu celular. Ninguém além de você tem acesso a eles. Desinstalar o app apaga tudo.</p>
      </section>

      <section>
        <h2>Sensores e permissões</h2>
        <table>
          <thead><tr><th scope="col">Permissão</th><th scope="col">Para que serve</th></tr></thead>
          <tbody>{permissions.map(([name, purpose]) => <tr key={name}><td>{name}</td><td>{purpose}</td></tr>)}</tbody>
        </table>
        <p>Nenhuma dessas permissões é usada para identificar você, rastrear sua localização ou montar perfil de uso.</p>
      </section>

      <section>
        <h2>Compartilhamento com terceiros</h2>
        <p>Não há. Como o app não coleta dados, não há nada a vender, ceder ou compartilhar.</p>
      </section>

      <section>
        <h2>Crianças</h2>
        <p>O Sacode não é direcionado a crianças e não coleta dados de ninguém, de nenhuma idade.</p>
      </section>

      <section>
        <h2>Mudanças nesta política</h2>
        <p>Se uma versão futura passar a coletar qualquer dado, esta política será atualizada antes, com a nova data de vigência no topo, e a seção de segurança de dados do Google Play mudará junto.</p>
      </section>

      <section>
        <h2>Contato</h2>
        <p>Dúvidas sobre privacidade: <strong>{CONTACT_EMAIL}</strong></p>
      </section>
    </article>

    <footer><a className="brand" href="/"><span>JR</span><i /></a><p>© {new Date().getFullYear()} · Projetado e desenvolvido por Jonathan Ramos.</p></footer>
  </main>
}
