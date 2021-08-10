import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';
import Crudapp from './Component/Crudapp';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename = {process.env.satyarth2000.github.io/CRUD-React-App/>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Crudapp} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
