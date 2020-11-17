import React, { useState, useEffect } from 'react'
import { URL } from '../api'

const Container = () => {
    const[completeData, setCompleteData] = useState({})
   
    useEffect(()=>{
        fetch(URL)
            .then(res =>{
                return res.json()
            })
            .then(res=>{
                //console.log(res.data.length)
                setCompleteData(res.data)
            })
    },[])
    return (
        <div>
            {JSON.stringify(Object.keys(completeData))}
        </div>
    )
}

export default Container
