import React, { useState, useEffect } from 'react'
import { URL } from '../api'
import DisplayRowData from './DisplayRowData'

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
        <table>
          <tbody>
            {Object.keys(completeData).length !== 0 ? (
              completeData.map(dataItem => <DisplayRowData  feature={dataItem.feature} description={dataItem.description}/>)
            ) : (
              <h3 data-text="It's loading…">It's loading…</h3>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default Container
