# 05 常用单位vwvh

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05-前端开发常用单位-vwvh</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 10vmin;
            height: 10vmax;
            background: red;
        }
    </style>
</head>
<body>
<div></div>
<script>
    /*
    1.什么是vw(Viewport Width)和vh(Viewport Height)?
    1.1vw和vh是前端开发中的一个动态单位, 是一个相对于网页视口的单位
    1.2系统会将视口的宽度和高度分为100份,1vw就占用视口宽度的百分之一, 1vh就占用视口高度的百分之一
    1.3vw和vh和百分比不同的是, 百分比永远都是以父元素作为参考
    而vw和vh永远都是以视口作为参考

    结论: vw/vh是一个动态的单位, 会随着视口大小的变化而变化(相对单位)

    2.什么是vmin和vmax?
    vmin: vw和vh中较小的那个
    vmax: vw和vh中较大的那个
    使用场景: 保证移动开发中屏幕旋转之后尺寸不变
    * */
    console.log(window.innerWidth, window.innerHeight);
    let oDiv = document.querySelector("div");
    console.log(getComputedStyle(oDiv).width);
    console.log(getComputedStyle(oDiv).height);
</script>
</body>
</html>
```