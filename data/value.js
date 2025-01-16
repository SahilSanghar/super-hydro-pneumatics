// data/valuesData.js
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";

export const values = [
  {
    id: 1,
    number: "01",
    title: "Quality Policy",
    description:
      "We are an ISO 9001:2015 certified firm that strictly follows high-quality standards. The quality analysts that we have, check the procured range on various parameters before we supply them to our clients.",
    icon: <HiOutlineBadgeCheck />,
    bgColor: "#171717",
  },
  {
    id: 2,
    number: "02",
    title: "Customer Satisfaction and Values",
    description:
      "The satisfaction of customers is important to us as it is the key to survive in the market and thus we are working hard to attain the same. We are delivering premium grade products",
    icon: <BsHandThumbsUp />,
    bgColor: "#2C2C2C",
  },
  {
    id: 3,
    number: "03",
    title: "Reliable Support",
    description:
      "Our commitment doesn’t end with delivering quality products. We provide reliable after-sales support to ensure our clients have a seamless experience with our offerings.",
    icon: <BiSupport />,
    bgColor: "#171717",
  },
];
