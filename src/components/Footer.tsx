import { integral } from '@/app/layout'
import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import applepay from '../../public/icons/payment/applepay.svg'
import googlepay from '../../public/icons/payment/googlepay.svg'
import mastercard from '../../public/icons/payment/mastercard.svg'
import paypal from '../../public/icons/payment/paypal.svg'
import visa from '../../public/icons/payment/visa.svg'

export function Footer() {
  return (
    <footer>
      <div className="custom-gradient flex justify-center">
        <div className="mx-4 items-center justify-between rounded-[20px] bg-black p-7 lg:m-0 lg:flex lg:w-[1240px]">
          <p
            className={`${integral.className} mb-9 text-left text-3xl text-white lg:mb-0 lg:w-5/12 lg:text-4xl`}
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col items-stretch gap-4 text-black/40 lg:w-4/12 lg:text-lg">
            <div className="flex h-[42px] items-center gap-3 rounded-[62px] bg-white p-4 lg:h-[45px]">
              <Mail />
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full outline-none"
              />
            </div>
            <button className="h-[42px] rounded-[62px] bg-white font-medium text-black lg:h-[50px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-anti-flash-white">
        <div className="mx-4 w-full pt-10 text-black lg:w-fit">
          <div className="w-full justify-between lg:flex lg:w-[1240px] lg:gap-20">
            <div className="flex flex-col gap-3 lg:w-[340px] lg:gap-6">
              <h2 className={`${integral.className} text-3xl text-black`}>
                SHOP.CO
              </h2>
              <p className="text-black/60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <ul className="flex gap-3 pb-4">
                <li className="rounded-full border border-black/20 bg-white p-2">
                  <a href="">
                    <Twitter size={20} />
                  </a>
                </li>
                <li className="rounded-full border border-black/20 bg-white p-2">
                  <a href="">
                    <Facebook size={20} />
                  </a>
                </li>
                <li className="rounded-full border border-black/20 bg-white p-2">
                  <a href="">
                    <Instagram size={20} />
                  </a>
                </li>
                <li className="rounded-full border border-black/20 bg-white p-2">
                  <a href="">
                    <Github size={20} />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="grid grid-cols-2 gap-y-6 pb-6 lg:flex lg:w-4/5 lg:justify-between lg:pb-12">
              <li>
                <h3 className="mb-3 font-medium text-black lg:mb-5">COMPANY</h3>
                <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                  <a href="">About</a>
                  <a href="">Features</a>
                  <a href="">Works</a>
                  <a href="">Career</a>
                </div>
              </li>
              <li>
                <h3 className="mb-3 font-medium text-black lg:mb-5">HELP</h3>
                <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                  <a href="">Customer Support</a>
                  <a href="">Delivery Details</a>
                  <a href="">Terms & Conditions</a>
                  <a href="">Privacy Policy</a>
                </div>
              </li>
              <li>
                <h3 className="mb-3 font-medium text-black lg:mb-5">FAQ</h3>
                <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                  <a href="">Account</a>
                  <a href="">Manage Deliveries</a>
                  <a href="">Orders</a>
                  <a href="">Payments</a>
                </div>
              </li>
              <li>
                <h3 className="mb-3 font-medium text-black lg:mb-5">
                  Resources
                </h3>
                <div className="flex flex-col gap-2 text-black/60 lg:gap-4">
                  <a href="">Free eBooks</a>
                  <a href="">Development Tutorial</a>
                  <a href="">How to - Blog</a>
                  <a href="">Youtube Playlist</a>
                </div>
              </li>
            </ul>
          </div>
          <hr className="bg-black/10" />
          <div className="flex flex-col items-center gap-4 py-4 pb-24 lg:flex-row lg:justify-between">
            <p className="text-black/60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex w-fit gap-4">
              <Image
                src={visa}
                alt="Visa"
                className="w-[40px] rounded lg:w-[45px]"
              />
              <Image
                src={mastercard}
                alt="MasterCard"
                className="w-[40px] rounded lg:w-[45px]"
              />
              <Image
                src={paypal}
                alt="PayPal"
                className="w-[40px] rounded lg:w-[45px]"
              />
              <Image
                src={applepay}
                alt="ApplePay"
                className="w-[40px] rounded lg:w-[45px]"
              />
              <Image
                src={googlepay}
                alt="GooglePay"
                className="w-[40px] rounded lg:w-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
