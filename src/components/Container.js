import React, {useState, useEffect} from "react";
import {URL} from "../api";
import DisplayRowData from "./DisplayRowData";

const Container = () => {
  const [completeData, setCompleteData] = useState({});
const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(res => {
        //console.log(res.data.length)
        setCompleteData(res.data);
      })
      .catch((error) => {
          
          setIsError(true)
         
      });
  }, []);
  return (
    <div>
          {Object.keys(completeData).length !== 0 ? (
            completeData.map((dataItem, index) => (
              <DisplayRowData
                key={index}
                feature={dataItem.feature}
                description={dataItem.description}
                data={dataItem.data}
              />
            ))
          ) : (
            <h3 data-text="It's loading…">It's loading…</h3>
          )}
       
    </div>
  );
};

export default Container;
