import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import * as actions from '../store/actions/auth';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {LogoContainer} from './Logo';


class Navbar extends Component {
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    {/* <img src={logo} alt="store" className="navbar-brand"/> */}
                    <LogoContainer>Sapologie</LogoContainer>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-1">
                        <Link to="/women" className="nav-link">Women</Link>
                    </li>
                    <li className="nav-item ml-1">
                        <Link to="/men" className="nav-link">Men</Link>
                    </li>
                </ul>

                <ul className="ml-auto">
                {
                    this.props.isAuthenticated ?
                    <li className="nav-item ml-1" onClick={this.props.logout}>
                        <Link to="/" className="nav-link">Logout</Link>
                    </li>
                    :
                    <li className="nav-item ml-1">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                }
                </ul>
                <Link to="/cart" className="ml-0">
                    <LogoContainer cartnav>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        cart
                    </LogoContainer>
                </Link>
            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
    background: var(--mainDark);
    
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;



const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
