import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
      return new Promise(async (resolve, reject) => {
            try {
                  console.log(data);
                  let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                  await db.User.create({
                        password: hashPasswordFromBcrypt,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        gender: data.gender === '1' ? true : false,
                        roleId: data.roleId,
                  })

                  resolve('Created a new user success')
            } catch (e) {
                  reject(e);
            }
      })
}

let hashUserPassword = (password) => {
      return new Promise(async (resolve, reject) => {
            try {
                  let hashPassword = await bcrypt.hashSync(password, salt);
                  resolve(hashPassword);
            } catch (e) {
                  reject(e);
            }
      })
}


module.exports = {
      createNewUser: createNewUser,
}