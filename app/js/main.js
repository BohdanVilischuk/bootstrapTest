 $('.mobile-menu__toggler').click(function(){
        $('ul.navigation-items').toggleClass('active')
        $('.icon-bar').toggleClass('active')
        $("body").toggleClass('hidden')
})