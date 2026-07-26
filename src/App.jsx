import './App.css'

function App() {
  return (
    <div className="container">
      
      {/* HEADER DIVIDIDO 50/50 */}
      <header className="main-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-icon">🧠</div> {/* Simulando a logo */}
            <div className="logo-text">
              <span className="logo-name">Dra. Luana</span>
              <span className="logo-title">Médica Psiquiatra</span>
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

      {/* HERO DIVIDIDO 50/50 (SEM VAZAR ALTURA) */}
      <section id="inicio" className="hero-split">
        <div className="hero-image-container">
          {/* Espaço reservado para a foto cobrir tudo */}
          <div className="image-placeholder">Sua foto aqui</div>
        </div>
        
        <div className="hero-text-container">
          <h1>Dra. Luana Silva</h1>
          <h2>Médica Psiquiatra</h2>
          <span className="crm">CRM-RJ 123456 | RQE 12345</span>
          
          <p className="highlight-text">Atendimento psiquiátrico particular presencial e por teleconsulta para todo o Brasil</p>
          
          <h3 className="sub-heading">Consulta psiquiátrica com tempo e profundidade</h3>
          <p>Primeira consulta com 1:30h de duração, para uma avaliação cuidadosa e sem pressa.</p>
          <p>Contato entre as consultas para tirar suas dúvidas e dar orientações.</p>
          <p>Fale com a minha equipe pelo WhatsApp para mais informações e disponibilidade.</p>
          
          <button className="btn-dark-blue">Agende sua consulta</button>
        </div>
      </section>

      <main>
        {/* Seção Sobre a Médica (Restaurada) */}
        <section id="sobre" className="about bg-gray">
          <div className="section-container about-grid">
            <div className="about-text">
              <h3>Sobre mim</h3>
              <p>Sou a Dra. Luana, psiquiatra com graduação e residência médica. Ao longo dos anos, tive a oportunidade de atender pacientes apresentando algum sofrimento psíquico e pude perceber que, com um olhar integral, é possível restabelecer o bem-estar e a qualidade de vida.</p>
            </div>
            <div className="about-image">
              <div className="placeholder-img">[Foto do Consultório ou Logos]</div>
            </div>
          </div>
        </section>

        {/* Seção de Especialidades (Restaurada) */}
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

        {/* Seção de Contato (Restaurada) */}
        <section id="contato" className="contact bg-gray">
          <div className="section-container contact-box">
            <h3>Detalhes para contato</h3>
            <p>Se você tem alguma dúvida ou deseja agendar, entre em contato conosco:</p>
            <div className="contact-info">
              <p>📍 Rua do Consultório, 100 - Bairro, Cidade</p>
              <p>📞 (11) 99999-9999</p>
            </div>
            <button className="btn-dark-blue">Fale com a minha equipe no WhatsApp</button>
          </div>
        </section>
      </main>

      {/* Rodapé (Restaurado) */}
      <footer>
        <p>© 2026 Dra. Luana Psiquiatra.</p>
      </footer>
    </div>
  )
}

export default App