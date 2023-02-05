import { Slot, component$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";


export default component$(() => {
  return (
    <>
      <Navbar />
      <Slot />
    </>
  )
})