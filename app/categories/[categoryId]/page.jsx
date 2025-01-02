"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/Categories";

const CategoryPage = () => {
  const pathname = usePathname();
  const categoryId = pathname.split("/")[2];

  // Find the category
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) {
    return (
      <div className="p-8 bg-black text-white min-h-screen">
        Category not found!
      </div>
    );
  }

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-6">{category.name}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <li key={product.id}>
            <div
              className="card lg:card-side"
              style={{ backgroundColor: "#2C2C2C" }}
            >
              <figure>
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">{product.name}</h2>
                {/* <p>Click below to view details.</p>
                <div className="card-actions justify-end">
                  <Link href={`/categories/${categoryId}/${product.id}`}>
                    <button className="btn btn-[#171717] hover:text-black hover:bg-white">View Details</button>
                  </Link>
                </div> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
