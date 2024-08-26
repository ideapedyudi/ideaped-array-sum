export default (array, key) => {
    return array.reduce((sum, obj) => {
        return sum + (typeof obj[key] === 'number' ? obj[key] : 0);
    }, 0);
}