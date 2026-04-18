import express from 'express'
import homeController from '../controllers/HomeController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.index);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-user', homeController.editCRUD);
    router.post('/post-edit', homeController.postEdit);
    router.get('/delete-user', homeController.deleteCRUD);
    return app.use('/', router);
}
export default initWebRoutes;