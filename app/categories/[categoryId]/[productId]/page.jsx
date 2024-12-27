"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/Categories";

const ProductPage = () => {
  const pathname = usePathname(); // Get the current path
  const [categoryId, setCategoryId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Extract categoryId and productId from pathname
    const parts = pathname.split("/");
    const categoryIdFromPath = parts[2]; // [categoryId] will be at index 2
    const productIdFromPath = parts[3]; // [productId] will be at index 3

    if (categoryIdFromPath && productIdFromPath) {
      setCategoryId(categoryIdFromPath);
      setProductId(productIdFromPath);
      setIsReady(true);
    }
  }, [pathname]);

  if (!isReady) {
    return <div className="p-8 bg-black text-white min-h-screen">Loading...</div>;
  }

  if (!categoryId || !productId) {
    return (
      <div className="p-8 bg-black text-white min-h-screen">
        Invalid category or product ID!
      </div>
    );
  }

  // Find the category
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="p-8 bg-black text-white min-h-screen">
        Category not found!
      </div>
    );
  }

  // Find the product
  const product = category.products.find((prod) => prod.id === productId);

  if (!product) {
    return (
      <div className="p-8 bg-black text-white min-h-screen">
        Product not found!
      </div>
    );
  }

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-6">{product.name}</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="h-64 w-64 object-cover rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div>
          <p className="text-lg mb-4">{product.description || "No description available."}</p>
          <div className="flex items-center gap-4">
            <Link href={`/categories/${categoryId}`}>
              <button className="px-4 py-2 bg-[#171717] hover:bg-white hover:text-black rounded-lg">
                Back to {category.name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
