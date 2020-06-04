import React, {Component} from "react";
import img from '../images/logo_banco_pichincha.jpg'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="text-left">
                    <img src={img} width='30%' alt='Photos'/>
                </header>
            </div>
        );
    }
}

export default Header;