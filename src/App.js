import React from "react";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import { Body, Button, Header, Image, Background } from "./components";


function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <Background>
      <Router>
        <Header>
          <NavBar provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        </Header>

        <Switch>
          <Home>

          </Home>
        </Switch>
      </Router>
.
    </Background>
  );
}

export default App;
