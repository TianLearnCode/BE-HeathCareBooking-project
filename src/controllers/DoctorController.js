import db from '../models/index'
import doctorService from '../services/doctorService'
class DoctorController {
    async getTopDoctorHome(req, res){
        let limit = req.query.limit
        if(!limit){
            limit = 10
        }
        try{
            let response = await doctorService.getTopDoctorHome(limit)
            return res.status(200).json(response);

        }catch(e){
            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error form server...'
            })
        }
    }
    async getAllDoctors(req, res){
        try{
            let doctors = await doctorService.getAllDoctors()
            console.log(doctors)
            return res.status(200).json(doctors)
        }
        catch(e){
            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server...'

            })
        }
    }
} 
export default new DoctorController
