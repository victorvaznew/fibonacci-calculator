function shortNumbers (number){
    if (number < 1000) {
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
    }
}