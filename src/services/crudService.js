import bcrypt from 'bcryptjs';
import level from '../models/level';
import db from '../models/index';
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
module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword
}