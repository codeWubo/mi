/* jquery 轮播 */
$(function () {
    function changeImg(num) {
      /* 
      eq() 方法返回带有被选元素的指定索引号的元素。 
      fadeIn() 方法逐渐改变被选元素的不透明度，从隐藏到可见（褪色效果）。
      siblings() 方法返回被选元素的所有同级元素。
      fadeOut() 方法逐渐改变被选元素的不透明度，从可见到隐藏（褪色效果）。
      */
      $(".img li").eq(num).fadeIn().siblings().fadeOut();
      $(".focus span")
        .eq(num)
        .addClass("content")
        .siblings()
        .removeClass("content");
    }

    var num = 0;
    //1、实现自动播放
    var timer = 0;

    function autoPlay() {
      timer = setInterval(function () {
        num++;
        num = num == 5 ? 0 : num;
        /*num = (num==7?0:num);*/
        changeImg(num);
      }, 6000);
    }
    autoPlay();
    $(".head-son3")
      .mouseenter(function () {
        clearInterval(timer);
      })
      .mouseleave(function () {
        clearInterval(timer);
        autoPlay();
      });

    //4、点击左右的箭头，切换图片
    $(".head-son3 .left").click(function () {
      num--;
      num = num == -1 ? 4 : num;
      changeImg(num);
    });
    $(".head-son3 .right").click(function () {
      num++;
      num = num == 5 ? 0 : num;
      changeImg(num);
    });
    $(".head-son3 .focus span").click(function () {
      num = $(this).index();
      changeImg(num);
    });
  });

  /* input焦点事件 */
  let search = document.getElementById("input-id");
  let search2 = document.getElementsByClassName("search");
  search.onclick = function (e) {
    e = e || window.event;
    var o = e.hover() || e.getElementsByClassName("jiaodiandiushi"); //当前点击对象
    if (o != search && o != search2) {
      document.getElementsByClassName("search").style.display = "none";
    }
  }

  /* onmouseover事件 导航栏切换  JS还在学习  没有代码重用12345思路一样 */
  window.onload = function () {
    /* 1 */
    var lis1 = document.getElementsByClassName("hot1");
    var nav1 = document.getElementsByClassName("tab-cut1");
    for (var i = 0; i < lis1.length; i++) {
      lis1[i].num = i; //给每一个标签加序号
      lis1[i].onmouseover = function () {
        for (var k = 0; k < lis1.length; k++) {
          lis1[k].classList.remove("hot-active");
        }
        lis1[this.num].classList.add("hot-active");
        for (var j = 0; j < nav1.length; j++) {
          nav1[j].style.display = 'none';
        }
        nav1[this.num].style.display = 'block';
      }
    }
    /* 2 */
    var lis2 = document.getElementsByClassName("hot2");
    var nav2 = document.getElementsByClassName("tab-cut2");
    for (var i = 0; i < lis2.length; i++) {
      lis2[i].num = i; //给每一个标签加序号
      lis2[i].onmouseover = function () {
        for (var k = 0; k < lis2.length; k++) {
          lis2[k].classList.remove("hot-active");
        }
        lis2[this.num].classList.add("hot-active");
        for (var j = 0; j < nav2.length; j++) {
          nav2[j].style.display = 'none';
        }
        nav2[this.num].style.display = 'block';
      }
    }
    /* 3 */
    var lis3 = document.getElementsByClassName("hot3");
    var nav3 = document.getElementsByClassName("tab-cut3");
    for (var i = 0; i < lis3.length; i++) {
      lis3[i].num = i; //给每一个标签加序号
      lis3[i].onmouseover = function () {
        for (var k = 0; k < lis3.length; k++) {
          lis3[k].classList.remove("hot-active");
        }
        lis3[this.num].classList.add("hot-active");
        for (var j = 0; j < nav3.length; j++) {
          nav3[j].style.display = 'none';
        }
        nav3[this.num].style.display = 'block';
      }
    }
    /* 4 */
    var lis4 = document.getElementsByClassName("hot4");
    var nav4 = document.getElementsByClassName("tab-cut4");
    for (var i = 0; i < lis4.length; i++) {
      lis4[i].num = i; //给每一个标签加序号
      lis4[i].onmouseover = function () {
        for (var k = 0; k < lis4.length; k++) {
          lis4[k].classList.remove("hot-active");
        }
        lis4[this.num].classList.add("hot-active");
        for (var j = 0; j < nav4.length; j++) {
          nav4[j].style.display = 'none';
        }
        nav4[this.num].style.display = 'block';
      }
    }

    /* 5 */
    var lis5 = document.getElementsByClassName("hot5");
    var nav5 = document.getElementsByClassName("tab-cut5");
    for (var i = 0; i < lis5.length; i++) {
      lis5[i].num = i; //给每一个标签加序号
      lis5[i].onmouseover = function () {
        for (var k = 0; k < lis5.length; k++) {
          lis5[k].classList.remove("hot-active");
        }
        lis5[this.num].classList.add("hot-active");
        for (var j = 0; j < nav5.length; j++) {
          nav5[j].style.display = 'none';
        }
        nav5[this.num].style.display = 'block';
      }
    }
  }

  /* bottom-message-5 and  bottom-message-6 switchover*/
  var imgs = ["bottom-message5.png", "bottom-message6.png"]; //（设定想要显示的图片）
  var x = 0;

  function time1() {
    x++;
    x = x % 2; //         超过2则取余数，保证循环在0、1、2之间
    document.getElementById("switchover").src = "image/" + imgs[x];
  }
  setInterval("time1()", 3000);

  /* Jquery 返回顶部  检测垂直高度，让元素显示出来  官网思路应该是到达高度后在盒子里添加一个返回顶部盒子*/
  $(function () {
        $(window).on('scroll', function () {
          var w = $(document).scrollTop(); //获取滚动条到顶部的垂直高度
          if (w >= 1100) {
            $("#re-top").show();
          } else {
            $("#re-top").hide();

          }
        });
  });