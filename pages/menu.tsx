import MenuCard from "@/src/components/MenuCard";
import Layout from "../src/components/Layout";
import { MenuItems } from "@/src/data/MenuItems";
import clsx from "clsx";

export default function menu() {
  return (
    <div className="mt-20">
      <div>
        <h1 className="menu-title">Notre Menu</h1>
        <div className="flex flex-wrap mb-5 gap-3 item-center text-gray-400">
          {MenuItems.map((item) => (
            <p
              key={item.id}
              className={clsx(item.name === "Café Chaud" && "font-medium text-brown-500 underline")}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {MenuItems.map((item) => (
          <MenuCard
            key={item.id}
            menuPhoto={item.image}
            menuName={item.name}
            menuRate={item.rate}
            menuPrice={item.price}
          />
        ))}
      </div>
    </div>
  );
}

menu.Layout = Layout;
