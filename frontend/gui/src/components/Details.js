import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { Modal, Form, Input } from 'antd';


class Details extends Component {

    state = { visible: false }

    showModal = () => {
        this.setState({
        visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }



    render() { 
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        // const { getFieldDecorator } = this.props.form;
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-aut0 col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt={title}/>
                                </div>
                                <div className="col-10 mx-aut0 col-md-6 my-3 text-capitalize">
                                    <h3>model: {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2"><span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>price: <span>Ksh </span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Specifications:</p>
                                    <p className="text-muted lead">{info}</p>


                                    <div>
                                        <ButtonContainer type="primary" onClick={this.showModal}>
                                        Measurements
                                        </ButtonContainer>
                                        <Modal
                                        title="Your Measurements"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                        >
                                        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                                            <Form.Item label="Sleeve Length" >
                                                    <Input />
                                            </Form.Item>

                                            <Form.Item label="Chest/Bust" >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item label="Waist" >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item label="Hips/Seat" >
                                                <Input />
                                            </Form.Item>


                                            <Form.Item label="Inseam" >
                                                <Input />
                                            </Form.Item>

                                            </Form>
                                        </Modal>
                                    </div>


                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=> {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart?"inCart":"add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                            {/* end product info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
 
export default Details;