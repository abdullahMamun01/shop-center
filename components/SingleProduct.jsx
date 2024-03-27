
import productData from '@/data/products'
import { calculateCurrentPrice } from '@/utils/calculateCurrentPrice'
import Image from 'next/image'

const SingleProduct = ({productId}) => {
    const singleProduct = productData.products.find(pd => pd.id == productId)
    const currentPrice = calculateCurrentPrice(singleProduct.price,singleProduct.discountPercentage)
  
  return (
    <main className="min-h-screen ">
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <img  src={singleProduct.thumbnail} className="w-[400px] h-[500px] mx-auto object-cover" alt="" />

          <div className="flex gap-4 mt-4">
            {singleProduct.images.map((img,i) =>  (
                 <img key={i}  src={img} className="w-[100px] h-[100px] mx-auto border object-cover" alt="" />
            ))}
           
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold"> {singleProduct.title}</h1>
          <span className="text-[#919090] my-3">{singleProduct.category}</span>
          <div className="mt-3 flex items-center justify-start gap-1">
            <Image  src="" width={20} alt="" />
       
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">${singleProduct.price}</span>
              <span className="font-bold text-2xl"> ${currentPrice}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">
              {singleProduct.description}
            </p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${currentPrice}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default SingleProduct