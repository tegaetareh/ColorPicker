import { useState } from 'react'


// Write your Color component here
const Color = ({color, setSelectedColor, selectedColor}) => {

//using if else statement
//==================================================================
// let classNameString = color;
// if(selectedColor === color){classNameString= color+ " selected"}
//using tenary operator
//=================================================================
const classNameString = (selectedColor === color)? color+ " selected" : color;


  return (
    <div 
      className={classNameString}
      onClick={() => {setSelectedColor(color)}      
    } 
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  let cString = "container " + selectedColor
  console.log (cString)
  return (
    
    <div className={cString}>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} >{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color  color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="white" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color  color="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>

    </div>
  );
};

export default App;
