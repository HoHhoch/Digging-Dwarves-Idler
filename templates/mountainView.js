import mountain from "../components/data.js";

const template = `
    <h1 class="TotalOre_Count">Current Ore: <span>${mountain.currentOre}</span></h1>
    <img src=${mountain.src} alt=${mountain.alt} class="True_Mountain"/>
`;

let article = document.createElement("article")
article.innerHTML = template
document.body.append(article)