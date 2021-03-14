import { createContext } from "react";
import useStore, { Selector } from "./useStore";
import MapStore from "./MapStore";

const context = createContext<MapStore | null>(null);

export const MapProvider = context.Provider;

export default function useNavStore<TSelection>(selector: Selector<MapStore, TSelection>) {
  return useStore(context, selector);
}
