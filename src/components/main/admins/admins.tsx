import { component$, useContext } from "@builder.io/qwik";
import { englishUsedContext } from "~/context/context";


export default component$(() => {
  const englishUsed = useContext(englishUsedContext)

  const admins = [
    ['عبدالغفار نوح', 'Abd alghaffar nouh'],
    ['موسى أبوبكر', 'Mousa Aboubaker'],
    ['جهاد عبدالرزاق', 'Jihad Abdrazak'],
    ['علي سالم', 'Ali salim']
  ]

  return (
    <section class="bg-blue-500 text-center p-8">
      <h2 class="text-white text-4xl">{englishUsed.value ? "Admins" : "المسؤولين"}</h2>
      <div class="flex flex-col md:flex-row flex-wrap">
        {admins.map((value, index) => {
          return <div key={index}
          class="text-blue-50 text-lg basis-full md:basis-1/2 my-8">
            {englishUsed.value ? value[1] : value[0]}
          </div>
        })}
      </div>
    </section>
  )
})