import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";



export const router = new Router([
  {
    controllers: [SnacksController],
    path: '',
    view: 'app/views/SnackView.html'
  }
])