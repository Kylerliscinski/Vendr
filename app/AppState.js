import { Snack } from "./models/Snacks.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0

  snacks = [
    new Snack({
      name: "Reeses",
      price: 3.25,
      imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_77f5ca49-3ca3-4af6-bc64-852a680db777?wid=488&hei=488&fmt=pjpeg'
    }),
    new Snack({
      name: "Snickers",
      price: 3.00,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0004000042431'
    }),
    new Snack({
      name: "m&ms",
      price: 2.50,
      imgUrl: 'https://i5.walmartimages.com/seo/M-M-s-Peanut-Milk-Chocolate-Candy-Full-Size-1-74-oz-Pouch_15355648-0ae9-42c6-8a38-12a380348189.107a0f9cbb9736c0a91420bae440d9df.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
    }),
    new Snack({
      name: "Skittles",
      price: 2.00,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0004000000160'
    }),
    new Snack({
      name: "Sour Patch Kids",
      price: 2.25,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0007046203596'
    }),
    new Snack({
      name: "Starbursts",
      price: 1.00,
      imgUrl: 'https://i5.walmartimages.com/seo/Starburst-Original-Fruit-Chews-Candy-14-Ounce_1aee9ae2-1a17-480b-acc0-f09f738bee35_2.4fb507e600787d387bcf67eebedaf556.jpeg'
    }),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())