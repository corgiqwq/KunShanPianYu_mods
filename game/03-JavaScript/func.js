function findClothes (name, slot) {
    for (let clothes of setup.clothes[slot]) {
        if (clothes.name === name) {
            //console.log(setup.clothes[slot][i].index);
            return clothes.index;
        }
    }
}window.findClothes = findClothes;