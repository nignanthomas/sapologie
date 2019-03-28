import React, { Component } from 'react';
import { Input } from 'antd';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import * as actions from '../store/actions/auth';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {LogoContainer} from './Logo';


const Search = Input.Search;


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }

    render() { 

        const show = (this.state.menu) ? "show" : "" ;

        return ( 
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    {/* <img src={logo} alt="store" className="navbar-brand"/> */}
                    <LogoContainer className="font-weight-bold pb-3"><span><i className="fas fa-shopping-bag"></i></span> <strong>Sapo<span className="text-danger">logie</span></strong></LogoContainer>
                </Link>

                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar5"
                        onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className={"collapse navbar-collapse " + show} id="navbar5">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-1">
                            <Link to="/women" className="nav-link">Women</Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link to="/men" className="nav-link">Men</Link>
                        </li>
                    </ul>

                    {/* <Search className="mx-auto"
                        placeholder="search..."
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                     */}
                    <Search className="mx-auto"
                        placeholder="search..."
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ width: 300 }}
                    />

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
                        <LogoContainer cartnav className="pb-3">
                            <span className="mr-2">
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            cart
                        </LogoContainer>
                    </Link>
                </div>
            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
    background: var(--mainDark);
    max-height: 3.2rem;
    
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
