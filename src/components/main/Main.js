import './Main.css'
import Quote from '../quote/Quote';
import GetNewQuoteButton from '../getNewQuoteButton/GetNewQuoteButton';

const Main = (props) => {
    return (
        <main className = 'd-flex flex-column container-fluid align-items-center justify-content-center'>
            <div className = 'row'>
                <Quote quote = {props.quote}/>
            </div>
            <div className = 'row'>
                <GetNewQuoteButton/>
            </div>
        </main>
    )
}

export default Main;