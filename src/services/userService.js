import e from 'express';
import db from '../models/index';
import bcrypt from 'bcryptjs';
import { where } from 'sequelize';
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
                    attributes:['email', 'roleId', 'password'],

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


module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail
}