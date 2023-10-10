import React from 'react'
import { useEffect } from 'react';
import { SUBSCRIPTION_LIST_URL } from '../utils/constants';

const Subscription = () => {
    useEffect(()=>{
        getSubs();
    })

    const getSubs = async ()=>{
        const subsc = await fetch(SUBSCRIPTION_LIST_URL);
        const subscList = await subsc.json();
        console.log(subscList);
    }
  return (
    <div>
     This page is for subscriptions
    </div>
  )
}

export default Subscription;