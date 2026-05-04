import { json } from 'body-parser';
import userService from '../services/UserService';
import handleUserLogin from '../services/userService';
import getAllUsers from '../services/userService';
import createNewUser from '../services/userService'
import editUser from '../services/userService'
import deleteUser from '../services/userService'
import getAllCodesService from '../services/userService'

class UserController {
    async handleLogin(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        //Validate email and password:
        //b1 kiểm tra email và password có tồn tại hay không? (kiểm tra xem người dùng đã nhập email và password chưa)
        //b2 kiểm tra email và password có đúng hay không? (kiểm tra xem email và password có đúng với dữ liệu trong database hay không)
        //b3 nếu email và password đúng thì trả về thông tin người dùng, ngược lại trả về lỗi (access token, json web token, session...)JWT
        if(!email || !password){
            return res.status(500).json({
                errcode: 1,
                message: 'Missing inputs parameter!'
            })
        }

        const userData = await userService.handleUserLogin(email, password);
        return res.status(200).json({
            errcode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user :{}
        }) //api trả về dữ liệu dạng json, status 200 là thành công, nếu có lỗi sẽ trả về status 500

        
    }

    async handleGetAllUsers(req, res){
        let id = req.query.id;

        if(!id){ //validate server site
            return res.status(200).json({
                errCode: 1,
                message: 'Missing parameters',
                users: []
            })
        }


        let users = await userService.getAllUsers(id);
        console.log(users)
        return res.status(200).json({
            errCode: 0,
            message: 'Ok',
            users: users
        })
    }

    async handleCreateNewUser(req, res){
        let newUser = await userService.createNewUser(req.body);
        return res.status(200).json(newUser)
    }

    async handleEditUser(req, res){
        let data = req.body
        let message =  await userService.editUser(data)
        return res.status(200).json(message);
    }
    async handleDeleteUser(req, res){
        if(!req.body.id){
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters'
            })
        }
        let userDelete = await userService.deleteUser(req.body.id);
        return res.status(200).json(userDelete);
    }

    async getAllCodes(req, res){
        try{
            let data = await userService.getAllCodesService(req.query.type)
            return res.status(200).json(data)
        }   
        catch(e){
            console.log('Get all code', e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server'
            })
        }
    }

}
export default new UserController();