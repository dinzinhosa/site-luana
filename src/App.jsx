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

        {/* SERVIÇOS */}
        <section id="servicos" className="services">
          <div className="section-container">
            {/* O título da seção agora vem do painel. Se estiver vazio, mostra o padrão */}
            <h3>{conteudo.servicosTitulo || "Do que podemos cuidar nas consultas?"}</h3>
            
            <div className="cards">
              {/* O comando 'map' passa por cada item cadastrado no Sveltia e cria um card na tela */}
              {conteudo.servicos && conteudo.servicos.map((servico, index) => (
                <div className="card" key={index}>
                  <h4>{servico.titulo}</h4>
                  <p>{servico.descricao}</p>
                </div>
              ))}
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