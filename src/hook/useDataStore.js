import React, { useEffect, useState } from 'react'

const useDataStore = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return [data]
}

export default useDataStore