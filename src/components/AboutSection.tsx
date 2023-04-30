import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import aboutImg from "../assets/images/hero-bg-3.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mx-1 mt-28 md:mt-0 lg:mx-12" id="about">
      <h1 className="section-title">Qui sommes-nous ?</h1>
      <div className="grid items-center gap-8 md:grid-cols-2 md:flex-row" ref={ref}>
        <div
          className={`${
            isInView
              ? "translate-x-0 opacity-100 w-full overflow-hidden shadow-lg h-52 md:h-72 xl:h-96 rounded-xl"
              : "-translate-x-full opacity-0"
          } transition-transform duration-700 ease-out`}
        >
          <Image src={aboutImg} alt="" className="object-cover w-full h-full" priority />
        </div>
        <div
          className={`${
            isInView ? "translate-x-0 opacity-100 overflow-hidden" : "translate-x-full opacity-0"
          } transition-transform duration-1000 ease-out`}
        >
          <h1 className="text-2xl font-bold text-brown-400 dark:text-white">
            Nous sommes des leaders du café
          </h1>
          <p className="pt-3 text-sm text-justify text-gray-800 pb-7">
            Rerum neque aliquam ipsa facere magni consequuntur natus ducimus voluptates labore
            distinctio illo suscipit mollitia nihil saepe consectetur, ea reprehenderit praesentium.
            Eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-3">
            <div className="text-center">
              <h1 className="text-xl font-extrabold text-brown-300">65+</h1>
              <p className="text-xs font-medium text-gray-800">Clients</p>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-extrabold text-brown-300">44+</h1>
              <p className="text-xs font-medium text-gray-800">Clients Contents</p>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-extrabold text-brown-300">3+</h1>
              <p className="text-xs font-medium text-gray-800">Ans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
