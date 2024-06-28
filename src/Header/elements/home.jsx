import React from 'react';
import MainContent from "../../components/main_content";
import data from './data';
import './home.css'

const Home = () => {
    return (
        <>
        <section className='main_container'>
           {
          data.map((value)=>{
               console.log(value.name)
             return <MainContent src={value.src} item_name={value.item_name} star={value.star} del_time={value.del_time} rest_name={value.rest_name} rest_add={value.rest_add}  />
          })
        }
        </section>
        </>
    );
}

export default Home;


