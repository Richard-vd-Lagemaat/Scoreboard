import { observable, action, decorate, $mobx } from "mobx";

export default class MyStore {
  storeArray = observable(["Test"]);

  setStoreArray(value) {
    this.storeArray = value;
  }
}

decorate(MyStore, {
  storeArray: observable,

  setStoreArray: action,
});
