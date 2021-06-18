import "./App.css";
import Home from "./components/Home";
import Nav from "./components/nav";
import GlobalNews from "./components/GlobalNews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocalNews from "./components/LocalNews";
import Category from "./components/category";
import { GlobalProvider } from "./context/context";
import PrivatePage from "./components/PrivatePage";
import { SignIn } from "./components/signIn";
import SignUp from "./components/signUp";
function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <PrivatePage exact path="/GlobalNews" component={GlobalNews} />
            <PrivatePage exact path="/LocalNews" component={LocalNews} />
            <PrivatePage exact path="/category" component={Category} />
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
