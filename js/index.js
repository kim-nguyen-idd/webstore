// products database
const products = [
    { // product 1
        image: `flower-dream.png`,
        name: `Sunshine Blues`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `12-18%`,
        cbdLvl: `10-12%`,
        qty: 9, 
        pCost: `35$`,
        origin: `Ontario`
    },{ // product 2
        image: `capsule-descartes.png`,
        name: `Descartes`,
        blend: `Hybrid`,
        cannaType: `Capsules`,
        thcLvl: `3-8%`,
        cbdLvl: `3-8%%`,
        qty: 5, 
        pCost: `77$`,
        origin: `Quebec`
    },{ // product 3
        image: `cbdoil-lighten.png`,
        name: `Lighten`,
        blend: `CBD Dominant`,
        cannaType: `Capsules`,
        thcLvl: `5-9%`,
        cbdLvl: `12-18%`,
        qty: 7, 
        pCost: `64$`,
        origin: `Ontario`
    },{ // product 4
        image: `flower-mistletoke.png`,
        name: `Mistletoke`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `15-22%`,
        cbdLvl: `7-12%`,
        qty: 11, 
        pCost: `39$`,
        origin: `Ontario`
    },{ // product 5
        image: `flower-organica.png`,
        name: `Organica`,
        blend: `CBD Dominant`,
        cannaType: `Flower`,
        thcLvl: `6-7%`,
        cbdLvl: `12-18%`,
        qty: 15, 
        pCost: `44$`,
        origin: `BC`
    },{ // product 6
        image: `flower-purple-kush.png`,
        name: `Purple Kush`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `16-22%`,
        cbdLvl: `10-12%`,
        qty: 24, 
        pCost: `29$`,
        origin: `Ontario`
    },{ // product 7
        image: `flower-sultry.png`,
        name: `Sultry`,
        blend: `Hybrid`,
        cannaType: `Flower`,
        thcLvl: `13-16%`,
        cbdLvl: `13-15%`,
        qty: 11, 
        pCost: `42$`,
        origin: `BC`
    },{ // product 8
        image: `preroll-hybrida.png`,
        name: `Hybrida`,
        blend: `Hybrid`,
        cannaType: `Preroll`,
        thcLvl: `8-9%`,
        cbdLvl: `8-9%`,
        qty: 33, 
        pCost: `19$`,
        origin: `Ontario`
    },{ // product 9
        image: `flower-white-cloud.png`,
        name: `White Cloud`,
        blend: `CBD Dominant`,
        cannaType: `Flower`,
        thcLvl: `5-6%`,
        cbdLvl: `8-10%`,
        qty: 17, 
        pCost: `33$`,
        origin: `Quebec`
    },{ // product 10
        image: `oilspray-soothe-dose.png`,
        name: `Soothing D`,
        blend: `CBD Dominant`,
        cannaType: `Oil`,
        thcLvl: `6-8%`,
        cbdLvl: `10-14%`,
        qty: 2, 
        pCost: `68$`,
        origin: `Quebec`
    },{ // product 11
        image: `flower-dream.png`,
        name: `Dream State`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `12-18%`,
        cbdLvl: `10-12%`,
        qty: 9, 
        pCost: `35$`,
        origin: `BC`
    },{ // product 12
        image: `capsule-descartes.png`,
        name: `Danny G`,
        blend: `Hybrid`,
        cannaType: `Capsules`,
        thcLvl: `3-8%`,
        cbdLvl: `3-8%%`,
        qty: 5, 
        pCost: `77$`,
        origin: `Ontario`
    },{ // product 13
        image: `cbdoil-lighten.png`,
        name: `Loosen`,
        blend: `CBD Dominant`,
        cannaType: `Capsules`,
        thcLvl: `5-9%`,
        cbdLvl: `12-18%`,
        qty: 7, 
        pCost: `64$`,
        origin: `Quebec`
    },{ // product 14
        image: `flower-mistletoke.png`,
        name: `Miles D`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `15-22%`,
        cbdLvl: `7-12%`,
        qty: 11, 
        pCost: `39$`,
        origin: `BC`
    },{ // product 15
        image: `flower-organica.png`,
        name: `Fresh Leaves`,
        blend: `CBD Dominant`,
        cannaType: `Flower`,
        thcLvl: `6-7%`,
        cbdLvl: `12-18%`,
        qty: 15, 
        pCost: `44$`,
        origin: `Ontario`
    },{ // product 16
        image: `flower-purple-kush.png`,
        name: `Rainfall`,
        blend: `THC Dominant`,
        cannaType: `Flower`,
        thcLvl: `16-22%`,
        cbdLvl: `10-12%`,
        qty: 24, 
        pCost: `29$`,
        origin: `BC`
    },{ // product 17
        image: `flower-sultry.png`,
        name: `Songbird`,
        blend: `Hybrid`,
        cannaType: `Flower`,
        thcLvl: `13-16%`,
        cbdLvl: `13-15%`,
        qty: 11, 
        pCost: `42$`,
        origin: `Quebec`
    },{ // product 18
        image: `preroll-hybrida.png`,
        name: `Hansen`,
        blend: `Hybrid`,
        cannaType: `Preroll`,
        thcLvl: `8-9%`,
        cbdLvl: `8-9%`,
        qty: 33, 
        pCost: `19$`,
        origin: `BC`
    },{ // product 19
        image: `flower-white-cloud.png`,
        name: `Cirrus`,
        blend: `CBD Dominant`,
        cannaType: `Flower`,
        thcLvl: `5-6%`,
        cbdLvl: `8-10%`,
        qty: 17, 
        pCost: `33$`,
        origin: `Ontario`
    },{ // product 20
        image: `oilspray-soothe-dose.png`,
        name: `Likerta`,
        blend: `CBD Dominant`,
        cannaType: `Oil`,
        thcLvl: `6-8%`,
        cbdLvl: `10-14%`,
        qty: 2, 
        pCost: `68$`,
        origin: `BC`
    },
] 

