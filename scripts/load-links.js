function loadLinksFromJson(lang) {
    $.each( lang, function( id, txt ) {
        $(".link-" + id).attr("href", txt);
    });
}

function loadLinks () {
    $.getJSON("resources/links.json", function (json) {
        loadLinksFromJson(json);
    }).fail(function (){
        alert("Can not load links :/");
    });
}