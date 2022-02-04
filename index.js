function Header() {
  return (
    <div>
      <nav>
        <img
          src="react-logo.png"
          alt="blue atom with four rings surrounding a blue nucleus"
          width="60"
          height="60"
        />
      </nav>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons for relearning React :</h1>
      <ol>
        <li>I didn't have much time to learn it properly the first time</li>
        <li>I'll be able to rebuild the components that I made previously</li>
        <li>It will help me to get a position at a great company</li>
        <li>
          I will be one step closer to becoming as great a developer as those at
          Meta
        </li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <small>© 2022 Lathan development. All rights reserved.</small>
      </footer>
    </div>
  );
}

function LandingPage() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

ReactDOM.render(<LandingPage />, document.getElementById("root"));
