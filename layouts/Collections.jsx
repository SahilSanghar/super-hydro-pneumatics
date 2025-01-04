"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { collectionsData } from "@/data/Collection";

const Collections = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3); // Default to 3 items

  const handleNavigation = (path) => {
    router.push(path);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1); // Show 1 item for small screens
      } else {
        setItemsVisible(3); // Default to 3 items for larger screens
      }
    };

    // Add event listener on mount and check the screen size initially
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= collectionsData.length - itemsVisible + 1) {
          // Stop at the end, no looping back
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Automatically move to the next item every 3 seconds

    return () => clearInterval(interval);
  }, [itemsVisible]);

  return (
    <div className="lg:min-h-screen">
      <p className="max-sm:text-3xl md:text-5xl text-center py-8">Our Collections</p>
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsVisible}%)`,
          }}
        >
          {collectionsData.map((collection, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 p-4" // Adjust width for the number of visible items
              style={{ flexBasis: `${100 / itemsVisible}%` }}
            >
              <div
                className="cursor-pointer flex flex-col items-center"
                onClick={() => handleNavigation(collection.redirectPath)}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={400} // Consistent Image Size
                  height={400}
                  className=" lg:h-[70vh] object-cover rounded-lg"
                />
                <p className="mt-4 max-sm:text-xl md:text-3xl font-medium text-center">
                  {collection.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
