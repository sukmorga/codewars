function howMuchILoveYou(nbPetals) {
    if (nbPetals == 1 || nbPetals % 6 == 1) {
        return "I love you";
    } else if (nbPetals === 2 || nbPetals % 6 === 2) {
        return "a little";
    } else if (nbPetals === 3 || nbPetals % 6 === 3) {
        return "a lot";
    } else if (nbPetals === 4 || nbPetals % 6 === 4) {
        return "passionately";
    } else if (nbPetals === 5 || nbPetals % 6 === 5) {
        return "madly";
    } else if (nbPetals == 6 || nbPetals % 6 == 0) {
        return "not at all";
    }
}
