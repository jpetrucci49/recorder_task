import CustomButton from './components/CustomButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Say the vocabulary words.</h4>
      <div className="button-wrapper">
      <CustomButton symbol="square" color="#faaf90"/>
      <CustomButton symbol="circle" color="#69d06d"/>
      <CustomButton symbol="play" color="#ac2020"/>
      </div>
    </div>
  );
}

export default App;
