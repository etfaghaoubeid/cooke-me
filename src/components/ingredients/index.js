import React from 'react'

export default function Ingredients() {
    return (
        <div>
        <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            <li class="recipe__item">
                <svg class="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__count">1000</div>
                <div class="recipe__ingredient">
                    <span class="recipe__unit">g</span>
                    pasta
                </div>
            </li>

        


            <li class="recipe__item">
                <svg class="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__count">1</div>
                <div class="recipe__ingredient">
                    <span class="recipe__unit"></span>
                    can tuna packed in olive oil
                </div>
            </li>

          

        </ul>

        <button class="btn-small recipe__btn">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
        </p>
        <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>
    </div>
    )
}
