# 04 常用单位rem

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>04-前端开发常用单位-rem</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html{
            font-size: 12px;
        }
        .father{
            /*font-size: 15px;*/
        }
        .son{
            /*font-size: 12px;*/
            width: 10rem;
            height: 10rem;
            background: blue;
        }
    </style>
</head>
<body>
<div class="father">
    <div class="son"></div>
</div>
<script>
    /*
    1.什么是rem?
    rem就是root em, 和em是前端开发中的一个动态单位,
    rem和em的区别在于, rem是一个相对于根元素字体大小的单位
    例如 根元素(html) font-size: 12px; ,那么1em就等于12px

    2.rem特点
    2.1除了根元素以外, 其它祖先元素的字体大小不会影响rem尺寸
    2.2如果根元素设置了字体大小, 那么就相对于根元素的字体大小
    2.3如果根元素没有设置字体大小, 那么就相对于浏览器默认的字体大小

    结论: rem是一个动态的单位, 会随着根元素字体大小的变化而变化(相对单位)
    * */
</script>
</body>
</html>
```