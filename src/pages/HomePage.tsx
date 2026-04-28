export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">School Esports Platform</p>
          <h1>Run tournaments. Build teams. Have fun.</h1>
          <p className="hero-text">
            Sign up, create or join a team, and compete in tournaments organised
            by your school admins.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="card-grid">
            <article className="card">
              <h3>1. Sign up</h3>
              <p>Create an account with your email and pick a username.</p>
            </article>
            <article className="card">
              <h3>2. Build a team</h3>
              <p>
                Start a team, invite your friends and become the captain of your
                squad.
              </p>
            </article>
            <article className="card">
              <h3>3. Compete</h3>
              <p>
                Join an open tournament and play your matches when the admin
                kicks things off.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
