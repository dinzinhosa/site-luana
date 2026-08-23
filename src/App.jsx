import './App.css'
import conteudo from './conteudo.json'

// Função simples para converter Markdown básico (**negrito** e *itálico*) em HTML
function parseMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Transforma **texto** em <strong>
    .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Transforma *texto* em <em>
    .replace(/\n/g, '<br />');                        // Respeita as quebras de linha
}

function App() {
  return (
    <div className="container">
      
      {/* HEADER */}
      <header className="main-header">
        <div className="header-left">
          <div className="logo-container">
            <img src="/logo-novo-removebg.png" alt="Logo Luana Laurito" className="logo-img" />
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
          
          {/* Descrição com conversão de Markdown */}
          <div dangerouslySetInnerHTML={{ __html: parseMarkdown(conteudo.heroDescricao) }} />
        
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
              {/* Texto Sobre com conversão de Markdown */}
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(conteudo.sobreTexto) }} />
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
{/* ===== CÓDIGO ANTIGO (COM QUADROS) COMENTADO ===== 
        <section id="servicos" className="services">
          <div className="section-container">
            <h3>{conteudo.servicosTitulo || "Do que podemos cuidar nas consultas?"}</h3>
            
            <div className="cards">
              {conteudo.servicos && conteudo.servicos.map((servico, index) => (
                <div className="card" key={index}>
                  <h4>{servico.titulo}</h4>
                  <div dangerouslySetInnerHTML={{ __html: parseMarkdown(servico.descricao) }} />
                </div>
              ))}
            </div>
          </div>
        </section>
        ==================================================== */}

        {/* ===== NOVO CÓDIGO SEM OS QUADROS ===== */}
        <section id="servicos" className="services">
          <div className="section-container">
            <h3>{conteudo.servicosTitulo || "Do que podemos cuidar nas consultas?"}</h3>
            
            <div className="servicos-conteudo">
              {conteudo.servicos && conteudo.servicos.map((servico, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  
                  {/* Só renderiza o título se a médica tiver preenchido no CMS */}
                  {servico.titulo && (
                    <h4 style={{ marginBottom: '10px', color: '#87515A' }}>
                      {servico.titulo}
                    </h4>
                  )}
                  
                  {/* Descrição do serviço com conversão de Markdown */}
                  <div dangerouslySetInnerHTML={{ __html: parseMarkdown(servico.descricao) }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contact bg-gray">
          <div className="section-container contact-box">
            {/* Título e subtítulo agora puxam do CMS, com um texto padrão de segurança */}
            <h3>{conteudo.contatoTitulo || ""}</h3>
            <p>{conteudo.contatoSubtitulo || ""}</p>
            
           <div className="contact-info">
              {conteudo.contatoEndereco && (
                <p dangerouslySetInnerHTML={{ __html: parseMarkdown(conteudo.contatoEndereco) }} />
                )}
              {conteudo.contatoTelefone && <p>{conteudo.contatoTelefone}</p>}
            </div>
            
            <div className="contact-buttons">
              
              {/* Botão Secundário: Instagram */}
              <a href="https://instagram.com/draluanalaurito" target="_blank" rel="noreferrer">
                <button className="btn-outline">Instagram</button>
              </a>

              {/* Botão Principal: WhatsApp */}
              <a href={conteudo.contatoLinkZap} target="_blank" rel="noreferrer">
                <button className="btn-dark-blue">Agendamento</button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer>
        <p>© 2026 {conteudo.heroNomeCompleto}.</p>
      </footer>
    </div>
  )
}

export default App