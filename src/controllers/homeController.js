
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
      console.log(message);
      return res.send('post crud from server');
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
module.exports = {
      getHomePage: getHomePage,
      getCRUD: getCRUD,
      postCRUD: postCRUD,
      displayGetCRUD: displayGetCRUD,
      getEditCRUD: getEditCRUD,
      putCRUD: putCRUD,
      // getDeleteCRUD: getDeleteCRUD,
}