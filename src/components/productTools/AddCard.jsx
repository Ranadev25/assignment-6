const AddCard = ({ setNewProducts, newProducts,setCount}) => {
  
  const emptyData = <div className=" min-h-40 flex items-center justify-center">
    <h1>not card added yet</h1>
  </div>

  const handelDelete = (id) => {
    const filtering = newProducts.filter(product => product.id !== id)
    setNewProducts(filtering)
    setCount(count=>count - 1)
  }

  return (
    <div className="border-2 border-gray-200 rounded-lg p-3 sm:p-5 w-full mt-8 max-md:mx-3">
      <h1 className="text-2xl font-medium text-gray-400 mb-3">Your Cart</h1>
      {newProducts.length > 0 ? 
        newProducts.map((product) => (
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
              <button className="text-red-400 btn" onClick={()=>handelDelete(product.id)}>Delete</button>
            </div>
          </div>
        )) : emptyData }
    </div>
  );
};

export default AddCard;
