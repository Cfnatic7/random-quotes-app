import './App.css';
import Header from '../header/Header';
import Main from '../main/Main'
import {useSelector} from 'react-redux';

function App() {
  const quote = useSelector((state) => {
    console.log(state);
    return state.getNewQuote.quote;
  });
  return (
    <div className="App">
      <Header/>
      <Main quote = {quote}>
        
      </Main>
    </div>
  );
}

export default App;
