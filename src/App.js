import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import MovingImage from "./components/MovingImage";
import AudioPlayer from "./components/AudioPlay";

function App() {
  return (
    <Fragment>
      <AudioPlayer />
      <MovingImage />
      <Cursor />
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </Fragment>
    // <BrowserRouter>
    //   <Cursor />
    //   <Navbar />
    //   <Switch>
    //     <Route path="#home" component={Home} exact />
    //     <Route path="#aboutMe" component={AboutMe} />
    //     <Route path="#projects" component={Projects} />
    //     <Route path="#contactMe" component={ContactMe} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
