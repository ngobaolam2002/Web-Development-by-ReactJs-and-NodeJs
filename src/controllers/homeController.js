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
module.exports = {
      getHomePage: getHomePage,
      getCRUD: getCRUD,
      postCRUD: postCRUD,
}