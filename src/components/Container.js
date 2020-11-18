import React, {useState, useEffect} from "react";
import DisplayRowData from "./DisplayRowData";
import axios from 'axios'

const Container = () => {
  const [completeData, setCompleteData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
       setIsError(false);
      setIsLoading(true)
      try{
        const result = await axios("http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true");
        setCompleteData(result.data);
      } 
      catch (error) {
        setIsError(true);
      }
      
      setIsLoading(false)
    })();
  }, [])
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? 
      (
        <div><h3 data-text = "It's loading…"> It's loading…</h3></div>
       
      )
      :(
      <div>
      {Object.keys(completeData).length !== 0 ? (
            completeData.data.map((dataItem, index) => (
              <DisplayRowData
                key={index}
                feature={dataItem.feature}
                description={dataItem.description}
                data={dataItem.data}
              />
            ))
          ):null
        }
      </div>
      )
}
    </div>
  )

}
export default Container;