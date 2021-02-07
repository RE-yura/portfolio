import { observable, action, makeObservable } from "mobx";

class NavStore {
  //   @observable
  menuIsOpen: boolean = false;

  //   @observable
  windowType: string = "pc";

  viewers: number = 0;
  adBlock: boolean = false;

  constructor() {
    makeObservable(this, {
      menuIsOpen: observable,
      windowType: observable,
      viewers: observable,
      adBlock: observable,
      setAdBlock: action,
      setViewers: action,
      toggleMenu: action,
      updateWindowType: action,
    });
  }

  setViewers = (num: number) => {
    this.viewers = num;
  };
  setAdBlock = (block: boolean) => {
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
