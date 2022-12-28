import React, { useState, useEffect } from "react";
import axios from "axios"

const ComparisonModal = (props) => {

  const getFeatures = (obj1, obj2) => {
    let obj1Features = obj1.features
    let obj2Features = obj2.features
    let features = []
    obj1Features.forEach((feature) => {
      if (features.includes(feature)) {
        console.log('its here')
      } else {
        features.push(feature)
      }
    })
    obj2Features.forEach((feature) => {
      if (features.includes(feature)) {
        console.log('its here')
      } else {
        features.push(feature)
      }
    })
    return features
  }


  const allFeatures = getFeatures(props.primaryProduct, props.relatedProductCurrent);

  return (
    <div className="overlay">
      <div className="modalContainer">
        {console.log(props)}
        <button onClick={(value) => props.setModal(false)} >close</button>
        <table className='modal-table'>
            <th>{props.primaryProduct.productName}</th>
            <th></th>
            <th>{props.relatedProductCurrent.productName}</th>
            <tbody className='modal-table-body'>
              {allFeatures.map((feature, index) => {
                return (
                  <tr className='feature-row' key={index}>
                    <td className='left-check'>{props.primaryProduct.features.filter(item => item.feature === feature.feature && item.value === feature.value).length > 0 ? '✓' : null}</td>
                    <td className='feature-cell'>{feature.value} {feature.feature}</td>
                    <td className='right-check'>{props.relatedProductCurrent.features.filter(item => item.feature === feature.feature && item.value === feature.value).length > 0 ? '✓' : null}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
      </div>
    </div>
  )
}
export default ComparisonModal;

//   const rows = props.primaryProduct.map((rowData, index) => {
//     return (
//       <tr key={index}>
//         <td>{rowData.col1}</td>
//         <td>{rowData.col2}</td>
//         <td>{rowData.col3}</td>
//       </tr>
//     );
//   })

//   return (
//     <div className="overlay">
//       <div className="modalContainer">
//         <button onClick={(value) => props.setModal(false)} >close</button>
//         <table>
//           <tbody>
//             {rows}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

