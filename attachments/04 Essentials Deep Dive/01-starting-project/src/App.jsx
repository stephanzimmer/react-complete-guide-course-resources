import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Section from './components/Section.jsx';

import Examples from './components/Examples.jsx';

function App() {
  
  console.log('APP COMPONENT EXECUTING');

  

  return (
    <div>
      <Header />
      <main>
        <Section id="core-concepts" title="XXX Core Concept">          
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </Section>
        <Examples />
      </main>
    </div>
  );
}

export default App;
