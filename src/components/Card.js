import React, {Component} from "react";
import '../styles/Card.css';
import img from '../images/checked-checkbox.png'

class Card extends Component {

    render() {
        const {title, description} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='text-center'>
                            <img src={img} className="mx-auto p-2" width='30%' alt='Images'/>
                        </div>
                        <div className='text-center'>
                            <h1 className='h1'>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;