import React, { Fragment } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
const Futura = localFont({ src: "../../../fonts/unicode.futurabb.ttf" });
const inter = Inter({ subsets: ["latin"] });

const DialogDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={` rounded-md  bg-white p-2 px-4 text-xl text-black transition-all duration-300 hover:shadow-lg hover:shadow-brand-light ${inter.className}`}
      >
        Join waitlist
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition show={open}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Content className="fixed   left-1/2 top-1/2 min-w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 px-12  text-xl shadow-lg ">
              <Dialog.Title
                className={`${Futura.className} flex flex-col justify-center pb-3 text-center`}
              >
                <Image
                  src="/logo.svg"
                  className="m-auto h-24 w-24"
                  alt="logo"
                  width={50}
                  height={50}
                />
                Join our pre-launch
              </Dialog.Title>
              <Dialog.Description>
                <form action="" className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="rounded-lg p-2"
                  />
                  <button
                    className={`${Futura.className} rounded-lg bg-black  p-2 text-white`}
                  >
                    Submit
                  </button>
                </form>
              </Dialog.Description>

              <Dialog.DialogClose className="absolute right-2 top-2">
                <button className="hover:text-gray-300" aria-label="Close">
                  <Cross1Icon />
                </button>
              </Dialog.DialogClose>
            </Dialog.Content>
          </Transition.Child>
        </Transition>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
