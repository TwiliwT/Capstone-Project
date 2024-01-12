import { useEffect, useState } from "react";

export default function Cart({ userCart, setUserCart }) {
  const [number, setNumber] = useState(0);

  console.log(userCart);

  function handleOnClick(id) {
    let tempArr = userCart;

    //This will remove the object that corresponds with the supplied id.
    tempArr = tempArr.reduce((p, c) => (c.id !== id && p.push(c), p), []);
    setUserCart(tempArr);
  }

  //This is used to refresh the component whenever you remove an item from the cart
  useEffect(() => {}, [number]);

  return (
    <main>
      <div>
        {userCart &&
          userCart.map((product) => {
            return (
              <div>
                <div>
                  <h2>{product.title}</h2>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p>{product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleOnClick(product.id);
                      setNumber(number + 1);
                    }}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div></div>
    </main>
  );
}
