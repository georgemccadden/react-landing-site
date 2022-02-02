const landingPage = (
  <div>
    <img
      src="react-logo.png"
      width="40"
      height="40"
      alt="A blue atom with three blue rings around a solid blue nucleus"
    ></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(landingPage, document.getElementById("root"));
