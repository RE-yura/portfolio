import { observable, action, makeObservable } from "mobx";

class NavStore {
  //   @observable
  menuIsOpen: boolean = false;

  //   @observable
  windowType: string = "pc";

  viewers: number = 0;
  adBlock: boolean = false;
  frontViewType: number = 0;

  constructor() {
    makeObservable(this, {
      menuIsOpen: observable,
      windowType: observable,
      viewers: observable,
      adBlock: observable,
      frontViewType: observable,
      setFrontViewType: action,
      setNetworkError: action,
      setViewers: action,
      toggleMenu: action,
      updateWindowType: action,
    });
  }

  setFrontViewType = (type: number) => {
    this.frontViewType = type;
  };
  setViewers = (num: number) => {
    this.viewers = num;
  };
  setNetworkError = (block: boolean) => {
    this.adBlock = block;
  };
  //   @action
  toggleMenu = () => (this.menuIsOpen = !this.menuIsOpen);
  //   @action
  updateWindowType = (width: number) => {
    if (width >= 640) {
      this.windowType = "pc";
    } else {
      this.windowType = "sp";
    }
  };
}

// export const navStore = new NavStore();
// export type NavStoreType = typeof navStore;

export default NavStore;
