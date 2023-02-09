import { createContext } from "@builder.io/qwik";

export interface IenglishUsed {
  value: boolean;
}


export const englishUsedContext = createContext<IenglishUsed>("English")