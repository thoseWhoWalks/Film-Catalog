var pageLoader = $('<div></div>')
    .attr('id', 'loader')
    .toggle();

initLoader = () => $("body").prepend(pageLoader);

enableLoader = function () {
    content.toggle();
    pageLoader.toggle();
    var tL = setTimeout(() => {
        pageLoader.toggle();
        content.toggle();
    }, 500);
}
