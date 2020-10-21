import React from 'react';
import MyButton from '../utils/button'
import Login from './login'
const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Hello You are welcome to GuitDom where you can get the lastest models of your favorite brand guitar at verfy affordable prices, being it used or Brand new. You can contact us as well if you are intrested in selling you used Guitars.</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo = "/register"
                            addStyles = {{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className= "right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account please Login</p>
                            <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;