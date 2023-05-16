const { where, DATE } = require('sequelize');
const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)

const { successCode, errorCode, failCode } = require('../ulti/response');

const GroupCreate = async (req, res) => {
    try{
        const {filename} = req.file;
        const {gr_name, gr_content, user_id} = req.body;
     

        let object = {
            gr_name,
            gr_ava: `/public/image/${filename}`,
            gr_content,
            user_id
        }
        const data = await model.group.create(object);
        successCode(res, data,"Tạo group thành công!")
    }
    catch(err)
    {
            failCode(res,'',"Lỗi")
    }
}





module.exports = {
    GroupCreate
}