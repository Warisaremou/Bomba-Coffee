import { useState } from "react";
import { SearchIcon } from "../assets/icons";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { scale: 4 },
  visible: {
    scale: 1,
    transition: { duration: 0.75 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function CoffeeLogo() {
  return (
    <motion.svg
      width="19"
      height="25"
      viewBox="0 0 19 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M3.7682 0.390417H14.5705L15.4015 2.73409V3.51532H17.4788L17.8943 5.07777H0.859877L0.444402 3.51532H2.93725V2.73409L3.7682 0.390417Z"
        fill="white"
        variants={pathVariants}
      />
      <motion.path
        d="M2.52177 18.3586L0.859877 10.5464H17.0634L15.4015 18.3586H2.52177Z"
        fill="white"
        variants={pathVariants}
      />
      <motion.path
        d="M3.51642 -0.000195337L2.17111 2.91768H0.171021V5.54182H0.936324L1.71991 10.2096H0.495921L2.11461 18.782L3.15246 18.7703L4.19613 24.999H14.0769L14.1459 24.5842L15.1198 18.7695L16.1069 18.7812L17.7215 10.2089H16.5523L17.3309 5.54104H18.171V2.9169H16.0463L14.696 -0.000976562L3.51642 -0.000195337ZM4.10141 0.83806H14.1201L14.9719 2.69347H3.24304L4.10141 0.83806ZM1.05515 3.75203H17.2794V4.71138H1.05515V3.75203ZM1.55704 11.0432H16.6662L15.3632 17.936L9.10122 17.8742L2.85997 17.936L1.55704 11.0432Z"
        fill="#713e1a"
        variants={pathVariants}
      />
    </motion.svg>
  );
}
