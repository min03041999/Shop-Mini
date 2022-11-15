import { BiCategory, BiUserPlus, BiCart } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const navData = [
  {
    id: 0,
    icon: <BiCategory size={30} />,
    text: "Categories",
    link: "/admin/",
  },
  {
    id: 1,
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    text: "Products",
    link: "/admin/products",
  },
  {
    id: 2,
    icon: <BiCart size={30} />,
    text: "Order",
    link: "/admin/order",
  },
  {
    id: 3,
    icon: <BiUserPlus size={30} />,
    text: "Users",
    link: "/admin/users",
  },
];
