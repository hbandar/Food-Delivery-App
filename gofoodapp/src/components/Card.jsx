import React from 'react'

export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options)

  return (
    <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "400px" }}>
          <img src={props.imglink}/>
          <div className="card-body">
                <h5 className="card-title">{props.foodName}</h5>
              <div className="container flex w-100 p-0 d-inline">
                <select className="h-100 bg-light mx-2 d-inline">
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="h-100 mx-2 bg-light rounded d-inline">
                    {priceOptions.map((data)=>{
                      if(data!=="_id"){
                      return <option key={data} value={data}>{data}</option>
                      }
                    })}
                </select>
                <div className="fs-5 h-100 mx-2 d-inline">Total Price</div>
                </div>
            </div>
        </div>
    </div>
  )
}
