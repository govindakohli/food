import React from 'react';
import "./main_content.css";

const MainContent = (props  ) => {
    return (
       <div>
         <div className='container'>
            <div >
             <img src={props.src} />
             <h2>{props.item_name}</h2>
             <h3><i class="fa-regular fa-star"></i>{props.star} | {props.del_time}min</h3>
             <h4>{props.rest_name}</h4>
             <h4>{props.rest_add}</h4>
            </div>
        </div>
       </div>
    );
}

export default MainContent;
