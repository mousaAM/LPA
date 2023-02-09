import { Slot, component$, useStore, useContextProvider } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import type { IenglishUsed } from "~/context/context";
import { englishUsedContext } from "~/context/context";


export default component$(() => {
  const englishUsed = useStore<IenglishUsed>({
    value: false
  })

  useContextProvider(englishUsedContext, englishUsed)

  return (
    <>
      <Navbar />
      <Slot />
    </>
  )
})