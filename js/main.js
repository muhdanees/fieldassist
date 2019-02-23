$(document).ready(function () {

    var $tab = $(".tab-list li");
    $tab.on("click", function () {
        $tab.removeClass("active");
        $(this).addClass("active");
        $(".tab-content .tab-content-area")
            .hide()
            .eq($(this).index())
            .show();
    });

    // Second Tabs
    var $innerTab = $(".innertab-list li");
    $innerTab.on("click", function () {
        $innerTab.removeClass("active");
        $(this).addClass("active");
        $(".innertab-content .innertab-content-area")
            .hide()
            .eq($(this).index())
            .show();
    });


    $.get('js/resource.json', function(data){
        console.log(data)
    });

});