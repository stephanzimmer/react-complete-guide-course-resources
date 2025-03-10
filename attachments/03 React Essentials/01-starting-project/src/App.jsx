import MyComponent from "./MyComponent.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from 'react';
import {} from './assets/data.js';

function App() {
  //must be called at the top level of a Component function (or custom hooks)
  //changes in state will trigger re-execution of component
  const [numberOfItems, setNumberOfItems] = useState(1);
  
  var count = 0;
  let handleClick = () => {console.log("clicked:" + count++);}
  var buttons = Array(numberOfItems).keys().map(() => <TabButton clickHandler={handleClick} />);
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h3>React Essentials2</h3>
        
      </header>
      <main>
        <h3>Time!</h3>
        <p>
          <button onClick={() => setNumberOfItems(numberOfItems+1)}>Add line</button>
          <MyComponent text="my props">
            <ol>
              {buttons}
            </ol>
          </MyComponent>           
        </p>
      </main>
    </div>
  );
}

export default App;
