const fetch = require('node-fetch');  
//One of the routes
exports.contactApi = (req, res) => {
    fetchData(object => {
    res.render("index", { obj: object });
    })    
    };  


    function fetchData(callback){
    fetch("https://jsonplaceholder.typicode.com/users") //Could change this to a find request to the data base directly like Teacher.find()...
        .then(res => res.json())
        .then(res => {
            console.log(res);
          return callback(res);

        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
    }

exports.errorPage = (req,res)=>{
  res.render('error')
}
