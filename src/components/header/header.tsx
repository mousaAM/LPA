import { component$ } from "@builder.io/qwik"
import data from "./headerData.json"

export default component$(() => { 
  return (
    <>
      <div class="min-h-screen bg-blue-500 text-white flex flex-col justify-center items-center">
        <h1 class="text-3xl md:text-4xl">{data.ar.header}</h1>
        <p class="mt-2 text-2xl text-slate-200">{data.ar.paragraph}</p>
      </div>
    </>
  )
})