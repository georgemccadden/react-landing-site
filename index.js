function LandingPage() {
  return (
    <div>
      <img
        src="react-logo.png"
        alt="blue atom with four rings surrounding a blue nucleus"
        width="50"
        height="50"
      />
      <h1>Reasons why I'm excited to learn React :</h1>
      <ul>
        <li>It was created and is maintained by Facebook</li>
        <li>I will become a better front-end developer</li>
        <li>Prospective jobs will become more available to me</li>
        <li>I'll be able to build anything I can think of more easily</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<LandingPage />, document.getElementById("root"));
