import { toast } from "react-toastify";
import { CiShoppingCart } from "react-icons/ci";

const AddCard = ({ setNewProducts, newProducts, setCount }) => {
  let totalPrice = newProducts.reduce((sum, product) => sum + product.price, 0);

  const handelDelete = (id) => {
    const filtering = newProducts.filter((product) => product.id !== id);
    const productToDelete = newProducts.find((item) => item.id === id);
    totalPrice = totalPrice - productToDelete.price;
    setNewProducts(filtering);
    setCount((count) => count - 1);
    toast.success("Product tools is deleted");
  };

  const handelCheckout = () => {
    setNewProducts([])
    setCount(0)
    toast.success("All product tools is deleted");
  }

  const emptyData = (
    <div className=" min-h-40 flex items-center justify-center flex-col text-gray-400">
      <CiShoppingCart className="text-[70px]" />
      <h1 className="text-2xl">Your Card is Empty</h1>
    </div>
  );

  return (
    <div className="border-2 border-gray-200 rounded-lg p-3 sm:p-5 w-full mt-8 max-md:mx-3">
      <h1 className="text-2xl font-medium text-gray-400 mb-3">Your Cart</h1>
      {newProducts.length > 0
        ? newProducts.map((product) => (
            <div key={product.id} className="">
              <div className="flex bg-blue-50 justify-between items-center p-3 rounded-lg my-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full border p-2 border-gray-400">
                    <img className=" w-5 " src={product.image} alt="image" />
                  </div>
                  <div>
                    <h1 className="text-xl font-medium">{product.name}</h1>
                    <p className="text-gray-400">${product.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-400 btn"
                  onClick={() => handelDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : emptyData}
      <div className={`${newProducts.length > 0 ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">Total</p>
          <p className="text-lg font-medium">${totalPrice}</p>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-full mt-4 font-medium cursor-pointer" onClick={handelCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default AddCard;

