 //DOM 
 var content = $("#content");
 var searchInput = $("#searchInput");
 var paginationBlock = $("#pagination");
 var load5Button = $("#loadMore");

 //vars 
 var films, tmpFilmsArray, searchIds = new Array();
 var currentPage, numOfPages = 1;
 var searchStatus = false,
     uploaded = false;
 var disPointer = 1;
 var searchText;

 //const
 const filmsOnPage = 5;
 //events
 $(loadData);

 searchInput.keyup(function () {

     searchStatus = true;

     searchIds = new Array();

     load5Button.hide();

     searchText = this.value;

     content.html("");

     films.forEach((x) => {
         for (key in x)
             if (x[key].toString().toUpperCase().includes(searchText.toUpperCase()) && searchText != "" && key != 'Description') {
                 searchIds.push(x);
                 break;
             };
     });

     if (searchText == '') {

         load5Button.show();

         buidPagination(films);

         loadPage(1, films);
     } else {
         buidPagination(searchIds);

         loadPage(1, searchIds);
     }

     searchStatus = false;
 });

 load5Button.click(function () {

     if ($(this).hasClass("disabled"))
         return;

     if (uploaded == false) {
         uploaded = true;
         tmpFilmsArray.splice(0, currentPage * 5);
     } else
         tmpFilmsArray.splice(0, 5);

     $(`#_${currentPage+disPointer++}`).addClass('disabled');

     for (var i = 0; i < filmsOnPage && i < tmpFilmsArray.length; i++)
         loadFilm(tmpFilmsArray[i]);

     if (tmpFilmsArray.length < 5)
         $(this).addClass("disabled");

     enableLoader();

 });
