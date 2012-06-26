// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function(){
    // search button state
    $('#search-btn')
        .click(function () {
            var btn = $(this)
            btn.button('loading')
        })
    // override yandex share api for anticached version
    new Ya.share({
        element: 'ya_share',
        elementStyle: {
            'type': 'none',
            'quickServices': ['facebook,twitter,vkontakte,odnoklassniki']
        },
        title: 'Антиагент',
        description: 'Вычисли агента по номеру телефона!',
        link: 'http://antiagent.herokuapp.com/',
        image: 'http://antiagent.herokuapp.com/assets/aa-logo.png',
        serviceSpecific: {
            twitter: {
                title: 'Антиагент - вычисли агента по номеру телефона!'
            }
        }
    });
});