import React from 'react';
import MyButton from '../utils/button';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const ProdNfo = (props) => {

    const showProdTags = (detail) => (
        <div className="product_tags">
            { detail.shipping ?
                <div className="tag">
                    <div><LocalShippingIcon/></div>
                    <div className="tag_text">
                        <div>Free shipping</div>
                        <div>And return</div>
                    </div>
                </div>
            :null
            }
            { detail.available ?
                <div className="tag">
                    <div><CheckIcon /></div>
                    <div className="tag_text">
                        <div>Available</div>
                        <div>in store</div>
                    </div>
                </div>
            :
                <div className="tag">
                    <div><CloseIcon/></div>
                    <div className="tag_text">
                        <div>Not Available</div>
                        <div>Preorder only</div>
                    </div>
                </div>
            }
        </div>
    )

    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price">$ { detail.price }</div>
            <div className="cart">
                <MyButton
                    type="add_to_cart_link"
                    runAction={()=>{
                       props.addToCart(detail._id)
                    }}
                />
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product_specifications">
            <h2>Specs:</h2>
            <div>
                <div className="item">
                    <strong>Frets:</strong> {detail.frets}
                </div>
                <div className="item">
                    <strong>Wood:</strong> {detail.wood.name}
                </div>
            </div>
        </div>
    )


    const detail = props.detail;
    return (
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            { showProdTags(detail)}
            { showProdActions(detail)}
            { showProdSpecifications(detail)}
        </div>
    );
};

export default ProdNfo;