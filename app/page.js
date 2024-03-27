import EmailSubscription from "@/components/EmailSubscription";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products";

const page = () => {
  return (
    <>
      <Header />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {productsData?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <EmailSubscription />
    </>
  );
};

export default page;
