$(function() {
    $('.navbar a').smoothScroll();

    $(document).on('click', '.nav-item a', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});
