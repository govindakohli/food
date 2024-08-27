import React from 'react';
import "./main_content.css";
import { useDispatch } from 'react-redux';
import {addItem} from "../redux/slices/cartSlice"

const MainContent = (props  ) => {
    const dispatch = useDispatch()
    return (
       <div>
         <div className='container'>
            <div >
             <img src={props.src} />
             <h2>{props.item_name}</h2>
             <h3><i class="fa-regular fa-star"></i>{props.star} | {props.del_time}min</h3>
             <h4>{props.rest_name}</h4>
             <h4>{props.rest_add}</h4>
           <div className='addtoCart' ><b> <div>Rs.{props.price}</div></b> <button onClick={(e)=>dispatch(addItem({name:props.item_name , price:props.price , }))} className='addtocart-btn'>Add to Cart</button></div>
            </div>
        </div>
       </div>
    );
}

export default MainContent;
