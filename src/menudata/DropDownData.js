import {
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

export const dropDownData = [
  {
    icon: <AiOutlineSetting />,
    display: "Setting",
    link: "/admin/setting",
  },
  {
    icon: <AiOutlineUser />,
    display: "Profie",
    link: "/admin/profie",
  },
  {
    icon: <AiOutlineMail />,
    display: "My Messages",
    link: "/admin/mess",
  },
  {
    icon: <AiOutlineLogout />,
    display: "Logout",
    link: "/admin/",
  },
];
