import CONFIG from "../../globals/config";  

const createRestoItemTemplate = (resto) => `
            <div class="card" tabindex="0"> 
                <a href="${`/#/detail/${resto.id}`}"></a>
                <img class="card-img" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId} alt="${resto.name}">
                <div class="card-content">
                    <h2 class="card-title">${resto.name}</h2>
                    <p class="card-info">${resto.city}</p>
                    <p class="card-info">⭐ ${resto.rating}</p>
                    <p class="card-info">${resto.description}</p>
                </div>
            </div>
`;

export { createRestoItemTemplate, };