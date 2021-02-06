import { observable, action, makeObservable } from "mobx";

class NavStore {
  //   @observable
  menuIsOpen: boolean = false;

  //   @observable
  windowType: string = "pc";

  viewers: number = 0;

  constructor() {
    makeObservable(this, {
      menuIsOpen: observable,
      windowType: observable,
      viewers: observable,
      setViewers: action,
      toggleMenu: action,
      updateWindowType: action,
    });
  }

  setViewers = (num: number) => {
    this.viewers = num;
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
