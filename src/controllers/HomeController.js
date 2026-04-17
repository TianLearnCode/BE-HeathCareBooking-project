import db from '../models/index'
import CRUDService from '../services/crudService';
class HomeController{
    async index(req, res){
        try{
            const  data = await db.User.findAll();
            console.log('----------------------')
            console.log(data)
            console.log('----------------------')

            res.render('homepage.handlebars', {
                data: JSON.stringify(data)
            });
        }catch(e){
            console.log(e)
        }
    }

    getCRUD(req, res){
        return res.render('./test/crud.handlebars');
    }
    async postCRUD(req, res){
        const message = await CRUDService.createNewUser(req.body);
        console.log(message);
        
    }
}


// module.exports = new HomeController;
export default new HomeController