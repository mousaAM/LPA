import { component$, useContext } from "@builder.io/qwik";
import { englishUsedContext } from "~/context/context";
import data from "./goalData.json";

export default component$(() => {
  const englishUsed = useContext(englishUsedContext);

  return (
    <section class="bg-emerald-50 text-center p-8">
      <h2 class="text-sky-500 text-4xl">
        {englishUsed.value ? data.en.h2 : data.ar.h2}
      </h2>
      <p class="text-sky-600 text-xl mt-8">
        {englishUsed.value ? data.en.content : data.ar.content}
      </p>
    </section>
  );
});
