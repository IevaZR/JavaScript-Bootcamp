import "./MainContentItem.css"

interface MainContentItemProps {
  title: string;
  text: string;
  image: string
}
//this is how we create types in typescript

const MainContentItem = ({title, text, image}: MainContentItemProps) => {
  
  //if we didn't create the types with interface keyword, the we would have to write each type in the place of MainContentItemProps this:
  // {title:string;
  // text: string;
  // image: string}

  //we add props, to accept properties from parent component. we could also write just (props:any), but then typescript wouldn't tell us is any of the props is missing
  //if there is some property missing in the parent component, typescript will make the parent component red
  
  //this place, before the return statement is a place where we can write normal javascript

  return (
    <div className='MainContentItem'>
      {/* here we inject the props. we pass them with props. followed by the prop name from parent component, like this -> {props.title}*/}
      {/* but if we have indicated the props in the beginning of the whole component function, then we can exclude the word props and write just the prop name */}
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={image} alt=""/>
        <button>DONATE</button>
    </div>
  )
}

export default MainContentItem