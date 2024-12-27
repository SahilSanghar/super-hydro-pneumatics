import AboutUs from "@/layouts/AboutUs";
import Collections from "@/layouts/Collections";
import HomePage from "@/layouts/HomePage";
import Products from "@/layouts/Products";
import Transform from "@/layouts/Transform";
import Values from "@/layouts/Values";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HomePage />
      <AboutUs />
      <Values />
      <Products />
      <Collections />
      <Transform />
    </div>
  );
}
