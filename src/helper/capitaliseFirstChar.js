export default (value) => {
    return value.length>1 ? value.charAt(0).toUpperCase() + value.slice(1) : value.toUpperCase()
}