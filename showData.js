import getData from "./getData.js";

async function showData() {
    const apiData = await getData();
    const div = document.getElementById("container")

    apiData.forEach(a => {
        const pe = document.createElement("p")
        pe.innerHTML = a.data.name;
        div.appendChild(pe);
    });
}
export default showData()