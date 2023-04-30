import { StarIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

type MenuType = {
  menuPhoto: StaticImageData;
  menuName: string;
  menuRate: number;
  menuPrice: number;
};

export default function MenuCard({ menuPhoto, menuName, menuRate, menuPrice }: MenuType) {
  return (
    <div className="bg-white shadow-lg rounded-xl ">
      <div className="menu-image">
        <Image src={menuPhoto} alt={`${menuName}-img`} className="center" priority />
      </div>
      <div className="px-2 py-2 md:px-3">
        <h2 className="font-medium md:text-lg">{menuName}</h2>
        <div className="flex items-center justify-between pt-2 text-sm md:text-base">
          <div className="flex gap-1 text-brown-500">
            <StarIcon className="w-5 h-5 stroke-brown-500" />
            <h2>{menuRate}</h2>
          </div>
          <p className="font-medium text-gray-800">{menuPrice}$</p>
        </div>
      </div>
    </div>
  );
}
