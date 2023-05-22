function shortNumbers (number){
    var count = 0;

    for (count; number > 1000; count++) {
        number = number / 1000;
    }
    if (count == 1) {
        return number.toFixed(1) + 'K';
    }
    else if (count == 2) {
        return number.toFixed(1) + 'M';
    }
    else if (count == 3) {
        return number.toFixed(1) + 'B';
    }
    else if (count == 4) {
        return number.toFixed(1) + 't';
    }
    else if (count == 5) {
        return number.toFixed(1) + 'q';
    }
    else if (count == 6) {
        return number.toFixed(1) + 'Q';
    }
    else if (count == 7) {
        return number.toFixed(1) + 's';
    }
    else if (count == 8) {
        return number.toFixed(1) + 'S';
    }
    else if (count == 9) {
        return number.toFixed(1) + 'o';
    }
    else if (count == 10) {
        return number.toFixed(1) + 'n';
    }
    else if (count == 11) {
        return number.toFixed(1) + 'd';
    }
    else if (count == 12) {
        return number.toFixed(1) + 'U';
    }
    else if (count == 13) {
        return number.toFixed(1) + 'D';
    }
    else if (count == 14) {
        return number.toFixed(1) + 'T';
    }
    else if (count == 15) {
        return number.toFixed(1) + 'Qt';
    }
    else if (count == 16) {
        return number.toFixed(1) + 'Qd';
    }
    else if (count == 17) {
        return number.toFixed(1) + 'Sd';
    }
    else if (count == 18) {
        return number.toFixed(1) + 'St';
    }
    else if (count == 19) {
        return number.toFixed(1) + 'O';
    }
    else if (count == 20) {
        return number.toFixed(1) + 'n';
    }
    else if (count == 21) {
        return number.toFixed(1) + 'v';
    }
    else if (count == 22) {
        return number.toFixed(1) + 'c';
    }
    else {
        return number
    }

    /*if (number < 1000) {
        return number;
    }
    else if (number >= 1000 && number < 1000000) {
        return Math.abs(number/1000).toFixed(1) + 'k';
    }
    else if (number >= 1000000 && number < 1000000000){
        number = number / 1000000;
        return number.toFixed(1) + 'M';
    }
    else if (number >= 1000000000 && number < 1000000000000){
        number = number / 1000000000;
        return number.toFixed(1) + 'B';
    }
    else if (number >= 1000000000000 && number < 1000000000000000){
        number = number / 1000000000000;
        return number.toFixed(1) + 't';
    }
    else if (number >= 1000000000000000 && number < 1000000000000000000){
        number = number / 1000000000000000;
        return number.toFixed(1) + 'q';
    }
    else if (number >= 1000000000000000000 && number < 1000000000000000000000){
        number = number / 1000000000000000000;
        return number.toFixed(1) + 'Q';
    }
    else if (number >= 100000000000000000000 && number < 1000000000000000000000000){
        number = number / 1000000000000000000000;
        return number.toFixed(1) + 's';
    }
    else if (number >= 100000000000000000000000 && number < 1000000000000000000000000000){
        number = number / 1000000000000000000000000;
        return number.toFixed(1) + 'S';
    }
    else if (number >= 100000000000000000000000 && number < 1000000000000000000000000000){
        number = number / 1000000000000000000000000;
        return number.toFixed(1) + 'S';
    }
    else if (number >= 100000000000000000000000000 && number < 1000000000000000000000000000000){
        number = number / 1000000000000000000000000000;
        return number.toFixed(1) + 'o';
    }
    else if (number >= 100000000000000000000000000000 && number < 1000000000000000000000000000000000){
        number = number / 1000000000000000000000000000000;
        return number.toFixed(1) + 'n';
    }
    else if (number >= 100000000000000000000000000000000 && number < 1000000000000000000000000000000000000){
        number = number / 1000000000000000000000000000000000;
        return number.toFixed(1) + 'd';
    }
    else{
        number = number / 1000000000000000000000000000000000000;
        return number.toFixed(1) + 'U';
    }*/
}