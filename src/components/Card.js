import React, {Component} from "react";
import './styles/Card.css';

class Card extends Component {

    render() {
        const {title, description, img} = this.props;
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='text-center'>
                            <img src={img} className="mx-auto" width='30%' alt='default image'/>
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