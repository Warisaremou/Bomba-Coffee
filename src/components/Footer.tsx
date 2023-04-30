import { Facebook, Whatsapp, Messenger, Twitter } from "react-bootstrap-icons";
import { CoffeeLogo } from "../utils";

export default function Footer() {
  return (
    <div className="grid gap-5 px-1 py-5 md:px-4 bg-brown-50 md:grid-cols-3">
      <div className="flex justify-center">
        <h1 className="flex items-center gap-2 text-sm font-semibold cursor-pointer md:text-base text-brown-500">
          <div className="logo">
            <CoffeeLogo />
          </div>
          Boomba-Coffee
        </h1>
      </div>
      <div className="flex justify-center text-sm gap-x-2 md:gap-x-6 md:text-base">
        <p>Supportez-Nous</p>
        <p>Menu</p>
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <Facebook className="footer-social-icon" />
        <Messenger className="footer-social-icon" />
        <Whatsapp className="footer-social-icon" />
        <Twitter className="footer-social-icon" />
      </div>
    </div>
  );
}
