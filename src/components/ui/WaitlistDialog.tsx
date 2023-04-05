import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
const Futura = localFont({ src: "../../../fonts/unicode.futurabb.ttf" });
const inter = Inter({ subsets: ["latin"] });

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger className={inter.className}>open</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="min-h-32  min-w-32 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 px-4 shadow ">
        <Dialog.Title className={Futura.className}>
          Join our pre-launch
        </Dialog.Title>
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
