$("body").css("background","red")



$(window).on("load",function(){
    $(".grid-photos").show();
    $(".grid-photos").GridHorizontal({
        item: ".item",
        minWidth: 400,
        maxRowHeight: 350,
        gutter: 4
    })
})