import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/main/about/about";
import Admins from "~/components/main/admins/admins";
import Goal from "~/components/main/goal/goal";
import Header from "~/components/main/header/header";
import Navbar from "~/components/navbar/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Goal />
      <Admins />
    </>
  );
});

export const head: DocumentHead = {
  title: "Libyan Programmers Association",
  meta: [
    {
      name: "description",
      content: "The official site for libyan programmers association",
    },
  ],
};
