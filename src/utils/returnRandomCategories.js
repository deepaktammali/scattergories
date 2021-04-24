import _ from "lodash";
import categories from "../static/data/categories.txt";


export default async function (size){
    const gameCategories = await fetch(categories)
                        .then(resp=>resp.text())
                        .then(resp=>resp.split("\n"));

    return _.sampleSize(gameCategories,size);

}