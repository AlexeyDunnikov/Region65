import './filter'

let showLinks = document.querySelectorAll('.spec-technic__item-link');

for (let showLink of showLinks){
    showLink.addEventListener('click', function(evt){
        filter(catalogItems, evt.target.dataset.filter);
    })
}