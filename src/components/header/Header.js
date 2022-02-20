import './Header.css'
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'moon'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState( state => {
            if (state.icon === 'moon') this.state.icon = 'sun';
            else this.state.icon = 'moon';
        })
    }
    render() {
        return (<header className = 'container-fluid'>
            <h1>Quote machine</h1>
            <FontAwesomeIcon icon = {regular(this.state.icon)} onClick = {this.handleClick} rotation = {360} className = 'icon'/>
        </header>)
    }
}

