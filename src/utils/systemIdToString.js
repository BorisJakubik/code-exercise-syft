export const systemIdToString = (id) => {
    switch(id) {
        case 0: 
            return 'Windows';
        case 1: 
            return 'ASUS';
        case 2: 
            return 'Linux';
        default:
            return null;

    }
}