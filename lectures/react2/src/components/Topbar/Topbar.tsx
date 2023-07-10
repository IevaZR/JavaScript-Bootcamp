import "./Topbar.css"
//@ts-ignore
import LoginIcon from "../../assets/login.png"
//@ts-ignore
import RegisterIcon from "../../assets/edit.png"
import Button from "../../reusableComponents/button/Button"

const Topbar = () => {
  return (
    <div>
        <Button text="HOME"/>
        <Button text="PRODUCTS"/>
        <Button text="BEST SELLER"/>
        <Button buttonColor="blue" icon={LoginIcon} text="LOGIN"/>
        <Button buttonColor="green" icon={RegisterIcon} text="REGISTER"/>
    </div>
  )
}

export default Topbar