/**
 * Redirection to internal youtube module.
 */
(function(){
    
    main_menu.add('YouTube', [], 'mm_ico_youtube.png', function(){

        var params = '';

        if (stb.user['web_proxy_host']){
            params += '?proxy=http://';
            if (stb.user['web_proxy_user']){
                params += stb.user['web_proxy_user']+':'+stb.user['web_proxy_pass']+'@';
            }
            params += stb.user['web_proxy_host']+':' +stb.user['web_proxy_port'];
        }

        stb.setFrontPanel('.');
        window.location = '/' + stb.portal_path + '/external/youtube/index.html'+params;
    }, {layer_name : "youtube"});

    loader.next();
})();