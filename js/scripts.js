$(function(){
    //aqui vai todo o código de JS
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        //listaMenu.slideToggle();

        if(listaMenu.is(":hidden") == true){
            //var icone = $('.botao-menu-mobile i');
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas fa-bars');
            icone.addClass('fas fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas fa-times');
            icone.addClass('fas fa-bars');
            listaMenu.slideToggle();
        }

        //carregando page em tempo real
        carregarDinamico();
        function carregarDinamico(){
            $('[realtime]').click(function(){
                var pagina = $(this).attr('realtine');
                $('.container-principal').hide();
                $('.container-principal').load(INCLUDE_PATH+'pages/'+pagina+'.php');

                setTimeout(function(){
                    initialize();
                    addMarker(-22.924990, -43.234140,'',"minha casa",undefined,false);
                },1000);
                
                $('.container-principal').fadeIn(1000);
                
                return false;
            })
        }


    })

    if($('target').length > 0){
        //o elemento existe, portanto precisamos dar o scroll em algum elemento
        var elemento = '#'+$('target').attr('target');
        var divScroll = $(elemento).offset().top;
        $('html,body').animate({scrollTop:divScroll},2000);
    }
           
})