import React from 'react';

const CartItem = ({item,value}) => {

    const {id,img,title,price,total,count} = item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center d-flex align-items-center">
            <div className="col-10 mx-auto col-lg-2">
                <img className="img-fluid" src={img} alt={title} style={{width:'5rem',height:'5rem'}}/>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                Ksh {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: Ksh {total}</strong>
            </div>
        </div>
    );
}
 
export default CartItem;