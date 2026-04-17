import express from 'express'
import homeController from '../controllers/HomeController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.index);
    return app.get('/', router);
}
export default initWebRoutes;