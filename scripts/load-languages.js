function loadLanguage (lang) {
    $.each( lang, function( id, txt ) {
        $(".text-" + id).html(txt);
    });
}


function loadPolish () {
    $.getJSON("resources/pl.json", function (json) {
        loadLanguage(json);
        $("html").attr('lang', 'pl');
    }).fail(function (){
        alert("Nie można załadować języka polskiego :/");
    });


}

function loadEnglish () {
    $.getJSON("resources/en.json", function (json) {
        loadLanguage(json);
        $("html").attr('lang', 'en');
    }).fail(function (){
        alert("Can not load english language :/");
    });
}

$('#polish-btn').on('click', loadPolish);

$('#english-btn').on('click', loadEnglish);



