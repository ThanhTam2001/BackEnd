const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const bcrypt = require('bcrypt')

const { successCode, errorCode, failCode } = require('../ulti/response');
const group = require('../model/group');

const userHastag = async(req, res) => {
    try {
        const {hastag_id, user_id} = req.body;

        let object = {
            hastag_id,
            user_id
        }
        const data = await model.user_hastag.create(object);
        successCode(res, data,"Chọn hastag thành công!!!")
    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

const sttHastag = async(req, res) => {
    try {

    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

const grHastag = async(req, res) => {
    try {
        const {hastag_id, gr_id} = req.body;
        let object = {
            hastag_id,
            gr_id
        }
        const data = await model.group_hastag.create(object);
        successCode(res, data, 'Chọn hastag thành công!!!')
    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

const showGrHastag = async(req, res) => {
    try {
        const {user_id} = req.body;
        let data = [],u_hg_list = []
        let u_hg = await model.user_hastag.findAll({
            where: {
                user_id: user_id
            }
        })
        let length = u_hg.length
        for (let i = 0; i < length; i++) {
            let id = u_hg[i].hastag_id
            u_hg_list.push(id)
        }
        let gr = await model.group.findAll()
        for(let i of gr) {
            let gr_hg = await model.group_hastag.findAll({
                where: {
                    gr_id: i.gr_id
                }
            })
            let length2 = gr_hg.length, gr_hg_list = []
            for(let g of gr_hg) {
                let id = g.hastag_id
                gr_hg_list.push(id)
            }
            let total = u_hg_list.concat(gr_hg_list).unique()
            if(length + length2 > total.length && length2 != 0) {
                data.push(i)
            }
        }
        successCode(res,data,'Thành công!!!')
    }
    catch {
        failCode(res, '','Có lỗi!!!')
    }
}

module.exports = {
    userHastag,
    sttHastag,
    grHastag,
    showGrHastag
}