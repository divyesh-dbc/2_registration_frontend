var temp = '';
var paginationData = {
    recordPerPage: 10,
    currentPage: 1,
    totalRecord: 0
}
function pagination(paginationData) {
    var totalPage = 0;
    var totalPages = 0;
    var html = '';
    var startPage = 1;
    var gap = 2;
    var base_url = '';

    var totalRecord = paginationData.totalRecord;
    var currentPage = +paginationData.currentPage;
    var recordPerPage = paginationData.recordPerPage;

    if (totalRecord > 0 && totalRecord > recordPerPage) {
        totalPage = Math.ceil(totalRecord / recordPerPage);
        totalPages = Math.ceil(totalRecord / recordPerPage);
        if (totalPage > 6) {
            // totalPage = 8;
            if (currentPage > gap) startPage = currentPage - gap;
            if ((currentPage + gap) < totalPage) totalPage = gap + currentPage;
        }
        if (currentPage > 1) {
            html += '<li class="page-item">' +
                '<a href="javascript:void(0)" class="page-link previous" title="First" data-page="1">' +
                '<<' +
                '</a>' +
                '</li>';
            html += '<li class="page-item">' +
                '<a href="javascript:void(0)" class="page-link previous" title="Previous" data-page="' + (+currentPage - 1) + '">' +
                '<' +
                '</a>' +

                '</li>';
        }
        for (let index = startPage; index <= totalPage; index++) {
            html += '<li class="page-item ' + (currentPage == index ? 'active' : '') + '">' +
                '<a href="javascript:void(0)" data-page="' + index + '" class="page-link">' + index + '</a>' +
                '</li>';
        }
        if (totalPage != currentPage) {
            html += '<li class="page-item">' +
                '<a href="javascript:void(0)" class="page-link next" title="next" data-page="' + (+currentPage + 1) + '">' +
                '>' +
                '</a>' +
                '</li>';
            html += '<li class="page-item">' +
                '<a href="javascript:void(0)" class="page-link next" title="Last" data-page="' + (+totalPages) + '">' +
                '>>' +
                '</a>' +
                '</li>';
        }
        html = '<ul class="pagination m-0">' + html + '</ul>';
        return html;
    } else {
        return '';
    }
}