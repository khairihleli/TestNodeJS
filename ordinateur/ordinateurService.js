var ordinateur = require('./ordinateurModel')

async function list(req,res,next){
    await ordinateur.find()
              .then((data,err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
    //res.end('User List')
}
const create =async (req,res)=>{
    const { modele, categorie ,dateFabrication,prix } = req.body 

    await new ordinateur({
        modele: modele,
        categorie: categorie,
        dateFabrication: dateFabrication,
        prix:prix

    }).save()
      .then((data, err)=>{
          if(err){
              res.status(500).json(err)
            }
            console.log(data);
      })
    
res.json('ordinateur added ! modele : '+ modele + ' categorie : '+ categorie+ ' dateFabrication : '+ dateFabrication+ ' prix : '+ prix)
}
const update = async (req, res, next)=>{
    await ordinateur.findByIdAndUpdate(req.params.id, req.body)
              .then((data, err)=>{
                res.json(data)
              })
}

async function deleteU(req, res, next) {
    await ordinateur.findByIdAndDelete(req.params.id)
              .then((data, err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
}

async function getCategoryZ(req, res, next) {
    await ordinateur.find({ categorie: 'Z' })
              .then((data, err) => {
                if (err) {
                    res.status(500).json(err);
                }
                res.status(200).json(data);
              });
}

async function getPrice(req, res, next) {
    const { minPrice, maxPrice } = req.body;
    await ordinateur.find({ prix: { $gte: minPrice, $lte: maxPrice } })
              .then((data, err) => {
                if (err) {
                    res.status(500).json(err);
                }
                res.status(200).json(data);
              });
}

module.exports = { create, list, update, deleteU, getCategoryZ, getPrice }