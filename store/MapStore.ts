import { observable, action, makeObservable } from "mobx";

class MapStore {
  points: [] = [];

  constructor() {
    makeObservable(this, {
      points: observable,
      setPoints: action,
    });
  }

  setPoints = (points) => {
    this.points = points;
  };
}

export default MapStore;
