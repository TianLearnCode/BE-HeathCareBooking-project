import userService from '../services/UserService';
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
}
export default new UserController();