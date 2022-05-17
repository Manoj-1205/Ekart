import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./kart.css";
const Kart = () => {
  const [item1, setitem1] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [purchased, setPurchase] = useState(false);

  const chainprice = 250;
  const braceletprice = 450;
  const glassprice = 100;

  const Addcash = () => {
    var amount = prompt("Enter Amount need to be added");

    setWallet(wallet + parseInt(amount));
  };
  const Placeorder = () => {
    var netprice =
      counter1 * chainprice + counter2 * braceletprice + counter3 * glassprice;

    if (netprice <= wallet) {
      setWallet(wallet - netprice);
      setPurchase(true);
    } else {
      alert("Please add amount to wallet to order.");
      setPurchase(false);
    }
    alert("Amount deducted : " + JSON.stringify(netprice));
  };
  return (
    <div>
      <p className="wallet">Wallet balance : {wallet} </p>
      <table class="producttable">
        <th>
          <h1>Product</h1>
        </th>
        <th>
          <h1>Description</h1>
        </th>
        <th>
          <h1>Quantity</h1>
        </th>
        <tr>
          <td>
            <img src="../images/chain.webp" width="200" height="200" />
          </td>
          <td>
            <h4>Mens fashion jewellery</h4>
            <p>Price - {chainprice}</p>
          </td>
          <td>
            <span className="spancount">
              <button
                onClick={function () {
                  if (counter1 > 0) {
                    setCounter1(counter1 - 1);
                  }
                }}
              >
                -
              </button>
              <p className="counter">{counter1}</p>
              <button onClick={() => setCounter1(counter1 + 1)}>+</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="front">
            <img src="../images/bracelet.webp" width="200" height="200" />
          </td>
          <td>
            <h4 className="qty">Gold plated Bracelet</h4>
            <p>Price - {braceletprice}</p>
          </td>
          <td>
            <span className="spancount">
              <button
                onClick={function () {
                  if (counter2 > 0) {
                    setCounter2(counter2 - 1);
                  }
                }}
              >
                -
              </button>
              <p className="counter">{counter2}</p>
              <button onClick={() => setCounter2(counter2 + 1)}>+</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="front">
            <img src="../images/glass.jpg" width="200" height="200" />
          </td>
          <td>
            <h4 className="qty">UV Protection sunglasses</h4>
            <p>Price - {glassprice}</p>
          </td>
          <td>
            <span className="spancount">
              <button
                onClick={function () {
                  if (counter3 > 0) {
                    setCounter3(counter3 - 1);
                  }
                }}
              >
                -
              </button>
              <p className="counter">{counter3}</p>
              <button onClick={() => setCounter3(counter3 + 1)}>+</button>
            </span>
          </td>
        </tr>
      </table>
      <div className="placeorder">
        <button onClick={Addcash}>Add Cash</button>
        &nbsp;&nbsp;
        <button onClick={Placeorder}>Place Order</button>
        <br />
        <br />
        {purchased ? (
          <div>
            <h1>Thank you for shopping..</h1>
            <p>Your order is</p>
            <p>
              Chain : {counter1} * {chainprice} = {counter1 * chainprice}
            </p>
          </div>
        ) : (
          <h3 className="text-danger"></h3>
        )}
      </div>
    </div>
  );
};

export default Kart;
