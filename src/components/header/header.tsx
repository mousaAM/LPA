import { component$, useContext } from "@builder.io/qwik"
import { englishUsedContext } from "~/context/context"
import data from "./headerData.json"

export default component$(() => { 
  const englishUsed = useContext(englishUsedContext)
  return (
    <>
      <div class="min-h-screen bg-emerald-50 text-white flex flex-col justify-center items-center text-center">
        <h1 class="text-sky-500 text-3xl md:text-4xl">{englishUsed.value ? data.en.header : data.ar.header}</h1>
        <p class="mt-2 text-2xl text-sky-600">{englishUsed.value ? data.en.paragraph : data.ar.paragraph}</p>
      </div>
    </>
  )
})