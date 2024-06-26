import { AppState } from "../AppState.js"


export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = parseFloat(data.price)
    this.imgUrl = data.imgUrl
  }

  get snackCard() {
    return `
    <div class="cardStyle col-12 col-md-3 p-1">
      <div class="card bg-white shadow p-4 rounded">
        <img img-fluid class="card-top"
          src="${this.imgUrl}"
          alt="">
        <div class="card-footer justify-content-between">
          <h5>${this.name}</h5>
          <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success">Buy $${this.price.toFixed(2)}</button>
        </div>
      </div>
    </div>
    `
  }
}