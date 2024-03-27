import SingleProduct from "@/components/SingleProduct"


const page = ({params: {productId}}) => {
 
  return (
    <div>
        <SingleProduct productId={productId}/>
    </div>
  )
}

export default page