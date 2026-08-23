export default function ComoFunciona() {
  return (
    <main className="how-page">
      <header className="how-header">
        <nav className="nav container" aria-label="Navegação principal">
          <a className="brand brand-image" href="/" aria-label="TriGo Travel, início"><img src="/trigo-logo.jpg" alt="TriGo Travel" /></a>
          <div className="nav-links">
            <a href="/#destinos">Destinos</a><a href="/#experiencias">Experiências</a><a href="/como-funciona" aria-current="page">Como funciona</a><a href="/#sobre">A agência</a>
          </div>
          <a className="nav-cta" href="/#contato">Planejar viagem <span>↗</span></a>
        </nav>
      </header>

      <section className="how-hero container">
        <p className="eyebrow">o jeito trigo de viajar</p>
        <h1>Uma viagem começa<br />com uma boa <em>conversa.</em></h1>
        <p>Você conta o que imagina. A gente escuta, pesquisa e organiza cada etapa com calma — para que o seu tempo seja dedicado ao que importa: viver a experiência.</p>
      </section>

      <section className="how-steps">
        <div className="container">
          <p className="eyebrow">do primeiro oi ao retorno</p>
          <div className="step-list">
            <article className="step-card"><span>01</span><div><h2>Vamos nos conhecer</h2><p>A viagem começa entendendo seu momento, suas vontades e o que faz sentido para você.</p></div></article>
            <article className="step-card"><span>02</span><div><h2>Desenhamos o roteiro</h2><p>Transformamos a conversa em uma proposta com destinos, experiências e hospedagens escolhidos com intenção.</p></div></article>
            <article className="step-card"><span>03</span><div><h2>Cuidamos dos detalhes</h2><p>Com o roteiro definido, organizamos cada etapa para que tudo fique claro, leve e bem planejado.</p></div></article>
            <article className="step-card"><span>04</span><div><h2>Seguimos por perto</h2><p>Antes e durante a viagem, você tem com quem contar quando precisar.</p></div></article>
          </div>
        </div>
      </section>

      <section className="how-closing container">
        <p className="eyebrow">sem fórmulas prontas</p>
        <h2>O roteiro é seu.<br />O cuidado é <em>nosso.</em></h2>
        <p>Não existe viagem igual à outra. Por isso, cada escolha é construída a partir da sua história, do seu ritmo e da forma como você quer se sentir quando estiver lá.</p>
        <a className="button button-dark" href="https://wa.me/5521967260597" target="_blank" rel="noreferrer">Começar uma conversa <span>→</span></a>
      </section>

      <footer><div className="container footer-content"><a className="brand brand-image" href="/" aria-label="TriGo Travel, início"><img src="/trigo-logo.jpg" alt="TriGo Travel" /></a><p>O mundo é grande. A sua próxima história também.</p><div className="footer-links"><a href="https://instagram.com/trigo.travel" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/5521967260597" target="_blank" rel="noreferrer">WhatsApp</a></div></div></footer>
    </main>
  );
}
