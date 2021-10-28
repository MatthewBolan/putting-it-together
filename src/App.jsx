import './App.css';

import PuttingItTogether from './components/PuttingItTogether'

function App() {

return (

<div className="App">

      <header className="App-header">





<PuttingItTogether firstName = "Naje"

      lastName = "Odo"

      age = {39}

      hairColor = "Purple"/>



<PuttingItTogether firstName = "Honj"

      lastName = "Mit"

      age = {18}

      hairColor = "gray"/>



<PuttingItTogether firstName = "Millmore"

      lastName = "Llif"

      age = {50}

      hairColor = "red"/>



<PuttingItTogether firstName = "Riama"

      lastName = "Himts"

      age = {26}

      hairColor = "yellow"/>




      </header>

    </div>

  );

}

export default App;
