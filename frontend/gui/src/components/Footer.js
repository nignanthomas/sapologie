import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Footer extends Component {
    state = {  }
    render() { 
        return (
                <FootWrapper>
                    <div className="row">
                        <div className="col-5 mx-auto col-md-3 col-lg-3 my-2">
                            <div className="foot">
                                Women
                            </div>
                            <div className="pl-5">
                                <Link className="foot-item" to="#">Clothing</Link> <br/>
                                <Link className="foot-item" to="#">Shoes</Link> <br/>
                                <Link className="foot-item" to="#">Accessories</Link> <br/>
                            </div>
                        </div>

                        <div className="col-5 mx-auto col-md-3 col-lg-3 my-2">
                            <div className="foot">
                                Men
                            </div>
                            <div className="pl-5">
                                <Link className="foot-item" to="#">clothing</Link> <br/>
                                <Link className="foot-item" to="#">shoes</Link> <br/>
                                <Link className="foot-item" to="#">accessories</Link> <br/>
                            </div>
                        </div>

                        <div className="col-5 mx-auto col-md-3 col-lg-3 my-2">
                            <div className="foot">
                                Contact
                            </div>
                            <div className="pl-5">
                                <Link className="foot-item" to="#">email: sapologie@gmail</Link> <br/>
                                <Link className="foot-item" to="#">phone: +254 712 345 678</Link> <br/>
                                <Link className="foot-item" to="#">address: Ngong Lane Plaza</Link> <br/>
                            </div>
                        </div>
                        
                    </div>
                </FootWrapper>
        );
    }
}

const FootWrapper = styled.nav`
    background: var(--mainDark);
    bottom: 0;
    align-self: flex-end;
    
    .foot{
        color: var(--mainWhite) !important;
        font-size: 1.2rem;
        text-transform: capitalize;
        text-decoration: underline;
    }
    .pl-5 .foot-item{
        color: grey !important;
        font-size: 1rem;
        text-transform: lowercase;
        text-decoration: none !important;
    }
    .foot-item:hover{
        color: grey !important;
        font-size: 1rem;
        text-transform: lowercase;
        text-decoration: underline !important;
    }
`;
 
export default Footer;