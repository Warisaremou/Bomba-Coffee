import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import contactSvg from "../assets/svg/undraw_coffee_re_x35h.svg";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="mx-1 mt-10 md:mt-12 lg:mx-12" id="contact">
      <h1 className="section-title">Contactez-Nous</h1>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <Image src={contactSvg} alt="contact-us" className="w-full h-full mx-auto lg:w-3/4 lg:h-auto" />
        </div>
        <div>
          <h3 className="font-medium md:text-lg text-brown-400">
            N&apos;hésitez pas à nous contacter à tout moment. Nous vous répondrons dès que possible
          </h3>
          <div className="flex flex-col mt-3 gap-y-2">
            <div className="flex gap-x-2">
              <MapPinIcon className="w-6 h-6 stroke-brown-500" />
              <p className="contact-info">14 Greenroad St</p>
            </div>
            <div className="flex gap-x-2">
              <EnvelopeIcon className="w-6 h-6 stroke-brown-500" />
              <Link href="mailto:boomba-coffee@gmail.com" className="underline contact-info">
                boomba-coffee@gmail.com
              </Link>
            </div>
            <div className="flex gap-x-2">
              <PhoneArrowDownLeftIcon className="w-6 h-6 stroke-brown-500" />
              <p className="contact-info">+229 12345678</p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <ClockIcon className="w-6 h-6 stroke-brown-500" />
                <h3 className="font-medium contact-info">Nos heures d&apos;ouvertures</h3>
              </div>
              <div className="lg:flex gap-x-4 contact-info">
                <p>Lundi au Vendredi : 07H00 - 19H30</p>
                <p>Samedi au Dimanche : 09H00 - 18H00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
