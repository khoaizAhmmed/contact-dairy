const Contact = require('../contact')

exports.getAllContacts = (req,res)=>{
    Contact.find()
    .then(c=>{
        res.json(c)
    })
    .catch(e=>{
    console.log(e)
    res.json({
        message : "Error"
    })
})
}

exports.createContacts = (req,res)=>{
    let {name,phone,email,id} = req.body
    let contact = new Contact({
        _id :parseInt(Date.now()/222),
        name,
        phone,
        email
    })
    if(id){
        Contact.findOneAndUpdate({_id:id},{
            $set:{
                name,phone,email
            }
        },{new:true})
        .then(()=>{
            res.redirect('/')
        })

    }else{
        contact.save()
        .then(c=>{
            res.json(c)
        })
        .then(res.render("success"))
        .catch(e=>{
            console.log(e)
            res.json({
                message : "Error"
            })
        })
    }



}
exports.contactById = (req,res)=>{
    const {id} = req.params
    Contact.findOne({_id:id})
    .then(c=>{res.json(c)})
    .catch(e=>{
        console.log(e)
        res.json({
            message : "Error"
        })
    })
}
exports.updateContactById = (req,res)=>{
    let {name,phone,email} = req.body
    const {id} = req.params
    Contact.findOneAndUpdate({_id:id},{
        $set:{
            name,phone,email
        }
    },{new:true})
    .then(c=>{res.json(c)})
    .catch(e=>{
        console.log(e)
        res.json({
            message : "Error"
        })
    })
}
exports.deleteContactById = (req,res)=>{
    const {id} = req.params
    Contact.findOneAndDelete({_id:id})
    .then(()=>{
        res.redirect('/')
    })

    .catch(e=>{
        console.log(e)
        res.json({
            message : "Error"
        })
    })
}
