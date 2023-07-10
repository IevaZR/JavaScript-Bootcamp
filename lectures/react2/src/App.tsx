import './App.css';
import Topbar from './components/Topbar/Topbar';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';

//Rule No1 of React: You need to have pages here, not componets!!!
//Only exceptions are Topbar and Footer IF they are the same on every page
function App() {
  return (
    <div>
      <Topbar/>
      <HomePage/>
      <LoginPage/>
    </div>
  );
}

export default App;
