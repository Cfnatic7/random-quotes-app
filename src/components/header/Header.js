import './Header.css'

const Header = () => {
    return (<header className = 'position-fixed w-100 title'>
                <div className = 'd-flex justify-content-between'>
                    <h2 >Quote machine</h2>
                    <h6>by <a href = 'https://github.com/Cfnatic7' className = 'github-link' target = '_blank'>Cfnatic7</a></h6>
                </div>
            </header>);
}

export default Header;