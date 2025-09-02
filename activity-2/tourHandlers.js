const Tour = require("./tourLib.js");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
    const {name, info, image, price} = req.body;
    const newcreatetour = Tour.addOne(name, info, image, price);

    if (newcreatetour){
        res.json(newcreatetour)} else {
            res.status(400).json({message: "Unable to push your data"});
    }
};


const getTourById = (req, res) => {
    const tourid = Number(req.params.tourId);
    const tour = Tour.getTourById(tourid);
    if (tour) {
        res.json(tour)
        console.log(tour);
    } else {
        res.status(404).json({message: "cant fetch your id"})
    }
};

const updateTour = (req, res) => {
    const tourid = Number(req.params.tourId);
    const {name, info, image, price} = req.body;

    const updatedtour = Tour.updateOneById(tourid, {name, info, image, price});
    if (updatedtour){
        res.json(updatedtour);
    } else {
        res.status(404).json({message: "failed to update data"});
    }

};

const deleteTour = (req, res) => {
    const tourid = Number(req.params.tourId);
    const istourdeleted = Tour.deleteOneById(tourid);

    if (istourdeleted){
        res.json ({message: "tour deleted successfully"})
    } else {
        res.status(404).json({message: "failure to delete"})
    }

};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
