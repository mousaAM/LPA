import { component$, useClientEffect$, useStore, useTask$ } from "@builder.io/qwik";
import data from './navbarElements.json'
import { isBrowser } from "@builder.io/qwik/build"
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
  const state = useStore({
    english: false,
    navbarElements: data,
    links: data.links,
    visibility: false
  })
  useClientEffect$(() => {
    const english = localStorage.getItem("en") as string
    english === "false" ? state.english = false : state.english = true
  })
  useTask$(({ track }) => {
    const english = track(() => state.english)
    if(isBrowser){
      localStorage.setItem("en", `${english}`)
    }
  })
  return (
    <nav dir={state.english ? "ltr" : "rtl"}
        class={`w-screen bg-blue-500 overflow-x-auto p-4 flex flex-row justify-between items-start md:items-center fixed top-0 text-white`}>
      <div>
        <button class="block md:hidden" onClick$={() => state.visibility = !state.visibility}>0</button>
        <ul class={`${state.visibility ? "block" : "hidden"} md:block`}>
          {state.english 
          ? state.navbarElements.en.map((value, index) =>{
            return <Link 
                key={index}
                class="block md:inline rounded hover:bg-blue-600 mx-4 px-2 py-1"
                href={state.links[index]}>
                {value}
              </Link>
          })
          : state.navbarElements.ar.map((value, index) => {
            return <Link 
                key={index}
                class="block md:inline rounded hover:bg-blue-600 mx-4 px-2 py-1"
                href={state.links[index]}>
                {value}
              </Link>
          })}
        </ul>
      </div>
      <button class="inline rounded hover:bg-blue-600 mx-4 px-2 py-1" onClick$={() => state.english = !state.english}>{state.english ? "ar" : "en"}</button>
    </nav>
  )
})