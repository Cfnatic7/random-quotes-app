import {useDispatch} from 'react-redux';
import './GetNewQuoteButton.css';
import { getNewQuote } from '../../redux/store';

const GetNewQuoteButton = () => {
    const dispatch = useDispatch();

    return (
        <button className = 'btn btn-primary' onClick = {() => dispatch(getNewQuote())}>new quote</button>
    )
}

export default GetNewQuoteButton;