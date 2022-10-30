import { arrayNews } from "./data/newsData"

export const getNews = (limit = 5, page = 1) => {
    let newArray = [];
    let index = limit * page - limit;
    for (let i = 0; i < arrayNews.length; i++) {
        if (i >= index && i < index + limit) {
            newArray.push(arrayNews[i])
        }
    }
    
    return new Promise((resolve, reject) => {
        resolve(newArray)
    }) 
}
