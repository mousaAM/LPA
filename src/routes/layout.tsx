import { Slot, component$, useContextProvider, useClientEffect$, useTask$, useSignal } from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build"
import Navbar from "~/components/navbar/navbar";
import { englishUsedContext } from "~/context/context";


export default component$(() => {
  const englishUsed = useSignal(false)

  useClientEffect$(() => {
    const english = localStorage.getItem("en")
    english === "false" ? englishUsed.value = false : englishUsed.value = true
  })

  useTask$(({ track }) => {
    const english = track(() => englishUsed.value)
    if(isBrowser){
      localStorage.setItem("en", `${english}`)
    }
  })

  useContextProvider(englishUsedContext, englishUsed)

  return (
    <>
      <Navbar />
      <Slot />
    </>
  )
})