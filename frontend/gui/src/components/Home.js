import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { Link } from "react-router-dom";

class Home extends Component {
    render() { 
        return (
            <div className="container">
                <Title name="shop" title="now"></Title>
                    <div className="row">
                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-6 my-4">
                            <div className="category">
                                <Link to="/women">
                                    <div className="">
                                        <img src="http://www.galknows.com/wp-content/uploads/2015/10/african-women-fashion-styles0891.png" alt="Women" className="img-fluid" />
                                    </div>
                                    <div className="message">
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
                                    <div className="message">
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