import { createContext } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export const englishUsedContext = createContext<Signal<boolean>>("English")