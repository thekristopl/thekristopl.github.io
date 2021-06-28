function loadLanguage (lang) {
    $.each( lang, function( id, txt ) {
        $(".text-" + id).html(txt);
    });
}


function loadPolish () {
    $.getJSON("resources/pl.json", function (json) {
        loadLanguage(json);
    }).fail(function (){
        alert("Nie można załadować języka polskiego :/");
    });
}

function loadEnglish () {
    $.getJSON("resources/en.json", function (json) {
        loadLanguage(json);
    }).fail(function (){
        alert("Can not load english language :/");
    });
}

$('#switch-to-polish').on('click', loadPolish);
$('#switch-to-english').on('click', loadEnglish);



