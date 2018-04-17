function loadData() {
    $.ajax({
        url: "./filmsData.json",
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            films = (res).films;
            buidPagination(films);
            loadPage(1, films);
            currentPage = 1;
            tmpFilmsArray = films.slice();
            initLoader();
        }
    });
}
