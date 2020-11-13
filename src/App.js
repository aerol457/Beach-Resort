import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import RoomsPage from "./pages/Rooms";
import SingleRoomPage from "./pages/SingleRoom";
import ErrorPage from "./pages/Error";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const [showNav, setShowNav] = useState(false);

  const onToggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <div className="App">
      <NavigationBar showNav={showNav} onToggleNav={onToggleNav} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={RoomsPage} />
        <Route path="/rooms/:id" component={SingleRoomPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
