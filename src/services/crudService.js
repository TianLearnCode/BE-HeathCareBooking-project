import bcrypt from 'bcryptjs';
import level from '../models/level';
import db from '../models/index';
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);

const createNewUser = async function(data){
    
   //Tạo dữ liệu mới
   return new Promise(async(resolve, reject) =>{
        try{
            let passwordhashed = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: passwordhashed,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            


            })
            resolve('ok create a new user succeed!');
        }catch(e){
            reject(e);
        }
   })


    let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    console.log('Take hash password: ');
    console.log(hashPasswordFromBcrypt);

    console.log('Take data from form: ');
    console.log(data);
}

const hashUserPassword = (password) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

const getAllUser = async()=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const userInfo = await db.User.findAll({
                raw: true
            });
            resolve(userInfo);
        }catch(e){
            reject(e);
        }
    })
}

const getUserDataById = async(userId)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const userInfo = await db.User.findOne({
                where: {id: Number(userId)},
                raw: true
                
            });
            resolve(userInfo);
        }
        catch(e){
            reject(e);
        }
    })
}


const updateUserData = async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const user = await db.User.findOne({
                where: {id: data.id}
            });
            if(user){
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender === '1' ? true : false;
                user.roleId = data.roleId;

                await user.save();
                let allUsers = await db.User.findAll();
                resolve();

            }else{
                reject(e);
            }
           
        }catch(e){
            reject(e);
        }
    })
}


const deleteUser = async(id)=>{
   return new Promise(async(resolve, reject)=>{
        try{
            const user = await db.User.findOne({
                where: {id: id}
                
            })
            if(user){
                user.destroy();
            }
            resolve();
        }
        catch(e){
            reject(e);
        }
   })
}

module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
    getAllUser: getAllUser,
    getUserDataById: getUserDataById,
    updateUserData: updateUserData,
    deleteUser: deleteUser,
}