import db from '../models/index'
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
}


// module.exports = new HomeController;
export default new HomeController