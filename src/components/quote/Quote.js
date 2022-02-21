import './Quote.css';

const Quote = (props) => {
    return (
        <div className="container">
            <div className = 'row'>
                <h1>&ldquo;{props.quote[0]}&#8221;</h1>
            </div>
            <div className = 'row'>
                <h3>- {props.quote[1]}</h3>
            </div>
        </div>
    )
}

export default Quote;