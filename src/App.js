import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Left from './Components/left';
import Right from './Components/right';
function App() {
  return (
    <div className="App">
      <Header BrandName="Nico" />
      <Left />
      <Right />
    </div>
  );
}

export default App;
