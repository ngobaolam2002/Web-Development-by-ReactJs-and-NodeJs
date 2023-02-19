
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let getHomePage = async (req, res) => {
      try {
            let data = await db.User.findAll();
            return res.render('homepage.ejs', {
                  data: JSON.stringify(data)
            });
      } catch (error) {
            console.log(error)
      }

}

let getCRUD = (req, res) => {
      return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
      let message = await CRUDservice.createNewUser(req.body);
      let data = await CRUDservice.getAllUser();
      console.log(message);
      return res.render('display-crud.ejs', {
            dataTable: data
      });
}

let displayGetCRUD = async (req, res) => {
      let data = await CRUDservice.getAllUser();
      return res.render('display-crud.ejs', {
            dataTable: data
      });
}

let getEditCRUD = async (req, res) => {
      let userId = req.query.id;
      if (userId) {
            let userData = await CRUDservice.getUserInfoById(userId);
            // check user data not found
            return res.render('editCRUD.ejs', {
                  user: userData
            });
      } else {
            return res.send('User not found');
      }
}

let putCRUD = async (req, res) => {
      let data = req.body;
      let allUser = await CRUDservice.updateUserData(data);
      return res.render('display-crud.ejs', {
            dataTable: allUser
      })
}

let deleteCRUD = async (req, res) => {
      let id = req.query.id;
      if (id) {
            await CRUDservice.deleteUserById(id);
            let allUser = await CRUDservice.getAllUser();
            return res.render('display-crud.ejs', {
                  dataTable: allUser
            })
      } else {
            return res.send('User not found')
      }

}
module.exports = {
      getHomePage: getHomePage,
      getCRUD: getCRUD,
      postCRUD: postCRUD,
      displayGetCRUD: displayGetCRUD,
      getEditCRUD: getEditCRUD,
      putCRUD: putCRUD,
      deleteCRUD: deleteCRUD,
}