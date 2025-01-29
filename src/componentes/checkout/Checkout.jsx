import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from '../../db/db.js'
import './checkout.css';



const Checkout = () => {
const [dataform, SetDataform] = useState({
    fullname: "",
    phone: "",
    email:""
})
const [orderId ,setorderId] = useState(null)

const {cart, totalPrice,deletecart} = useContext(CartContext)
const handlechangeform = (event) => {
SetDataform({...dataform,[event.target.name] : event.target.value})
    
}

const handleSubmitform = async (event) => {
    event.preventDefault()
    const order = { 
        buyer: {...dataform},
        products: {...cart},
        total: totalPrice(),
        Date: Timestamp.fromDate(new Date())
    }  
   await uploadOrder(order)
}
const uploadOrder = async (neworder) => {
    try {
        const ordersRef = collection(db, "Orders")
       const response =  await addDoc(ordersRef,neworder)
        setorderId (response.id)
        deletecart()
        console.log(response.id); 
    } catch (error) {
        console.log("no se subio");
        
    }

}



  return (
    <div className='formulario'>
        {
        orderId ? (
            <div className='texto'>
                <h2> Orden Completada! Guarde el numero de seguimiento :  </h2>
                <h3>{orderId}</h3>
                </div>
        ) : (
        <FormCheckout  dataform={dataform} handlechangeform={handlechangeform} handleSubmitform={handleSubmitform}/>
        )}
    </div>
  )
}
export default Checkout

