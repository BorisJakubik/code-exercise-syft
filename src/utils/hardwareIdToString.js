export const hardwareIdToString = (id) => {
    switch (id) {
        case 0:
            return 'Apple';
        case 1:
            return 'Mac OS X';
        case 2:
            return 'Lenovo';
        case 3:
            return 'Razor';
        default:
            return id;
    }
}