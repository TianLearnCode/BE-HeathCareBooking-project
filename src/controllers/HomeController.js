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

    async getCRUD(req, res){
        return res.render('crud.handlebars');
    }
    async postCRUD(req, res){
        const message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.send('post crud from server');
        
    }
    async displayGetCRUD(req, res){
        const userInfo = await CRUDService.getAllUser();
        console.log('----------------------')
        console.log(userInfo);
        console.log('----------------------')
        return res.render('displayCRUD.handlebars', {
            dataTable: userInfo
        });
    }

    async editCRUD(req, res){
        
        const userId = req.query.id;
        if(userId){
            const userData = await CRUDService.getUserDataById(userId);
            
            return res.render('editCRUD.handlebars',{
                userData: userData
            });

        }  else{
            return res.send('User not found!');
        }
        // return res.render('editCRUD.handlebars');
    }

    async postEdit(req, res){
        const data = req.body;
        const allUsers = await CRUDService.updateUserData(data);
        return res.redirect('/get-crud');
    }

    async deleteCRUD(req, res){
        const id = req.query.id;

        if(id){
            await CRUDService.deleteUser(id);
        
            return res.redirect('/get-crud');
        }else{
            return res.send('User not found!');
        }
        
    }
        

}


// module.exports = new HomeController;
export default new HomeController