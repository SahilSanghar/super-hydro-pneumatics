"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { collectionsData } from "@/data/Collection";

const Collections = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen">
      <p className="text-5xl text-center py-8">Our Collections</p>
      <Carousel
        opts={{
          align: "start",
          loop: true, // Enable infinite loop
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {collectionsData.map((collection, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                {/* Removed Card borders */}
                <div
                  className="cursor-pointer flex flex-col items-center"
                  onClick={() => handleNavigation(collection.redirectPath)}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={400} // Consistent Image Size
                    height={400}
                    className="h-[70vh] object-cover rounded-lg" // Rounded corners for better aesthetics
                  />
                  <p className="mt-4 text-3xl font-medium text-center">
                    {collection.title}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Collections;
