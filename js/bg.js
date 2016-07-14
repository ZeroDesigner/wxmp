chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.hello == "btn_del_family") {
            var bodys = document.querySelectorAll('iframe#ueditor_0')
            if(bodys&&bodys.length>0&&bodys[0].contentDocument){
                var body = bodys[0].contentDocument;
                if(body){
                    var elms = body.querySelectorAll('pre code,pre,h1,h2,h3,h4,h5,h6,p,div,span');
                    for (var i = 0; i < elms.length; i++) {
                        var styl = elms[i].getAttribute('style');
                        if(elms[i].tagName === 'PRE'){
                            elms[i].setAttribute('style','box-sizing: border-box; overflow: auto;font-size: 0.93em; padding: 1em; margin-top: 1.5em; margin-bottom: 1.5em; line-height: 1.3; word-break: break-all; word-wrap: break-word; color: rgb(51, 51, 51); border: none; border-radius: 3px; max-height: 35em; position: relative;background-color:#EDEDED;word-wrap: initial!important;-webkit-overflow-scrolling: touch;') 
                        }else if(elms[i].tagName === 'CODE'){
                            elms[i].setAttribute('style','box-sizing: border-box;font-size: 1em; color: inherit; border-radius: 0px; white-space: inherit; overflow-wrap: normal; background: none;word-wrap:normal!important;') 
                        }else{
                            if(styl){
                                styl = styl.replace(/font-family\:[\s\S]*?\;/g,'');
                                if(elms[i].tagName === 'SPAN') styl += 'word-wrap:normal!important;';
                                elms[i].setAttribute('style',styl);
                            }
                        }
                    }
                    var elms = body.querySelectorAll('p code');
                    for (var i = 0; i < elms.length; i++) {
                        if(elms[i].tagName === 'CODE'){
                            elms[i].setAttribute('style','color: #c7254e;background-color: #f9f2f4;padding: 2px 4px;border-radius: 3px;')
                        }
                    }



                }
            }
            sendResponse({ msg: '更改完毕！！' });
        }
    }
); 