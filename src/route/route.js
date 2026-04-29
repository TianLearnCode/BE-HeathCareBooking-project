import express from 'express'
import homeController from '../controllers/HomeController';
import userController from '../controllers/UserController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.index);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-user', homeController.editCRUD);
    router.post('/post-edit', homeController.postEdit);
    router.get('/delete-user', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcodes', userController.getAllCodes)
    return app.use('/', router);
}
export default initWebRoutes;