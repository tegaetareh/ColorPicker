import { useState } from 'react'


// Write your Color component here
const Color = ({color, setSelectedColor, iselected}) => {
let cnameStr = {color};
console.log(cnameStr)

  return (
    <div 
      className={color}
      onClick={() => {setSelectedColor(color)
        iselected = "true"
      }      
    } 
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} >{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color  color="red" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="blue" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="green" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="black" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="white" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="violet" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="yellow" setSelectedColor={setSelectedColor} iselected="false"/>
        <Color  color="orange" setSelectedColor={setSelectedColor} iselected="false"/>
      </div>

    </div>
  );
};

export default App;
