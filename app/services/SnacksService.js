import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";
import { setHTML } from "../utils/Writer.js";



class SnacksService {
  addQuarter() {
    AppState.money += .25
  }

  buySnack(name) {
    let snackToBuy = AppState.snacks.find(snack => snack.name == name)
    if (AppState.money >= snackToBuy.price) {
      AppState.money -= snackToBuy.price
    } else {
      window.alert("You don't have enough money!")
    }

  }
}

export const snacksService = new SnacksService()