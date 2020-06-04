import React, {Component} from "react";
import image1 from '../../images/image1.jpeg'

class Card extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={image1}/>
                </div>
                <div>
                    <h1> Categoria 1</h1>
                    <p> Esta es l aprimera categoria</p>
                </div>
            </div>
        );
    }
}

export default Card;