import React from 'react';
import  "./Product.css";
import {useStateValue} from "./StateProvider";
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
  const[{basket},dispatch]=useStateValue();
  /*console.log("added",basket);*/
  const addToBasket=()=>{

    //dispatch the item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        image:props.image,
        id:props.id,
        title:props.title,
        price:props.price,
        rating:props.rating,
      },
    });
  };
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                {Array(props.rating).fill().map((_,i)=>(
                    <p>🌟</p>
                ))}


                </div>
            </div>

            <img
            alt=""
            className="product__image"
            src={props.image}></img>

            <button  className=" product__button" onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
