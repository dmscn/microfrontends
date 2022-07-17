import createController from "../controllers/products.js";

const BASE_URL = '/api/v1/products' 

export default function(app) {
  const controller = createController()

  app.route(BASE_URL)
    .get(controller.list)
    .post(controller.add)

  app.route(`${BASE_URL}/:id`)
    .get(controller.getSingle)
    .delete(controller.remove)
    .put(controller.update)
} 