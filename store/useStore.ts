import { useContext } from "react";
import { useObserver } from "mobx-react";

export type Selector<TStore, TSelection> = (store: TStore) => TSelection;

// useContext と useObserver を組み合わせた、任意の store 型に対応したカスタムフック。
// この hook を介して store slice を取得すれば、コンポーネントが store の mutable な変更を検知できる。
export default function useStore<TStore, TSelection>(
  context: React.Context<TStore>,
  selector: Selector<TStore, TSelection>
) {
  const store = useContext(context);
  if (!store) {
    throw new Error("need to pass a value to the context");
  }

  return useObserver(() => selector(store));
}
