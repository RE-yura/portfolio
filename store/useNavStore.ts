import { createContext } from "react";
import useStore, { Selector } from "./useStore";
import NavStore from "./NavStore";

const context = createContext<NavStore | null>(null);

export const NavProvider = context.Provider;

export default function useNavStore<TSelection>(selector: Selector<NavStore, TSelection>) {
  return useStore(context, selector);
}
