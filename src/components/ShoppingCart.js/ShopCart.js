import React from 'react';

// Link to help us create a shopping cart
// https://javascript.plainenglish.io/build-a-shopping-cart-in-nodejs-and-react-c7b488d46e79

const ShopCart = () => {
    return (

            <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  <table className="table shop-table">
                    <tr>
                      <th className="b-0">Name</th>
                      <th className="b-0">Price</th>
                      <th className="b-0">Quantity</th>
                      <th className="b-0 text-right">Total Price</th>
                    </tr>
                    <tr>
                      <td>item product id name</td>
                      <td>item product id price</td>
                    
                    {/* {carts.map((item, i) => (
                      <tr>
                        <td>{item.productId.name}</td>
                        <td>{item.productId.price}</td>
                        <td> */}
                        <td>
                          <button
                            // onClick={(e) => increaseQty(item.productId._id)}
                            className="btn btn-primary btn-sm">+</button> quantity
                          {/* {item.quantity} */}
                          <button className="btn btn-primary btn-sm">-</button>
                        </td>
                        <td className="text-right">
                          <h5 className="font-medium m-b-30">total</h5>
                          {/* <h5 className="font-medium m-b-30">{item.total}</h5> */}
                        </td>
                      </tr>
                    {/* ))} */}
                    
                    <tr>
                      <td colspan="3" align="right">
                        Subtotal :
                        {/* {payload.subTotal} */}
                      </td>
                      <td colspan="4" align="right">
                        <button
                          className="btn btn-danger"
                          // onClick={(e) => emptyCart()}
                        >
                          Empty cart
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default ShopCart

