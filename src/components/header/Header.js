import './Header.css'
import {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'moon'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState( state => {
            if (state.icon === 'moon') return {
                icon: 'sun'
            };
            else return {
                icon: 'moon'
            };
        })
    }
    render() {
        return (<header className = 'container-fluid'>
            <h2>Quote machine</h2>
        </header>)
    }
}

