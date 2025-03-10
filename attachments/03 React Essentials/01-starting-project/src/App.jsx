import MyComponent from "./MyComponent.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from 'react';


function App() {
  //must be called at the top level of a Component function (or custom hooks)
  useState();
  var count = 0;
  let handleClick = () => {console.log("clicked:" + count++);}

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h3>React Essentials2</h3>
        
      </header>
      <main>
        <h3>Time!</h3>
        <p>
          <MyComponent text="my props">
            <ol>
              <TabButton clickHandler={handleClick} />
              
            </ol>
          </MyComponent>
           
        </p>
      </main>
    </div>
  );
}

export default App;
