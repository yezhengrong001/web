$(function(){
    $(".tabs-item:first-child").click(function(){
        $(".tabs-panel-item:first-child").show()
        $(".tabs-panel-item:last-child").hide()
    })
    $(".tabs-item:last-child").click(function(){
        $(".tabs-panel-item:first-child").hide()
        $(".tabs-panel-item:last-child").show()
    })
})