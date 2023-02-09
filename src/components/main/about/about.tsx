import { component$, useContext } from "@builder.io/qwik";
import { englishUsedContext } from "~/context/context";
import data from "./aboutData.json"


export default component$(() => {
  const englishUsed = useContext(englishUsedContext)

  return (
    <section class="min-h-screen bg-blue-500 text-center p-8">
      <h2 class="text-white text-4xl">{englishUsed.value ? data.en.h2 : data.ar.h2}</h2>
      <p>{englishUsed.value ? '' : data.ar.content}</p>
    </section>
  )
})