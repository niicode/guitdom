import React from 'react';
import {Link } from 'react-router-dom'

import LocalMallIcon from '@material-ui/icons/LocalMall';

const MyButton = (props) => {

    const buttons = ()=>{
        let template = '';
        switch(props.type){
            case "default":
                template= <Link
                    className="link_default"
                    to={props.linkTo}
                    {...props.addStyle}
                >
                    {props.title}
                </Link>

            break; 
            case "bag_link":
                template = 
                <div className="bag_link"
                    onClick={()=>{
                        props.runAction();
                    }}    
                >
                    <LocalMallIcon/>
                    
                </div>
            break;
            case "add_to_cart_link":
                template=
                <div className="add_to_cart_link"
                    onClick={()=>{
                        props.runAction();
                    }}
                >
                    <LocalMallIcon/>
                    Add to Cart
                </div>
            break;
            default:
                template= ''
        }
        return template
    }
    
    return (
        <div className="my_link">
            {buttons()}
        </div>
    );
};

export default MyButton;