import Home from './Components/Home/Home';
import SingleBlog from './Components/SingleBlog/SingleBlog';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import AddPost from './Components/Admin/AddPost/AddPost';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';
import './App.css'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from 'react';

export const UserContext = createContext();

function App() {
    const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/singleBlog/:id">
            <SingleBlog />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addPost">
            <AddPost></AddPost>
          </PrivateRoute>
          <PrivateRoute path="/manageBlog">
            <ManageBlog></ManageBlog>
          </PrivateRoute>
          <Route path="*">
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
