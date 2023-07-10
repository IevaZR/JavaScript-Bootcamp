import "./CartItem.css"
//the next line ignores the ts error on the next line
//@ts-ignore
import CartIcon from "../../assets/shopping-cart.png"
import Button from "../../reusableComponents/button/Button";
//it would be better to use svg to avoid the above error
//we can name CartIcon as we want

interface CartItemProps {
    // name?: string; -> the question mark means that this property is not required
    //if we want the property to be required, we remove the question mark, like this:
    name: string;
    description?: string; //this means that the description is not required
    price: string;
    img: string
}


const CartItem = ({name, description, price, img}: CartItemProps) => {
  return (
    <div className="CartItem">
        <div>
          <h1>{name}</h1>
          <p>{description ? description : "No description..."}</p> 
          {/* //if there is a description prop, we add it, if not, then we add text "No description" */}
          <p>{price}</p>
        </div>
        <img className='CartItemImage' src={img} alt="" />
        <Button buttonColor="red" icon={CartIcon} text="ADD TO CART"/>
      </div>
  )
}

export default CartItem