function isThisType(product) {
    // this could be `design` - second filter argument
    if (this == 'all') {
      return true;
    } else if (product.cannaType == this) {
      return true;
    } else {
      return false;
    }
  }

function isThisOrigin(product) {
    // this could be `design` - second filter argument
    if (this == 'all') {
    return true;
    } else if (product.origin == this) {
    return true;
    } else {
    return false;
    }
}



function isMatchingName(product) {
// free input trim input of white space, upper it, check if includes
if (product.name.toLowerCase().includes(this.trim().toLowerCase())) {
    return true;
} else {
    return false;
}
}

function loadProductByName(event) {
const nameImSearchingFor = event.target.value;
renderProducts(products.filter(isMatchingName, nameImSearchingFor));
}

function addToFaves() {
    document.getElementById(`faved`).classList.toggle(`full-fave`);
}

function getProductAsHtmlString(product) {

    let limited = ``;
    if (product.qty < 10) {
      limited = `<small class="callout">Limited!</small>`;
    } else {
      limited = `🍟`;
    }

    
return  `<article class="product">
            <header>
              <a href="#"><img src="img/${product.image}" alt="Flower Dream"></a>
            </header>

            <h3 class="product-name">${product.name}</h3>

            <div class="classification">
              <p class="blend">${product.blend}</p>
            </div>
            
            <div class="product-deets">
              <ul>
                <li class="canna-type"><h5>${product.cannaType}</h5></li>
                <li class="thc-lvl"><h5>THC</h5><p>${product.thcLvl}</p></li>
                <li class="cbd-lvl"><h5>CBD</h5><p>${product.cbdLvl}</p></li>
              </ul>
              <ul>
                <li class="p-cost"><h5>Price</h5><p>${product.pCost} ${limited}</p></li>
                <li class="origin"><h5>Origin</h5><p>${product.origin}</p></li>
              </ul>
            </div>
            
            <form class="p-custom">
              <footer>
                <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                <button type="button" id="fave-here"><span class="material-icons" id="faved">favorite</span></button>
                <a href="#">see more</a>
              </footer>
            </form>

        </article>`;

  }


  function renderProducts(arrToRender) {
    const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString); // makes new arr of html elements
    const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
    // replace what was there w new info - order of appearance in data is the order it will appear
    // filter criteria 
    document.getElementById('products').innerHTML = strOfHtmlProducts;  
  }

  

  function loadCannaType(event) { // dropdowns, checkboxes
    const cannaImLookingFor = event.target.value;
    renderProducts(products.filter(isThisType, cannaImLookingFor)); // filter, direction
  }

  function loadProductOrigin(event) { // dropdowns, checkboxes
    const originImLookingFor = event.target.value;
    renderProducts(products.filter(isThisOrigin, originImLookingFor)); // filter, direction
  }

  //execute
  renderProducts(products);




  document.getElementById('sortProductType').addEventListener('change', loadCannaType);
  document.getElementById('sortProductOrigin').addEventListener('change', loadProductOrigin);
  document.getElementById('findName').addEventListener('input', loadProductByName);
  document.getElementById('fave-here').addEventListener(`click`, addToFaves);

  