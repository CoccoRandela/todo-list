export default function arrayComp(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(element => {
        return arr2.includes(element)
    })
}