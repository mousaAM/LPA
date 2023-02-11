import {
  component$,
  useStore,
  useContext,
  useClientEffect$,
  useSignal,
} from "@builder.io/qwik";
import data from "./navbarElements.json";
import { Link } from "@builder.io/qwik-city";
import { englishUsedContext } from "~/context/context";
import menuOutline from "~/svg/menu-outline.svg";
import { qwikify$ } from "@builder.io/qwik-react";
import { Menu, MenuItem } from "@mui/material";

export const MUIMenu = qwikify$(Menu);
export const MUIMenuItem = qwikify$(MenuItem);

export default component$(() => {
  const englishUsed = useContext(englishUsedContext);

  const state = useStore({
    navbarElements: data,
    links: data.links,
    visibility: false,
  });

  const anchorEl = useSignal<null | HTMLElement>(null);

  useClientEffect$(() => {
    anchorEl.value = document.getElementById("navbar-btn");
  });

  return (
    <nav
      dir={englishUsed.value ? "ltr" : "rtl"}
      class="w-screen text-white bg-blue-500 shadow-sm overflow-x-auto p-4 flex flex-row justify-between items-start md:items-center fixed top-0 z-10"
    >
      <div>
        <img
          id="navbar-btn"
          class="block md:hidden  mx-4 px-2 py-1"
          onClick$={() => (state.visibility = !state.visibility)}
          src={menuOutline}
          alt="menu"
          width={40}
          height={40}
        />
        <ul class="hidden md:block">
          {englishUsed.value
            ? state.navbarElements.en.map((value, index) => {
                return (
                  <Link
                    key={index}
                    class="block text-md md:inline rounded hover:text-sky-100 mx-4 my-4 md:my-0 px-2 py-1"
                    href={state.links[index]}
                  >
                    {value}
                  </Link>
                );
              })
            : state.navbarElements.ar.map((value, index) => {
                return (
                  <Link
                    key={index}
                    class="block text-md md:inline rounded hover:text-sky-100 mx-4 my-4 md:my-0 px-2 py-1"
                    href={state.links[index]}
                  >
                    {value}
                  </Link>
                );
              })}
        </ul>

        <MUIMenu
          anchorEl={anchorEl.value}
          open={state.visibility}
          onClose$={() => {
            state.visibility = !state.visibility;
          }}
        >
          {englishUsed.value
            ? state.navbarElements.en.map((value, index) => {
                return (
                  <Link
                    key={index}
                    class="block text-md md:inline rounded hover:text-sky-100 mx-4 my-4 md:my-0 px-2 py-1"
                    href={state.links[index]}
                  >
                    <MUIMenuItem>{value}</MUIMenuItem>
                  </Link>
                );
              })
            : state.navbarElements.ar.map((value, index) => {
                return (
                  <Link
                    key={index}
                    class="block text-md md:inline rounded hover:text-sky-100 mx-4 my-4 md:my-0 px-2 py-1"
                    href={state.links[index]}
                  >
                    <MUIMenuItem>{value}</MUIMenuItem>
                  </Link>
                );
              })}
        </MUIMenu>
      </div>
      <button
        class="inline text-sm rounded hover:bg-blue-600 mx-4 px-2 py-1"
        onClick$={() => (englishUsed.value = !englishUsed.value)}
      >
        {englishUsed.value ? "العربية" : "en"}
      </button>
    </nav>
  );
});
