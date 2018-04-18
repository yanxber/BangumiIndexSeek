// ==UserScript==
// @name         Bangumi 查看指定目录(仮)
// @namespace    https://bgm.tv/user/yanber
// @version      1.0
// @description  查看指定章节/角色/人物的收藏目录
// @author       yanber
// @include      /^https?:\/\/(bgm\.tv|chii\.in|bangumi\.tv)\/(character|person|ep)\/\d+$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let base = window.location.protocol+'//'+window.location.host;
    let path = window.location.pathname.split('/');
    let catg = path[1];
    let id = path[2];
    if(catg == 'ep') $(`#columnEpA>div.epDesc>span`).append(` / <a href=${base}/subject/${id}/index>收藏本章节的目录</a>`);
    else{
        let type = (catg == 'character') ? '角色': '人物';
        $(`#crtPanelCollect>a`).after(` &nbsp;<a href=${base}/subject/${id}/index class='l'>收藏本${type}的目录 »</a>`);
    }
})();
