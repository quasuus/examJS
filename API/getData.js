import url from "./url.js";

async function getData() {
    try {
        const DisneyData = await fetch(url);
        if (!DisneyData.ok){
        throw new Error("Upps...", DisneyData.status);
        }
        const transformData = await DisneyData.json();
        return transformData.data
    } catch (error) {
    console.log(error.message)
    }
}

export default getData;
