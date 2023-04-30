import { SearchIcon } from "../assets/icons";

export default function HeroSection() {

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <h1 className="max-w-2xl text-[29px] font-extrabold md:text-5xl lg:text-6xl">
        Savourez l&apos;excellence du café chez nous
      </h1>
      <p className="max-w-lg my-5 text-sm md:text-base md:my-7">
        Entrez dans notre univers chaleureux et dégustez nos délicieux cafés dans notre bar de café
        convivial
      </p>
      <div className="hero-info">
        <div className="hero-item">
          <button className="px-4 py-2 border rounded-md border-brown-500 hover:bg-brown-500 hover:text-white">
            Commander
          </button>
        </div>
        <div className="flex items-center justify-around cursor-pointer hero-item">
          <div className="p-3 text-white rounded-full bg-brown-600">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
