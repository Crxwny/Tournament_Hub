export function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#">
            Tournament Hub
          </a>
          <nav aria-label="Primary Navigation">
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#games">Games</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <p className="eyebrow">React + TypeScript Scaffold</p>
            <h1>Build tournaments step by step.</h1>
            <p className="hero-text">
              Basic website structure only. Features will be added in future
              commits.
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <p>Placeholder section for project details.</p>
          </div>
        </section>

        <section id="games" className="section alt">
          <div className="container">
            <h2>Games</h2>
            <div className="card-grid">
              <article className="card">
                <h3>Game Slot 1</h3>
                <p>Placeholder</p>
              </article>
              <article className="card">
                <h3>Game Slot 2</h3>
                <p>Placeholder</p>
              </article>
              <article className="card">
                <h3>Game Slot 3</h3>
                <p>Placeholder</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>Placeholder section for future contact details.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tournament Hub</p>
        </div>
      </footer>
    </>
  );
}
