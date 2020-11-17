import React from 'react'

const DisplayRowData = (props) => {
    return (
      <tr>
        <td id='fea_col'>{props.feature}</td>
        <td id='desc_col'>{props.description}</td>
        <td></td>
      </tr>
    );
}

export default DisplayRowData
