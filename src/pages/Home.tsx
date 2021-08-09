import './Home.scss';
import 'react-pro-sidebar/dist/css/styles.css';
import { createTheme } from '@material-ui/core/styles';
import { useEffect } from 'react';
import MenuComponent from '../shared/menu/MenuComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ResumeComponent from './resume/ResumeComponent';
import DemosComponent from './demos/DemosComponent';
import CodeComponent from './codes/CodeComponent';

function Home() {

  useEffect(() => { 
    createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        }
      },
    });
  }, []);
  
  return (
    <div className="Home">
      <Router>
        <MenuComponent />
        <div className="content">
          <Switch>
            <Route path="/demos">
              <DemosComponent />
            </Route>
            <Route path="/codes">
              <CodeComponent />
            </Route>
            <Route path="/">
              <ResumeComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Home;
