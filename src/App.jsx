import "./App.css";
import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";
import Home from "./Components/Home";
import IntroFont from "./Components/BrandFont/Branding";
import Portfolio from "./Components/BrandFont/Portfolio";
import Estimate from "./Components/BrandFont/Estimate";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Branding from "./Components/BrandFont/Branding";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/branding" exact component={Branding} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/estimate" exact component={Estimate} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
