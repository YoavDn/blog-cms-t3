import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
const Futura = localFont({ src: "../../../fonts/unicode.futurabb.ttf" });
const inter = Inter({ subsets: ["latin"] });

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger
      className={` rounded-md  bg-white p-2 px-4 text-xl text-black transition-all duration-300 hover:shadow-lg hover:shadow-brand-light ${inter.className}`}
    >
      Join waitlist
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <Dialog.Content className="fixed   left-1/2 top-1/2 min-w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 px-4  text-xl shadow-lg ">
        <Dialog.Title className={`${Futura.className} pb-3 text-center`}>
          Join our pre-launch
        </Dialog.Title>
        <Dialog.Description>
          <form action="" className="flex flex-col gap-4">
            <input type="email" placeholder="EMAIL" className="p-2" />
            <button
              className={`${Futura.className} rounded-md bg-black  p-2 text-white`}
            >
              Submit
            </button>
          </form>
        </Dialog.Description>

        <Dialog.DialogClose className="absolute right-2 top-2">
          <button className="hover:text-gray-300" aria-label="Close">
            X
          </button>
        </Dialog.DialogClose>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
