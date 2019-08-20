!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.goma=a():e.goma=a()}(window,function(){return function(e){var a={};function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(l,n,function(a){return e[a]}.bind(null,n));return l},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=1)}([function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(0);var l={activeShape:null,labelInfo:{imagePath:null,baseName:null,imageData:null,shapes:[],imageWidth:null,imageHeight:null},currentLabel:null,isDrawing:!1,isMouseDown:!1};let n=e=>{e.preventDefault();let a=e.dataTransfer.files[0];if(!a||-1===a.type.indexOf("image"))return;w.appEl.classList.add("GOMA_LABEL");let t=new FileReader;t.onloadend=e=>{l.labelInfo.imageData=t.result,w.statusEl.style="",w.statusEl.innerText="",u()},t.readAsDataURL(a)},i=e=>{w.statusEl.innerText="拖拽一张图片到这里"},s=e=>{e.preventDefault(),w.statusEl.innerText="可以松手了"},r=e=>{e.preventDefault();let a={x:e.offsetX,y:e.offsetY};l.isMouseDown=!0,0==e.button&&(l.isDrawing?y(a):M(a))},c=e=>{e.preventDefault();let a={x:e.offsetX,y:e.offsetY};if(l.isDrawing){var t=l.currentLabel.points;t[t.length-1]=[a.x,a.y],I()}},o=e=>{e.preventDefault(),l.isMouseDown=!0},p=e=>{e.preventDefault(),2==e.button&&C()},d=e=>{let a=e.target,t={deleteLabel:function(e,a){let t=a.parentNode,n=t.dataset.labelTimestamp;l.labelInfo.shapes.forEach(function(e,a){e.timestamp==n&&(l.labelInfo.shapes.splice(a,1),t.parentNode.removeChild(t),I(),x())})},selectLabel:function(e,a){L();let t=a.dataset.labelTimestamp;a.classList.add("active"),l.labelInfo.shapes.forEach(function(e,a){e.timestamp==t&&(l.activeShape=e,I())});let n=l.activeShape;w.statusEl.innerHTML=`<span>[${n.name||"未命名标记"}]  宽=${n.width}像素  高=${n.height}像素  距左=${n.left}像素  距顶=${n.top}像素  </span><a href="${n.imageData}" class="download" download="${n.name||"未命名标记"}.png">下载图片</a>`},showInput:function(e,a){w.statusEl.innerText="";let t=window.prompt("输入标注内容：",a.innerText);if(!t)return;t=(t=t.replace(/^\s+|\s$/g,"")).replace(/</g,"&lt;");let n=a.parentNode.dataset.labelTimestamp;return l.labelInfo.shapes.forEach(function(e,l){e.timestamp==n&&(e.name=t,a.innerText=t)}),"stop"}};for(;void 0!==a;){if(!a)return;let l=a.dataset&&a.dataset.feat;if("stop"===(l&&t.hasOwnProperty(l)&&t[l](e,a)))return;a=a.parentNode}},h=e=>{var a=e.keyCode||e.which||e.charCode;81==a&&(e.preventDefault(),C()),(e.ctrlKey||e.metaKey&&90==a)&&(e.preventDefault(),D())},v=(e,a)=>{let t=new Image;t.src=e,t.onload=()=>{a&&a(t)}},u=()=>{(e=>{w.labelImagesWrapEl.innerHTML="",E(a=>{l.labelInfo.shapes=[],e&&e(a)})})(e=>{f(),m(),I(),b(e),g(),w.canvasWrapEl.classList.add("show")})},m=()=>{l.imgCtx.clearRect(0,0,w.imgCanvasEl.width,w.imgCanvasEl.height),l.labelCtx.clearRect(0,0,w.labelCanvasEl.height,w.labelCanvasEl.height)},f=e=>{let a=l.labelInfo.imageWidth,t=l.labelInfo.imageHeight,n=w.imgCanvasEl,i=w.labelCanvasEl,s=w.canvasWrapEl;n.width=i.width=a,n.height=i.height=t,n.style.width=s.style.width=i.style.width=a+"px",n.style.height=s.style.height=i.style.height=t+"px"},g=()=>{var e="";l.labelInfo.shapes.forEach(function(a,t){e+='<div data-feat="selectLabel" data-label-timestamp="'+a.timestamp+'" class="labelImage" id="label_'+a.timestamp+'"><div class="label-img-wrap"><img src="'+a.imageData+'"/></div><div class="label-name" data-feat="showInput"><span>'+(a.name||"未命名标记")+'</span></div><div data-feat="deleteLabel" class="delete-label"><svg width="14" height="14" viewBox="0 0 20 20"><path fill="#000000" d="M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z"></path><path fill="#000000" d="M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path><path fill="#000000" d="M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path><path fill="#000000" d="M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path></svg></div></div>'}),w.labelImagesWrapEl.innerHTML=e},b=e=>{var a=l.imgCtx;a.save(),a.clearRect(0,0,a.canvas.width,a.canvas.height),a.drawImage(e,0,0),a.restore()},E=e=>{v(l.labelInfo.imageData,a=>{setTimeout(()=>{l.labelInfo.imageWidth=a.width,l.labelInfo.imageHeight=a.height,e&&e(a)},300)})},w={},y=e=>{var a=l.currentLabel.points;2==a.length&&a[0][0]==e.x&&a[0][1]==e.y||(a[a.length-1]=[e.x,e.y],l.currentLabel.points.push([e.x,e.y]),a.length>3&&((()=>{if(!l.currentLabel)return;let e=l.currentLabel,a=e.points;if(a.length<=3)return;let t=[],n=[];a.map(function(e,a){t.push(e[0]),n.push(e[1])});let i=e.left=Math.min.apply(null,t),s=e.top=Math.min.apply(null,n),r=w.cacheCanvasEl.width=e.width=Math.max.apply(null,t)-i,c=w.cacheCanvasEl.height=e.height=Math.max.apply(null,n)-s;l.cacheCtx.clearRect(0,0,r,c);let o=l.imgCtx.getImageData(i,s,r,c);l.cacheCtx.putImageData(o,0,0),e.imageData=w.cacheCanvasEl.toDataURL()})(),I(),(e=>{if(e){var a=w.labelImagesWrapEl.querySelector("#label_"+e.timestamp);a||((a=document.createElement("div")).setAttribute("data-feat","selectLabel"),a.setAttribute("data-label-timestamp",e.timestamp),a.classList.add("labelImage"),a.setAttribute("id","label_"+e.timestamp),a.innerHTML='<div class="label-img-wrap"></div><div data-feat="showInput" class="label-name"><span>'+(e.name||"未命名标记")+'</span></div><div data-feat="deleteLabel" class="delete-label"><svg width="14" height="14" viewBox="0 0 20 20"><path fill="#000000" d="M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z"></path><path fill="#000000" d="M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path><path fill="#000000" d="M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path><path fill="#000000" d="M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path></svg></div>',w.labelImagesWrapEl.appendChild(a)),e.imageData&&v(e.imageData,function(t){var n=w.cacheCanvasEl,i=l.cacheCtx,s=e.points;i.save(),n.width=e.width,n.height=e.height,i.clearRect(0,0,n.width,n.height),i.beginPath();for(var r=0;r<s.length;r++){var c=s[r],o=c[0]-e.left,p=c[1]-e.top;0!=r?i.lineTo(o,p):i.moveTo(o,p)}i.closePath(),i.clip(),i.drawImage(t,0,0),i.restore();var d=n.toDataURL();(t=a.querySelector(".label-img-wrap").querySelector("img"))?a.querySelector("img").src=d:t=a.querySelector(".label-img-wrap").innerHTML='<img src="'+d+'"/>',e.imageData=d})}})(l.currentLabel)))},x=()=>{let e=l.labelInfo.shapes;for(let a=0;a<e.length;a++){e[a].label=a+""}let a=JSON.stringify(l.labelInfo),t=new FormData;t.append("data",a),t.append("imagePath",l.labelInfo.imagePath),((e,a,t)=>{let l=new XMLHttpRequest;l.responseType="json",l.onreadystatechange=()=>{200==l.status&&4==l.readyState&&t&&t(l)},a?l.open("POST",e,!0):l.open("GET",e,!0),l.send(a)})("/api/writefile/label",t,function(e){e.response.filename})},C=()=>{if(!l.isDrawing)return;let e=l.currentLabel,a=e.points;if(a.length<=3){l.labelInfo.shapes.splice(l.labelInfo.shapes.indexOf(e),1);let a=w.labelImagesWrapEl.querySelector("#label_"+e.timestamp);a&&a.parentNode.removeChild(a),I()}else a.splice(a.length-1,1),I();l.currentLabel=null,l.isDrawing=!1},I=()=>{let e=l.labelCtx;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.save(),e.lineWidth=1,e.lineJoin="round",e.fillStyle="hsla(60, 100%, 50%, .1)",e.strokeStyle="hsla(60, 100%, 50%, 1)";let a=l.labelInfo.shapes;for(var t=0;t<a.length;t++){let s=a[t];e.save(),l.activeShape&&l.activeShape===s&&(e.lineWidth=2,e.strokeStyle="hsla(0, 100%, 60%, 1)",e.fillStyle="hsla(0, 100%, 50%, .2)");let r=s.points;e.beginPath();for(var n=0;n<r.length;n++){var i=r[n];0==n?e.moveTo(i[0],i[1]):e.lineTo(i[0],i[1])}e.closePath(),e.fill(),e.stroke(),e.restore()}e.restore()},L=()=>{l.activeShape=null;let e=w.labelImagesWrapEl.querySelector(".labelImage.active");e&&e.classList.remove("active")},M=e=>{L(),l.isDrawing=!0,l.currentLabel={left:e.x,top:e.y,width:0,height:0,timestamp:(new Date).valueOf(),points:[[e.x,e.y],[e.x,e.y]],imageData:null},l.labelInfo.shapes.push(l.currentLabel),I()},D=()=>{if(l.isDrawing){var e=l.currentLabel.points;e.length<=2||(e.splice(e.length-2,1),I())}};t.d(a,"label",function(){return W});let W=(e,a)=>{(e=>{w.appEl=e,w.appEl.style="position:fixed;top:0;left:0;width:100%;height:100%;",w.statusEl=document.createElement("div"),w.statusEl.setAttribute("id","status"),w.appEl.appendChild(w.statusEl),w.statusEl.style="position:fixed;top:5%;text-align:center;left:0;width:100%;",w.statusEl.innerText="拖拽一张图片到这里",w.canvasMainEl=document.createElement("div"),w.canvasMainEl.setAttribute("id","canvasMain"),w.appEl.appendChild(w.canvasMainEl),w.canvasWrapEl=document.createElement("div"),w.canvasWrapEl.setAttribute("id","canvasWrap"),w.canvasMainEl.appendChild(w.canvasWrapEl),w.imgCanvasEl=document.createElement("canvas"),w.imgCanvasEl.setAttribute("id","imgCanvas"),w.imgCanvasEl.style.zIndex=1,l.imgCtx=w.imgCanvasEl.getContext("2d"),w.canvasWrapEl.appendChild(w.imgCanvasEl),w.labelCanvasEl=document.createElement("canvas"),w.labelCanvasEl.setAttribute("id","labelCanvas"),w.labelCanvasEl.style.zIndex=2,l.labelCtx=w.labelCanvasEl.getContext("2d"),w.canvasWrapEl.appendChild(w.labelCanvasEl),w.labelPanelEl=document.createElement("div"),w.labelPanelEl.setAttribute("id","labelPanel"),w.appEl.appendChild(w.labelPanelEl),w.labelImagesWrapEl=document.createElement("div"),w.labelImagesWrapEl.setAttribute("id","labelImagesWrap"),w.labelPanelEl.appendChild(w.labelImagesWrapEl),w.cacheCanvasEl=document.createElement("canvas"),l.cacheCtx=w.cacheCanvasEl.getContext("2d")})(e),w.appEl.addEventListener("dragover",s),w.appEl.addEventListener("dragleave",i),w.appEl.addEventListener("drop",n),w.canvasWrapEl.addEventListener("mousedown",r),w.canvasWrapEl.addEventListener("mousemove",c),w.canvasWrapEl.addEventListener("mouseup",o),w.canvasWrapEl.addEventListener("contextmenu",p),w.labelImagesWrapEl.addEventListener("click",d),window.addEventListener("keydown",h)}}])});