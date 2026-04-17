import express from 'express'
import homeController from '../controllers/HomeController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.index);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    return app.use('/', router);
}
export default initWebRoutes;