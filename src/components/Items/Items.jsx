import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Card from '../Card/Card';
import axios from 'axios';
import './Items.css'

const Items = () => {
    const [bestseller, setBestSeller] = useState([]);
    const [oldSchool, setOldSchool] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=> {
            setOldSchool(oldSchool.data.data)
        }).catch(()=> {

        }).finally(()=> {
            
        });
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestseller)=> {
            setBestSeller(bestseller.data.data)
        }).catch(()=> {

        }).finally(()=> {
            
        })
    }, [])

  return (
    <>
        <Header className="header"/>
        <section className='main'>
            <h1 className='bestseller'>Best Seller</h1>
            <div className="bestseller-cards">
                {bestseller.map((item, key)=>{
                    return <Card item={item.attributes}/>
                })}
            </div>
            

            <h1 className='oldschool'>Old School</h1>
            <div className="oldschool-cards">
                {oldSchool.map((item, key)=>{
                    return <Card item={item.attributes}/>
                })}
            </div>
            
        </section>
    </>
  )
}

export default Items