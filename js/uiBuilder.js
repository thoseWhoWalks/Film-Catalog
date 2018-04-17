 function reloadNavigation() {
     do {
         $(`#_${currentPage+disPointer--}`).removeClass('disabled');
     } while (disPointer != 0)

     load5Button.removeClass('disabled');

     tmpFilmsArray = films.slice();

     disPointer = 1;

     uploaded = false;
 }

 function loadPage(id, filmsArr) {

     if (!id || (currentPage == id && searchStatus != true))
         return;

     reloadNavigation();

     content.html("");

     movePaginationPointer(id);

     currentPage = id;

     var i;

     id == 1 ? i = 0 : i = id * filmsOnPage - filmsOnPage;

     for (i; i < id * filmsOnPage && i < filmsArr.length; i++)
         loadFilm(filmsArr[i]);

 }

 function loadFilm(film) {
     var temp = getTemplate(film);
     $("#content").append(temp);
 }

 function getTemplate(film) {

     return ` <article class="row">
                <img class="col-lg-3 col-sm-3 offset-lg-1 img-thumbnail" src = ${film.Poster} onerror="this.src = './img/defaultPoster.jpg'">
                <div class="col-lg-6 col-sm-9 offset-lg-1 row">
                <h4 class="col-lg-12 col-sm-12">${film.Name}</h4>
                <span class="col-lg-12 col-sm-12">${film.Year}</span>
                <span class = "col-lg-12 col-sm-12">Stars: ${film.Stars}</span> 
                <span class="col-lg-12 col-sm-12">Director:${film.Director}</span>
                <span id="description" class="col-lg-12 col-sm-12 lead">Description:${film.Description}</span>
                <button type="button" class="btn btn-dark offset-lg-8 offset-sm-2 col-sm-8 col-lg-3">Watch</button>
                <div>
            </article> `

 }
