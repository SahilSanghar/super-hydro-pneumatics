"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/Categories';

const CategoryPage = () => {
  const pathname = usePathname(); // Get the current path
  const categoryId = pathname.split('/')[2]; // Extract the categoryId from the path

  // Find the category
  const category = categories.find((cat) => cat.id === categoryId);

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      {category ? (
        <>
          <h1 className="text-3xl mb-6">{category.name}</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <li key={product.id}>
                <div className="card lg:card-side" style={{ backgroundColor: '#001A6E' }}>
                  <figure>
                    <img
                      src={product.image || "https://via.placeholder.com/150"}
                      alt={product.name}
                    />
                  </figure>
                  <div className="card-body text-white">
                    <h2 className="card-title">{product.name}</h2>
                    <p>Click below to view details.</p>
                    <div className="card-actions justify-end">
                      <Link href={`/categories/${categoryId}/${product.id}`}>
                        <button className="btn btn-primary">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-3xl mb-6">All Categories</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <li key={cat.id}>
                <div className="card lg:card-side" style={{ backgroundColor: '#2c2c2c' }}>
                  {/* <figure>
                    <img
                      src={cat.image || "https://via.placeholder.com/150"}
                      alt={cat.name}
                      className='h-64 w-[420px] object-cover -ms-14'
                    />
                  </figure> */}
                  <div className="card-body text-white">
                    <h2 className="card-title">{cat.name}</h2>
                    <p>Explore the amazing products in this category.</p>
                    <div className="card-actions justify-start">
                      <Link href={`/categories/${cat.id}`}>
                        <button className="btn bg-[#171717] hover:bg-white hover:text-black">View Products</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
