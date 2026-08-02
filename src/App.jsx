import './App.css'
import conteudo from './conteudo.json'

function App() {
  return (
    <div className="container">
      
      {/* HEADER */}
      <header className="main-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-icon">🧠</div>
            <div className="logo-text">
              <span className="logo-name">{conteudo.heroNome}</span>
              <span className="logo-title">{conteudo.heroEspecialidade}</span>
            </div>
          </div>
        </div>
        
        <div className="header-right">
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Consultas</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar" />
            <button>🔍</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero-split">
        <div className="hero-image-container">
          {conteudo.imagemHero ? (
            <img src={conteudo.imagemHero.replace('/images/', './images/')} alt={conteudo.heroNome} className="hero-img" />
          ) : (
            <div className="image-placeholder">Sua foto aqui</div>
          )}
        </div>
        
        <div className="hero-text-container">
          <h1>{conteudo.heroNome}</h1>
          <h2>{conteudo.heroEspecialidade}</h2>
          <span className="crm">{conteudo.heroCrm}</span>
          
          <p className="highlight-text">{conteudo.heroDestaque}</p>
          
          <h3 className="sub-heading">{conteudo.heroTituloConsulta}</h3>
          <p>{conteudo.heroDescricao}</p>
          <p>Contato entre as consultas para tirar suas dúvidas e dar orientações.</p>
          <p>Fale com a minha equipe pelo WhatsApp para mais informações e disponibilidade.</p>
          
          <a href={conteudo.contatoLinkZap} target="_blank" rel="noreferrer">
            <button className="btn-dark-blue">Agende sua consulta</button>
          </a>
        </div>
      </section>

      <main>
        {/* SOBRE */}
        <section id="sobre" className="about bg-gray">
          <div className="section-container about-grid">
            <div className="about-text">
              <h3>{conteudo.sobreTitulo}</h3>
              <p>{conteudo.sobreTexto}</p>
            </div>
            <div className="about-image">
              {conteudo.imagemSobre ? (
                <img src={conteudo.imagemSobre.replace('/images/', './images/')} alt="Sobre o Consultório" className="about-img" />
              ) : (
                <div className="placeholder-img">[Foto do Consultório ou Logos]</div>
              )}
            </div>
          </div>
        </section>

        {/* SERVIÇOS (Mantidos estáticos por enquanto, a menos que você queira gerenciar no painel também) */}
        <section id="servicos" className="services">
          <div className="section-container">
            <h3>Do que podemos cuidar nas consultas?</h3>
            <div className="cards">
              <div className="card">
                <h4>Transtorno de Ansiedade</h4>
                <p>Preocupação excessiva e persistente, com tensão, inquietação e sintomas físicos.</p>
              </div>
              <div className="card">
                <h4>Transtorno Depressivo</h4>
                <p>Tristeza persistente, perda de interesse, cansaço e dificuldade para viver o dia a dia.</p>
              </div>
              <div className="card">
                <h4>Transtorno Afetivo Bipolar</h4>
                <p>Alternância de períodos de euforia e depressão, com mudanças intensas de humor.</p>
              </div>
              <div className="card">
                <h4>TDAH</h4>
                <p>Dificuldade de atenção, impulsividade e inquietação que atrapalham o dia a dia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contact bg-gray">
          <div className="section-container contact-box">
            <h3>Detalhes para contato</h3>
            <p>Se você tem alguma dúvida ou deseja agendar, entre em contato conosco:</p>
            <div className="contact-info">
              <p>{conteudo.contatoEndereco}</p>
              <p>{conteudo.contatoTelefone}</p>
            </div>
            <a href={conteudo.contatoLinkZap} target="_blank" rel="noreferrer">
              <button className="btn-dark-blue">Fale com a minha equipe no WhatsApp</button>
            </a>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer>
        <p>© 2026 {conteudo.heroNome}.</p>
      </footer>
    </div>
  )
}

export default App