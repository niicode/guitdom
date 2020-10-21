import React from 'react';
// import  FontAwesomeIcon  from '@fortawesome/react-fontawesome'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    GuitDom
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact Information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <LocationOnIcon className ="icon"
                                />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>Darko St.</div>
                                </div>
                            </div>
                            <div className="tag">
                                <AddIcCallIcon className ="icon"
                                />
                                <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>Mon-Sun/ +233 50 143 0726</div>
                                </div>
                            </div>
                            <div className="tag">
                                <AccessTimeIcon className ="icon"
                                />
                                <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>Mon-Sun/ 8am - 9pm</div>
                                </div>
                            </div>
                            <div className="tag">
                                <EmailIcon className ="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>Mon-Sun/ +233 50 143 0726</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>Be the first to Know</h2>
                        <div>
                            <div>
                                Get all the lastest infomation about sales, offers and coupons. Dont miss Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;