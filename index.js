function my(id) {
    return document.getElementById(id);
}

window.onscroll = function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 68) {
        // console.log("456")
        // my("nav").style.marginTop = "68px";
        my("nav").style.position = "fixed";
        my("nav").style.top = 0;
        my("nav").style.zIndex = 120;
        my("im").style.marginTop = "68px";
    } else {
        my("nav").style.position = "relative";
        my("header").style.top = 0;
        my("im").style.marginTop = "";
    }
}


// console.log(document.body.offsetHeight);
// 点击菜单
function showdiv() {
    // 返回顶部
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.body.style.height = "document.body.offsetHeight";
    document.body.style.overflow = "hidden";
    my("bd").style.marginLeft = "280px";
    document.getElementById("bg").style.display = "block";
    document.getElementById("show").style.display = "block";
}
function hidediv() {
    document.getElementById("bg").style.display = 'none';
    document.getElementById("show").style.display = 'none';
    document.body.style.overflow = "";
    my("bd").style.marginLeft = "";
}

// 点击搜索
my("nav_search").onclick = function () {
    my("nav_search_in").style.display = "block";
    my("nav_search_x").style.display = "block";
}

my("nav_search_x").onclick = function () {
    my("nav_search_in").style.display = "none";
    my("nav_search_x").style.display = "none";
}




// hover前端工具
var nav_rightl_a = my("nav_rightl").children[0];
var nav_rightl_ul = my("nav_rightl").children[1];
// console.log(my("nav_rightl"));
// console.log(nav_rightl_a);
// console.log(nav_rightl_ul);
nav_rightl_a.onmouseover = function () {
    my("nav_rightl").style.borderColor = "#49c5b6";
    nav_rightl_a.children[0].style.color = "#49c5b6";
    nav_rightl_a.children[1].style.color = "#49c5b6";
    nav_rightr_ul.style.display = "none";
}

nav_rightl_a.onmouseout = function () {
    my("nav_rightl").style.borderColor = "black";
    nav_rightl_a.children[0].style.color = "#000";
    nav_rightl_a.children[1].style.color = "#000";
}

nav_rightl_a.onclick = function () {
    if (nav_rightl_ul.style.display == "none") {
        nav_rightl_ul.style.display = "block";
        nav_rightl_a.children[1].innerHTML = "&#xe619";
        count++;
    } else {
        nav_rightl_ul.style.display = "none";
        nav_rightl_a.children[1].innerHTML = "&#xe617;";
        count = 1;
    }
}

// hover前端时间
var nav_rightr_a = my("nav_rightr").children[0];
var nav_rightr_ul = my("nav_rightr").children[1];
// console.log(my("nav_rightl"));
// console.log(nav_rightl_a);
// console.log(nav_rightr_ul);
nav_rightr_a.onmouseover = function () {
    my("nav_rightr").style.borderColor = "#49c5b6";
    nav_rightr_a.children[0].style.color = "#49c5b6";
    nav_rightr_a.children[1].style.color = "#49c5b6";
    nav_rightl_ul.style.display = "none";
    nav_rightl_a.children[1].innerHTML = "&#xe617;";
}

nav_rightr_a.onmouseout = function () {
    my("nav_rightr").style.borderColor = "black";
    nav_rightr_a.children[0].style.color = "#000";
    nav_rightr_a.children[1].style.color = "#000";
}

nav_rightr_a.onclick = function () {
    if (nav_rightr_ul.style.display == "none") {
        nav_rightr_ul.style.display = "block";
        count++;
    } else {
        nav_rightr_ul.style.display = "none";
        count = 1;
    }
}

// 轮播图
my("lb_d1").onclick = function () {
    my("inner").children[0].src = "images/1 (1).png";
}

my("lb_d2").onclick = function () {
    my("inner").children[0].src = "images/1 (2).png";
}

my("lb_d3").onclick = function () {
    my("inner").children[0].src = "images/1 (3).png";
}

// 图片自动播放
var img_count = 2;
function f1() {
    if (img_count < 4) {
        my("inner").children[0].src = "images/1 (" + img_count + ").png";
    } else {
        img_count = 0;
    }
    // console.log("123");
    img_count++;

}
var timeId = setInterval(f1, 10000);

my("box").onmouseover = function () {
    clearInterval(timeId);
};
my("box").onmouseout = function () {
    timeId = setInterval(f1, 10000);
};



// 获取ul
var uls = my("z_main_img").children[0];
// 获取ul下所有的li
var list_obj = uls.getElementsByTagName('li');
for (var i = 0; i <= list_obj.length; i++) {

    (function (i) {
        // 鼠标经过happynewyear图片
        list_obj[i].children[2].onmouseover = function () {
            // lis[i].children[2].style.backgroundColor = "black";
            list_obj[i].children[0].style.display = "block";
        }
        list_obj[i].children[2].onmouseout = function () {
            // lis[i].children[2].style.backgroundColor = "red";
            list_obj[i].children[0].style.display = "none";
        }

        // 鼠标经过头像时
        list_obj[i].children[6].children[0].onmouseover = function () {
            // lis[i].children[2].style.backgroundColor = "black";
            list_obj[i].children[1].style.display = "block";
        }
        list_obj[i].children[6].children[0].onmouseout = function () {
            // lis[i].children[2].style.backgroundColor = "red";
            list_obj[i].children[1].style.display = "none";
        }
    })(i);
}




