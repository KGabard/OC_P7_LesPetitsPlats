export class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
        this._cardElmt = this._createCardElmt();
    }
    get cardElmt() {
        return this._cardElmt;
    }
    _addIngredientItemElmts(cardElmt) {
        const list = cardElmt.querySelector('.recipe-card__infos__description__ingredients-list');
        this._recipe.description.ingredientList.forEach((ingredient) => {
            const itemElmt = document.createElement('li');
            itemElmt.classList.add('recipe-card__infos__description__ingredients-list__item');
            itemElmt.innerHTML = `<span class="strong">${ingredient.name}</span>${ingredient.quantity ? ': ' + ingredient.quantity : ''}`;
            list.appendChild(itemElmt);
        });
    }
    _createCardElmt() {
        const cardElmt = document.createElement('article');
        cardElmt.classList.add('recipe-card');
        cardElmt.innerHTML = `
      <div class="recipe-card__picture"></div>
      <div class="recipe-card__infos">
        <div class="recipe-card__infos__header">
          <h2 class="recipe-card__infos__header__title">${this._recipe.name}</h2>
          <div class="recipe-card__infos__header__time-container">
            <i class="recipe-card__infos__header__time-icon fa-regular fa-clock"></i>
            <p class="recipe-card__infos__header__time">${this._recipe.time}</p>
          </div>
        </div>
        <div class="recipe-card__infos__description">
          <ul class="recipe-card__infos__description__ingredients-list"></ul>
          <p class="recipe-card__infos__description__text">${this._recipe.description.text}</p>
        </div>
      </div>
    `;
        this._addIngredientItemElmts(cardElmt);
        return cardElmt;
    }
}
;
`
<article class="recipe-card">
<div class="recipe-card__picture"></div>
<div class="recipe-card__infos">
  <div class="recipe-card__infos__header">
    <h2 class="recipe-card__infos__header__title">Titre suih d hudz hdaih azohi i dho hz aidh a</h2>
    <div class="recipe-card__infos__header__time-container">
      <i class="recipe-card__infos__header__time-icon fa-regular fa-clock"></i>
      <p class="recipe-card__infos__header__time">?? min</p>
    </div>
  </div>
  <div class="recipe-card__infos__description">
    <ul class="recipe-card__infos__description__ingredients-list">
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient suiy qs yqsy ocdqs yoi</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient hduh eoi dsussu szszui</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
      <li class="recipe-card__infos__description__ingredients-list__item">
        <span class="strong">Ingrédient</span>: quantité
      </li>
    </ul>
    <p class="recipe-card__infos__description__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati veritatis ducimus expedita at asperiores perferendis dicta fugit enim quos maiores nisi nulla, amet reprehenderit officia, eveniet ea exercitationem quisquam iste perspiciatis! Eaque modi at corrupti praesentium eos. Ab debitis eaque iste modi ipsum, quas tempore obcaecati labore nisi omnis?
    </p>
  </div>
</div>
</article>
`;
