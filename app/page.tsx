"use client";

import { FormEvent, useState } from "react";

const destinations = [
  { city: "Santorini", country: "Grécia", image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1200&q=85", tag: "Romance", price: "a partir de R$ 6.890" },
  { city: "Lençóis Maranhenses", country: "Brasil", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85", tag: "Natureza", price: "a partir de R$ 2.490" },
  { city: "Patagônia", country: "Argentina & Chile", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85", tag: "Aventura", price: "a partir de R$ 7.240" },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav container" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Trigo Travels, início"><span>trigo</span> travels</a>
          <div className="nav-links">
            <a href="#destinos">Destinos</a><a href="#experiencias">Experiências</a><a href="#sobre">A agência</a>
          </div>
          <a className="nav-cta" href="#contato">Planejar viagem <span>↗</span></a>
        </nav>
        <div className="hero-content container">
          <p className="eyebrow light">viagens desenhadas para você</p>
          <h1>O mundo fica<br /><em>mais perto</em> daqui.</h1>
          <p className="hero-copy">Roteiros autorais, hotéis que contam histórias e cada detalhe cuidado por quem ama viajar.</p>
          <a className="button button-light" href="#contato">Comece a planejar <span>→</span></a>
        </div>
        <div className="hero-bottom container"><span>01 — 05</span><span>Descubra o seu próximo lugar</span><span className="scroll">role para explorar ↓</span></div>
      </section>

      <section className="intro container" id="sobre">
        <p className="eyebrow">muito além de uma passagem</p>
        <div className="intro-grid">
          <h2>Viagens que você<br />vai <em>lembrar para sempre.</em></h2>
          <div><p>Na Lume, cada roteiro nasce de uma conversa. Entendemos seu jeito de viajar e transformamos vontade em uma experiência que parece ter sido feita sob medida — porque foi.</p><a className="text-link" href="#contato">Conheça nosso jeito de viajar <span>→</span></a></div>
        </div>
      </section>

      <section className="destinations" id="destinos">
        <div className="container section-head"><div><p className="eyebrow">lugares para sentir</p><h2>Destinos que<br /><em>inspiram.</em></h2></div><a className="text-link" href="#contato">Ver todos os destinos <span>→</span></a></div>
        <div className="destination-grid container">
          {destinations.map((destination, index) => <article className={`destination destination-${index + 1}`} key={destination.city}>
            <img src={destination.image} alt={`Vista de ${destination.city}`} />
            <div className="destination-shade" />
            <div className="destination-info"><span className="tag">{destination.tag}</span><div><p>{destination.country}</p><h3>{destination.city}</h3><strong>{destination.price}</strong></div></div>
          </article>)}
        </div>
      </section>

      <section className="experiences container" id="experiencias">
        <div className="experience-photo"><img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1300&q=85" alt="Pessoa contemplando uma paisagem costeira" /></div>
        <div className="experience-copy"><p className="eyebrow">do seu jeito</p><h2>Seu tempo,<br />sua <em>história.</em></h2><p>Lua de mel, férias em família, uma pausa só sua ou a viagem que você prometeu fazer um dia. A gente cuida do caminho para você viver o que importa.</p><div className="pill-list"><span>Lua de mel</span><span>Família</span><span>Experiências</span><span>Grupos</span></div><a className="button button-dark" href="#contato">Encontrar minha viagem <span>→</span></a></div>
      </section>

      <section className="numbers"><div className="container"><p className="eyebrow light">por que viajar com a trigo</p><div className="number-grid"><div><strong>12<span>+</span></strong><p>anos transformando sonhos em roteiros</p></div><div><strong>48</strong><p>países visitados e recomendados por nós</p></div><div><strong>1:1</strong><p>atendimento próximo do primeiro oi ao retorno</p></div></div></div></section>

      <section className="contact" id="contato"><div className="container contact-grid"><div><p className="eyebrow">vamos conversar</p><h2>Para onde<br />o seu coração<br /><em>quer ir?</em></h2></div><form onSubmit={handleSubmit}><label htmlFor="name">Como podemos te chamar?</label><input id="name" name="name" placeholder="Seu nome" required /><label htmlFor="dream">Qual viagem você sonha fazer?</label><input id="dream" name="dream" placeholder="Conte um pouquinho" required /><button className="button button-dark" type="submit">Quero conversar <span>→</span></button>{sent && <p className="form-success" role="status">Obrigada! Em breve entraremos em contato.</p>}</form></div></section>

      <footer><div className="container footer-content"><a className="brand" href="#inicio"><span>trigo</span> travels</a><p>O mundo é grande. A sua próxima história também.</p><div className="footer-links"><a href="#inicio">Instagram</a><a href="#contato">Contato</a></div></div></footer>
    </main>
  );
}
