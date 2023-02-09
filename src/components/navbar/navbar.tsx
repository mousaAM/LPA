import { component$, useClientEffect$, useStore, useTask$, useContext } from "@builder.io/qwik";
import data from './navbarElements.json'
import { isBrowser } from "@builder.io/qwik/build"
import { Link } from "@builder.io/qwik-city";
import { englishUsedContext } from "~/context/context";


export default component$(() => {
  const englishUsed = useContext(englishUsedContext)

  const state = useStore({
    navbarElements: data,
    links: data.links,
    visibility: false
  })

  useClientEffect$(() => {
    const english = localStorage.getItem("en") as string
    english === "false" ? englishUsed.value = false : englishUsed.value = true
  })

  useTask$(({ track }) => {
    const english = track(() => englishUsed.value)
    if(isBrowser){
      localStorage.setItem("en", `${english}`)
    }
  })

  return (
    <nav dir={englishUsed.value ? "ltr" : "rtl"}
        class={`w-screen bg-blue-500 overflow-x-auto p-4 flex flex-row justify-between items-start md:items-center fixed top-0 text-white`}>
      <div>
        <button class="block md:hidden  mx-4 px-2 py-1" onClick$={() => state.visibility = !state.visibility}>0</button>
        <ul class={`${state.visibility ? "block" : "hidden"} md:block`}>
          {englishUsed.value 
          ? state.navbarElements.en.map((value, index) =>{
            return <Link 
                key={index}
                class="block text-sm md:inline rounded hover:text-stone-300 mx-4 px-2 py-1"
                href={state.links[index]}>
                {value}
              </Link>
          })
          : state.navbarElements.ar.map((value, index) => {
            return <Link 
                key={index}
                class="block text-sm md:inline rounded hover:text-stone-300 mx-4 px-2 py-1"
                href={state.links[index]}>
                {value}
              </Link>
          })}
        </ul>
      </div>
      <button class="inline text-sm rounded hover:bg-blue-600 mx-4 px-2 py-1" onClick$={() => englishUsed.value = !englishUsed.value}>{englishUsed.value ? "العربية" : "en"}</button>
    </nav>
  )
})