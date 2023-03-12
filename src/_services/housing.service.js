import data from '../_utiles/data.json'


let getAllHousings = () => {
    return data
}

let getHousing = (hid) => {
    return data.find((housing) => housing.id === hid)
}

export const housingService = { getAllHousings, getHousing }