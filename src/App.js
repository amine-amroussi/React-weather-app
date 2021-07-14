import styled from 'styled-components';
import './App.css';

import CurrentWeather from './components/CurrentWeather';


function App() {
  // console.log(weathers);
  return (
    <div className="app">
      <Container>
        <CurrentWeather />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  @media (max-width : 1000px){
    width: 90vw !important;
  }

  position: relative;
  overflow-x: hidden;
  width : 50vw;
  height:  90vh;
  background-color: #f4f1de;
  border-radius: 15px;
  box-shadow : 3px 3px 23px -2px #fff;

`
