import React, {useState} from "react";
import ChartDispaly from "./ChartDispaly";

const DisplayRowData = props => {
    const [showChart, setShowChart] = useState(false);
    const [currentKey, setCurrentKey] = useState("cpa");
  const toggleShow = e => {
    setShowChart(!showChart);
  };

  const onKeyChange=(e)=>{
      setCurrentKey(e.target.value)
  }
  return (
    <React.Fragment>
        <table>
        <tbody>
      <tr>
        <td id='fea_col'>{props.feature}</td>
        <td id='desc_col'>{props.description}</td>
        <td onClick={toggleShow}>
          {!showChart ? (
            <i className='fa fa-angle-down' aria-hidden='true'></i>
          ) : (
            <i className='fa fa-angle-up' aria-hidden='true'></i>
          )}
        </td>
      </tr>
      {showChart ? (        
          <tr>
            <td>
              <div className='select-container'>
                <select onChange={onKeyChange}>
                  {Object.keys(props.data).map(key => (
                    <option key={key} value={key}>{key}</option> //different metrics selection
                  ))}
                </select>
              </div>
              {/* chart item based on key change*/}
              <ChartDispaly chartData={props.data[currentKey]}/> 
            </td>
          </tr>
      ) : null}
       </tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayRowData;
