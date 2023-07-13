import MainContentItem from "../main-content-item/MainContentItem"
import "./MainContent.css"

const MainContent = () => {
  return (
    <div className="MainContent">
      <MainContentItem title="Cool cat" text="text1 lorem lorem lorem" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l9cASQd-7BmY3IMIq7Yo4cM5BOdsiU_5jw&usqp=CAU"/>
      <MainContentItem title="Oreo" text="text2 lorem lorem lorem" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTIrxSkS608Utyd_a5T1AsCYEPMlBYXhNmA&usqp=CAU"/>
      <MainContentItem title="Lukum" text="text3 lorem lorem lorem" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUxv7XnixWXSfsIftb4MFJfI1OCIGKceCPw&usqp=CAU"/>
    </div>
    //in React we call class -> className
  )
}

export default MainContent