import React from 'react'

function Shopping() {
    return (
        <div class="shopping">
            <h2 class="heading-2">My Shopping List</h2>

            <ul class="shopping__list">

                
                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="500" step="100"/>
                        <p>g</p>
                    </div>
                    <p class="shopping__description">Pasta</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="0.5" step="0.1"/>
                        <p>cup</p>
                    </div>
                    <p class="shopping__description">Ricotta cheese</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="3.5" step="0.1"/>
                        <p>tbsp</p>
                    </div>
                    <p class="shopping__description">Toasted almond slices</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="0.5" step="0.1"/>
                        <p>tbsp</p>
                    </div>
                    <p class="shopping__description">Sea salt</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

               

               
                
            </ul>

            <div class="copyright">
                &copy; Etfagha oubei Elatigh. Powered by
                <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
            </div>

        </div>
    )
}
export default  Shopping