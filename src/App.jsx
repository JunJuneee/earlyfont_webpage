import "./App.css";
import Header from "./Components/Home/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/BrandFont/Portfolio";
import Estimate from "./Components/BrandFont/Estimate";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Branding from "./Components/BrandFont/Branding";
import AdminLogin from "./Components/AdminPage/AdminLogin";
import AdminUpload from "./Components/AdminPage/AdminUpload";
import PrivateRouter from "./Router/PrivateRouter";
import AdminPage from "./Components/AdminPage/AdminPage";
import AdminEdit from "./Components/AdminPage/AdminEdit";
import PortfolioDetail from "./Components/BrandFont/PortfolioDetail";
import Footer from "./Components/Home/Footer";
import EstimatesUpload from "./Components/AdminPage/EstimatesUpload";
import EstimatesEdit from "./Components/AdminPage/EstimatesEdit";

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
          <Route path="/portfolio/:name" exact component={PortfolioDetail} />
          <Route path="/estimate" exact component={Estimate} />
          <Route path="/login" exact component={AdminLogin} />
          <PrivateRouter path="/admin" exact component={AdminPage} />
          <PrivateRouter path="/admin_edit/:id" exact component={AdminEdit} />
          <PrivateRouter path="/admin_upload" exact component={AdminUpload} />
          <PrivateRouter
            path="/estimates_edit"
            exact
            component={EstimatesEdit}
          />
          <PrivateRouter
            path="/estimates_upload"
            exact
            component={EstimatesUpload}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
