import './ItemCard.scss'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import PreviewImg from '../../Assets/Imgs/part-image.png';


export default function ItemCard(props) {
    const [itemNameCollapsed, setNameCollapsed] = useState(false)


    return (
        <div className="item-card">
            <div className='item-card__header'>
                <Form.Check aria-label="option 1" />
                {!itemNameCollapsed
                    ?
                    <>
                        <button onClick={() => setNameCollapsed(true)}>metal_part_name</button>

                        <button onClick={() => setNameCollapsed(true)}>Edit</button>
                    </>
                    :
                    <>
                        <Form.Control
                            autoFocus
                            onBlur={() => setNameCollapsed(false)}
                            size="sm"
                            type="text"
                            placeholder="1"

                        />
                        <button onClick={() => setNameCollapsed(false)}>Save</button>
                    </>
                }
            </div>
            <div className='item-card__header'>
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