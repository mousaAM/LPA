import { component$, useContext } from "@builder.io/qwik"
import { englishUsedContext } from "~/context/context"
import data from "./headerData.json"

export default component$(() => { 
  const englishUsed = useContext(englishUsedContext)
  return (
    <>
      <div class="min-h-screen bg-emerald-50 text-white relative flex flex-col justify-center items-center text-center overflow-x-hidden">
        <h1 class="text-sky-500 text-3xl md:text-4xl">{englishUsed.value ? data.en.header : data.ar.header}</h1>
        <p class="mt-2 text-2xl text-sky-600">{englishUsed.value ? data.en.paragraph : data.ar.paragraph}</p>

        <span class="absolute top-40 -left-5 w-16 h-16 rotate-45 border border-slate-900"></span>
        <span class="absolute bottom-40 -right-5 w-16 h-16 rotate-45 border border-slate-900"></span>
      </div>
    </>
  )
})