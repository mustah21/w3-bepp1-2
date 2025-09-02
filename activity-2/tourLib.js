// {
//   "name": "Best of Paris in 7 Days Tour",
//   "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//   "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
//   "price": "1,995"
// }


let tourArray = [];
let nextId = 1;

function getAll() {
    return tourArray;
}

function addOne(name, info, image, price) {
    // Check if any parameter is empty or undefined
    if (!name || !info || !image || !price) {
        return false;
    }

    const newtourlib = {
        id: nextId++,
        name,
        info,
        image,
        price
    };

    tourArray.push(newtourlib);
    return newtourlib;
}

function getTourById(id) {
    const tourlib = tourArray.find((item) => item.id === id);
    return tourlib || false;
}

function updateOneById(id, updatedData) {
    const tourlib = getTourById(id);
    if (tourlib) {
        // Update properties only if provided in updatedData
        if (updatedData.name) {
            tourlib.name = updatedData.name;
        }
        if (updatedData.info) {
            tourlib.info = updatedData.info;
        }
        if (updatedData.image) {
            tourlib.image = updatedData.image;
        }

        if (updatedData.price) {
            tourlib.price = updatedData.price;
        }
        return tourlib;
    }
    return false;
}

function deleteOneById(id) {
    const tourlib = getTourById(id);
    if (tourlib) {
        const initialLength = tourArray.length;
        tourArray = tourArray.filter((item) => item.id !== id);
        return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
}

if (require.main === module) {
    let result = addOne("7 Days Tour", " Join us for the Best of Helsinki!", "https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("By id called:", getTourById(1));
    console.log("updatebyid: ", updateOneById(1, {name: "osama", info: "tallin estonia soon"}))
    console.log("deleteOneById called:", deleteOneById(1));

    console.log("By id called after item deleted:", getTourById(1));
}

const tourlib = {
    getAll,
    addOne,
    getTourById,
    updateOneById,
    deleteOneById,
};

module.exports = tourlib;