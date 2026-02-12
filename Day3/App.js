import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./assets/spotify.png";
import searchIcon from "url:./assets/search.png";
import user from "url:./assets/user.png";

// React Element
const title = (
  <div className="headings">
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
  </div>
);

// Functional Component
const TitleComponent = (props) => (
  <div className="container">
    <h1>{props.children} 1</h1>
    <h2>{props.children} 2</h2>
    <h3>{props.children} 3</h3>
  </div>
);

// Function Cmposition - Using one component another component
const HeadingComponent = () => {
  return (
    <>
      <h1>React Functional Component using JSX!</h1>
      <TitleComponent>This is heading</TitleComponent>
    </>
  );
};

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} />
        <form className="searchbar">
          <input id="searchtext" type="text" placeholder="search something" />
          <button className="search-button">
            <img src={searchIcon} />
          </button>
        </form>

        <img src={user} />
      </nav>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NavBar />);
