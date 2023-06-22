import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "400px" }}>
          <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                Some Item className </p>
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
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
                <div className="fs-5 h-100 mx-2 d-inline">Total Price</div>
                </div>
            </div>
        </div>
    </div>
  )
}
