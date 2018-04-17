 function createPaginationElement(i, pagination, filmsArr) {
     var pageItem = $("<li></li>")
         .addClass("page-item")
         .attr('id', `_${i+1}`);

     var a = $("<a></a>")
         .addClass("page-link")
         .html(i + 1)
         .click(function () {
             loadPage(i + 1, filmsArr);
             enableLoader();
             if (currentPage == 5)
                 load5Button.addClass("disabled");
         });

     pageItem.append(a);

     pagination.append(pageItem);
 }

 function buidPagination(filmsArr) {
     numOfPages = Math.ceil(filmsArr.length / filmsOnPage);

     paginationBlock.html("");

     var pagination = $("<ul></ul>")
         .addClass("pagination")
     paginationBlock.append(pagination);

     var pageItem = $("<li></li>")
         .addClass("page-item active")
         .attr('id', `_${1}`);

     var a = $("<a></a>")
         .addClass("page-link")
         .html(1)
         .click(function () {
             loadPage(1, filmsArr);
             enableLoader();
         });

     pageItem.append(a);

     pagination.append(pageItem);

     for (var i = 1; i < numOfPages; i++) {
         createPaginationElement(i, pagination, filmsArr)
     }
 }

 function movePaginationPointer(id) {
     if ($(`#_${currentPage}`))
         $(`#_${currentPage}`).removeClass("active");
     if ($(`#_${id}`))
         $(`#_${id}`).addClass("active");
 }
