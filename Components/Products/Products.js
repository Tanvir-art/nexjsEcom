
const Products = ({title, price, priceOne, totalRating, discount}) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="image/product.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[16px]">{title}</h2>
    <div className="flex justify-center ">
        {

    <p className="ml-4"> ${price}</p>
        }
    <p>${priceOne}</p>
    </div>
    {{totalRating} && <div>
    <h2>{totalRating}</h2>

    </div>}

    <h2 className="absolute bottom-52 bg-[#F95706] px-4 py-3 rounded-full text-white">{discount}</h2>
   

  </div>
</div>
    </div>
  )
}

export default Products