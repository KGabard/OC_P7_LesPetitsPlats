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
