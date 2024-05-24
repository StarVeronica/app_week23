import logo from './logo.svg';
import './App.css';
import Card from './components/TariffCard';

function App() {

  return (
    <div className="App">
      <Card price="300" mbit="10" color="blue"></Card>
      <Card price="450" mbit="50" color="green"></Card>
      <Card price="550" mbit="100" color="red"></Card>
      <Card price="1000" mbit="200" color="black"></Card>
    </div>
  );
}

export default App;
