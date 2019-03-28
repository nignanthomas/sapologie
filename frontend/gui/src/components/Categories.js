import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { Link } from "react-router-dom";

class Categories extends Component {
    render() { 
        return (
            <div className="container">
                <Title name="categories" title=""></Title>
                    <div className="row">
                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-4 my-4">
                            <div className="category">
                                <Link to="/women">
                                    <div className="">
                                        <img src="https://cdn.shopify.com/s/files/1/1058/0630/products/image_5491b5f9-48c0-4b58-94da-94f6054edec0_800x.jpg?v=1521212167" alt="Women" className="img-fluid" />
                                    </div>
                                    <div className="message rounded-circle">
                                        clothing
                                    </div>
                                </Link>
                            </div>
                        </CatWrapper>


                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-4 my-4 category">
                            <div className="category">
                                <Link to="/shoes">
                                    <div className="">
                                        <img src="http://www.madeinrwandashop.com/products/large/137-u3zx7yrplp5pirjzvji1.jpg" alt="Shoes" className="img-fluid" />
                                    </div>
                                    <div className="message rounded-circle">
                                        shoes
                                    </div>
                                </Link>
                            </div>
                        </CatWrapper>


                        <CatWrapper  className="col-10 mx-auto col-md-6 col-lg-4 my-4 category">
                            <div className="category">
                                <Link to="/accessories">
                                    <div className="">
                                        <img src="https://www.africabloom.com/wp-content/uploads/2017/12/Buy-African-Print-Necklace-African-wax-print-fabric-Buy-Ankara-Necklace-Online-Fabric-Necklace-15a-Buy-Now-at-AFRICA-BLOOM.jpg" alt="Accessories" className="img-fluid" />
                                    </div>
                                    <div className="message rounded-circle">
                                        acces<br/>sories
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
        width: 300px;
        height: 337px;
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
        left: 0;
        // width: 100%;
        height: 5rem;
        margin-top: -0.5rem;
        
    }
`;
 
export default Categories;