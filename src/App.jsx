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
import NormalLayout from "./Router/NormalLayout";
import AdminPage from "./Components/AdminPage/AdminPage";
import AdminEdit from "./Components/AdminPage/AdminEdit";
import PortfolioDetail from "./Components/BrandFont/PortfolioDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <NormalLayout path="/" exact component={Home} />
          <NormalLayout path="/branding" exact component={Branding} />
          <NormalLayout path="/portfolio" exact component={Portfolio} />
          <NormalLayout
            path="/portfolio/:name"
            exact
            component={PortfolioDetail}
          />
          <NormalLayout path="/estimate" exact component={Estimate} />
          <Route path="/login" exact component={AdminLogin} />
          <PrivateRouter path="/admin" exact component={AdminPage} />
          <PrivateRouter path="/admin_edit/:id" exact component={AdminEdit} />
          <PrivateRouter path="/admin_upload" exact component={AdminUpload} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
