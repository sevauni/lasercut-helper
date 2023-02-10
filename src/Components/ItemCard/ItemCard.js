import './ItemCard.scss'
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';

import PreviewImg from '../../Assets/Imgs/part-image.png';
import { MediaQueryContext } from '../../Contextes/Context';


export default function ItemCard(props) {
    const [itemNameCollapsed, setNameCollapsed] = useState(false)
    const isMobile = useContext(MediaQueryContext);
 
    return (
        <div className={isMobile ? "item-card " : "item-card item-card_mobile"}>
            <div className='item-card__header_left'>
                <input type="checkbox" name="asd" id="asdasd" />
                {!itemNameCollapsed
                    ?
                    <>
                        <button className='item-card__header_left_name' onClick={() => setNameCollapsed(true)}>30. Metal_part_name</button>

                        <button onClick={() => setNameCollapsed(true)}>Edit</button>
                    </>
                    :
                    <>
                        <Form.Control
                            autoFocus
                            onBlur={() => setNameCollapsed(false)}
                            size="sm"
                            type="text"
                            

                        />
                        <button onClick={() => setNameCollapsed(false)}>Save</button>
                    </>
                }
            </div>
            <div className='item-card__header_right'>
                <h6>Qty:</h6>
                <Form.Control
                    type="number"
                    defaultValue="1"
                    size="sm" />
            </div>
            <figure className='item-card__image'>
                <img src={PreviewImg} alt="description of part number" height="100%" />
            </figure>
            <div className='item-card__properties'>
                <button><b>Sheet Metal Cutting</b></button>
                <button><b>Dimensions:</b> 130.0mm × 200.0mm × 1.0mm</button>
                <button><b>Sheet Thickness:</b> 1 mm </button>
                <button><b>Material:</b> Aluminium EN AW-5052</button>
                <button><b>Finish:</b>  Standard</button>
            </div>
            <div className='item-card__result'>
                <button>
                    <span>Standart</span>
                    <span>02.03.2023</span>
                    <span>$50</span>
                    <span>25$/per unit</span>
                </button>
            </div>
            <div className='item-card__edit' >
                <button>Edit item</button>
            </div>
            <div className='item-card__add-buttons' >
                <button>Duplicate</button>
                <button>Remove</button>
            </div>
        </div>
    )
}



                //         {/* <h6>5</h6>
                // <Form.Control
                //     type="number"
                //     size="sm"