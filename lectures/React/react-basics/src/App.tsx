import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import TopBar from "./components/top-bar/TopBar";
//importing TopBar

function App() {
  return (
   <>
   <TopBar/>
   <MainContent/>
   <Footer/>
   </>
   //we need to add the empty divs, because react allows return only one element. we can also add one div
   //this is also how we add the element TopBar to the application
  );
}

export default App;
