import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { Link } from "react-router-dom";

class Home extends Component {
    render() { 
        return (
            
            <div className="container">
                <div className="banner">
                <div className="mx-auto text-center"  style={{fontSize:"2rem"}}>
                    <p><span>Free shipping /</span> <span className="text-primary">/ Fast delivery</span></p>
                </div>
                <div className="banner-text">
                    <Title name="shop" title="now"></Title>
                </div>
                </div>
                {/* <Title name="shop" title="now"></Title> */}
                    <div className="row">
                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-6 my-4">
                            <div className="category">
                                <Link to="/categories">
                                    <div className="">
                                        <img src="http://www.galknows.com/wp-content/uploads/2015/10/african-women-fashion-styles0891.png" alt="Women" className="img-fluid" />
                                    </div>
                                    <div className="message rounded-left">
                                        WOMEN
                                    </div>
                                </Link>
                            </div>
                        </CatWrapper>


                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-6 my-4 category">
                            <div className="category">
                                <Link to="/men">
                                    <div className="">
                                        <img src="https://www.swiftfoxx.com/wp-content/uploads/2017/06/african-wear-for-office3-819x1024.jpg" alt="Men" className="img-fluid" />
                                    </div>
                                    <div className="message rounded-left">
                                        MEN
                                    </div>
                                </Link>
                            </div>
                        </CatWrapper>
                    </div>
            </div>
        );
    }
}

const CatWrapper = styled.div`
    .category img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all 1s linear;
        position: relative;
        object-fit: cover;
        width: 100%;
        height: 500px;
    }
    &:hover {
        .category img {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transition: all 1s linear;
        }
    }
   
    .message {
        position: absolute;
        display: inline-block;
        color: var(--mainDark);
        font-size: 1.5rem;
        background-color: var(--mainWhite);
        padding: 0.5rem;
        top: 0rem;
        right: 0;
    }
`;
 
export default Home;