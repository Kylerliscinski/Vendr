import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";




export class SnacksController {
  constructor() {
    console.log("It's time for snacks!");
    this.drawSnacks()
    AppState.on('money', this.drawMoney)
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snackContent = ''
    snacks.forEach(snack => snackContent += snack.snackCard)
    setHTML('snack-card', snackContent)
  }

  addQuarter() {
    snacksService.addQuarter()
  }

  buySnack(name) {
    snacksService.buySnack(name)
  }

  drawMoney() {
    const money = AppState.money
    setText('money', `$${money.toFixed(2)}`)
  }
}