import Home from './Components/Home/Home';
import SingleBlog from './Components/SingleBlog/SingleBlog';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/singleBlog/:blogId">
          <SingleBlog />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
