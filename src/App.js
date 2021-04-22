import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './componets/MainPage/MainPage';
import { UserStatics } from './componets/UserStatics/UserStatics';

//1. img
//2. style дублирование
// div index.html
//3. font-family(@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap')) Где?
//4. Route path="/"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/UserStatics">
          <UserStatics />
        </Route>
  
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
