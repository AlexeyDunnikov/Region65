//filter

let shopTitle = document.querySelector(".shop-top__title");
let shopTitleBase = shopTitle.textContent;
let filterItems = document.querySelectorAll(".filter-item");
let catalogItems = document.querySelectorAll(".catalog__item");
let filterAside = document.querySelector('.catalog-filter');

let removeClasses = function (objects, classToRemove) {
  for (let obj of objects) {
    obj.classList.remove(classToRemove);
  }
};

let filter = function (itemsToFilter, byClass) {
  for (let itemToFilter of itemsToFilter) {
    if (itemToFilter.classList.contains(byClass) | (byClass === "all")) {
      itemToFilter.classList.remove("hide");
    } else {
      itemToFilter.classList.add("hide");
    }
  }
};

let filterAll = function(){
  for (let filterItem of filterItems) {
    filterItem.addEventListener("click", function (evt) {
      if (evt.target.dataset.filter === "all") {
        shopTitle.textContent = shopTitleBase;
      } else {
        shopTitle.textContent = evt.target.textContent;
      }

      removeClasses(filterItems, "active");
      evt.target.classList.add("active");

      let filterClass = evt.target.dataset.filter;

      filter(catalogItems, filterClass);
    });
  }
}

filterAll();
