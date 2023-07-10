import "./HomePage.css"
import Cart from "../../components/cart/Cart";

//Pages should only render components!!!
//That means that we should also create component, even if we use it only once
const HomePage = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default HomePage;
