import getData from "./getData.js";

async function showData() {
    const apiData = await getData();
    const div = document.getElementById("container")

    apiData.forEach(a => {
        const Pe = document.createElement("p")
        Pe.innerHTML= a.name;
        div.appendChild(Pe);
    });
}
export default showData;