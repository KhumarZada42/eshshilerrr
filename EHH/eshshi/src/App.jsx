import React, { useState } from 'react'


// export default function Card({img, name, price, rating}) {
//   return (
// // {/* <div>
// //   <img src={img} alt="" />
// //   <h3>Name : {name}</h3>
// //   <h2>Price : {price}</h2>
// //   <p>Rating : {rating}</p>
// // </div> */}

//   )
// }

function Ehmed() {
  const [nameState , setName] = useState(true);
  console.log(nameState);
  return(
    <div>
      <div>{nameState ? "Xumar" : "Diana"}</div>
      <button onClick={() => {setName(!nameState)}}>Adder</button>
    </div>
  )
}
export default Ehmed;
