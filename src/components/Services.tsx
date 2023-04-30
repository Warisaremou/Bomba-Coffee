import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import TogetherImg from "../assets/images/Together.jpg";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mx-1 mt-10 md:mt-12 lg:mx-12" id="services">
      <h1 className="section-title">Pourquoi Nous ?</h1>
      <div className="grid items-center gap-8 md:grid-cols-2 md:flex-row" ref={ref}>
        <div
          className={`${
            isInView ? "translate-x-0 opacity-100 overflow-hidden" : "translate-x-full opacity-0"
          } transition-transform duration-1000 ease-out`}
        >
          <h1 className="text-xl font-bold text-brown-400 dark:text-white">
            Rien ne rassemble les gens comme un bon café
          </h1>
          <p className="pt-3 text-sm text-justify text-gray-800 pb-7">
            Si vous cherchez à créer une atmosphère chaleureuse et conviviale dans votre restaurant,
            rien ne fonctionne mieux qu'un bon café. Le café est la boisson préférée de nombreuses
            personnes à travers le monde, et son arôme et sa saveur peuvent évoquer des souvenirs
            agréables pour beaucoup de gens.
          </p>
        </div>
        <div
          className={`${
            isInView
              ? "translate-x-0 opacity-100 w-full overflow-hidden shadow-lg h-52 md:h-72 xl:h-96 rounded-xl"
              : "-translate-x-full opacity-0"
          } transition-transform duration-700 ease-out`}
        >
          <Image src={TogetherImg} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}
