var a=document.querySelectorAll(".info-item-mod>div>span");
var b=[]
for(var m of a){
    b.push(m.innerHTML);
}
b;
// 获取内容
var aa=document.querySelectorAll(".info-item-mod>div>div");
var cc=[];
for(var n of aa){
    for(var m of n.children){cc.push(m.innerHTML)};
    console.log(cc);
    cc=[];
}

// 获取<img>图片
// img的src可能为空
var img=document.querySelectorAll("body img");
var imgs=[];
for (var k in img){
    if(img[k].src!="" && img[k].src!=undefined){
        var imgss={};
        imgss.id=Number(k)+1;
        imgss.src=img[k].src
        imgs.push(imgss);
    };
};
console.log(imgs);

