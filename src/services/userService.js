import e from 'express';
import db from '../models/index';
import bcrypt from 'bcryptjs';
import { where } from 'sequelize';

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject)=>{
        try{
            let userData = {};
            let isExist = await checkUserEmail(email);
            if(isExist){
                //user already exist
                //compare password
                // bcrypt.compareSync("not_bacon", hash); // false
 
                let user = await db.User.findOne({
                    attributes:['email', 'roleId', 'password', 'firstName', 'lastName'],

                    where: {email: email},
                    raw: true

                });
                if(user){
                    //compare password
                    let checkPass = await bcrypt.compareSync(password, user.password); // false
                    if(checkPass){
                        userData.errCode = 0;
                        userData.errMessage = 'Success';
                        console.log(user)
                        delete user.password
                        userData.user = user;
                        
                    }
                    else{
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }

                }else{
                    userData.errCode = 2;
                    userData.errMessage = 'User\'s not found'
                }

            }
            else{
                 userData.errCode = 1;
                 userData.errMessage = 'Your email isn\'t exist in our system. Please try other email!';
            }

            resolve(userData);

        }catch(e){
            reject(e);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async(resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: {email: email}
            })
            if(user){
                resolve(true);
            } else{
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    })
}

let getAllUsers = (userId) =>{
    return new Promise(async(resolve, reject) =>{
        try{
            // const users = await db.User.findAll()
            let users = '';
            if(userId === 'ALL'){
                users = await db.User.findAll({
                    attributes:{
                        exclude: ['password']
                    }
                })
            }else if(userId && userId !== 'ALL'){
                users = await db.User.findOne({
                    where: {id: userId},
                    attributes: {
                        exclude:['password']
                    }
                })
            }
            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}

let hashUserPassword = (password) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let createNewUser = (data) =>{
    return new Promise(async(resolve, reject) =>{

        try{

            //check is existed email
            let check = await checkUserEmail(data.email)
            if(check === true){
                resolve({
                    errCode: 1,
                    errMessage: 'This is email is exist, please use another emai l'
                })
            }
            else{
                let passwordHashed = await hashUserPassword(data.password)
                await db.User.create({
                    email: data.email,
                    password: passwordHashed,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender,
                    roleId: data.roleId,
                    positionId: data.positionId,
                    image: data.image,
                })
                resolve({
                    errCode: 0,
                    message: 'OK'
                })
            }
            

            
        }
        catch(e){
            reject(e)
        }
    })
}
let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id ) {
                return resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter', 
                });
            }

            // Tìm user
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false // BẮT BUỘC để dùng được hàm .save()
            });

            if (user) {
                // GÁN LẠI GIÁ TRỊ (Dùng dấu =)
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender;
                user.roleId = data.roleId;
                user.positionId = data.positionId;
                if(data.image){
                    user.image = data.image

                }

                // LƯU LẠI
                await user.save();

                resolve({
                    errCode: 0,
                    message: 'Update the user succeed!'
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `User's not found!`
                });
            }
        } catch (e) {
            reject(e); // Phải có cái này để báo lỗi nếu DB có vấn đề
        }
    });
}
let deleteUser = (userId) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let user = await db.User.findOne({
            where: {id: userId}

            })
            if(!user){
                resolve({
                    errCode: 2,
                    errMessage: 'User is not exist'
                })
            }
            await db.User.destroy({
                where: {id: userId}
            })
            resolve({
                errCode: 0,
                errMessage: 'The user is deleted'
            })
        }catch(e){
            reject(e)
        }
    })
}

let getAllCodesService =  (typeInput) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            if(!typeInput){
                resolve({
                    errCode: 1,
                    errMessage: 'Missing typeInput'
                })
            }else{
                let response = {};
                let allcode = await db.AllCode.findAll({
                    where: {type: typeInput}
                });
                response.errCode = 0;
                response.data = allcode;
                console.log(allcode)
                resolve(response) 
            }
            
        }
        catch(e){
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
    deleteUser: deleteUser,
    editUser: editUser,
    getAllCodesService: getAllCodesService,
}