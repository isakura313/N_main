<?php
require_once($_SERVER['DOCUMENT_ROOT'].'config.inc.php');

?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(53379829, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true
    });
 </script>
 <noscript><div><img src="https://mc.yandex.ru/watch/53379829" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
 <!-- /Yandex.Metrika counter -->
    <meta charset="UTF-8">
    <meta name="description" content="Психолог Наталья Чижикова">
    <?php
     $key = implode(", ", $keywords );
     echo "<meta name='keywords' content='$key '>";
    ?>

    <meta name="author" content="Наталья Чижикова">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Сайт психолога Наталья Чижиковой</title>
    <link rel="icon" type="image/png" href="favicon.png" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif|Playfair+Display" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js" defer></script>
    <script src="js/mag.js" defer></script>
    <script src="js/code.js" defer></script>
    <meta name="yandex-verification" content="7af08bf7ced9261a" />
</head>
<body>
    <div class="columns">
        <div class="logo_header column">
            <a href="index.php" class="logo_header__a">
                <h2 class="logo_header__h2 is-size-4-desktop">Наталья Чижикова</h2>
            </a>
            <h1 class="logo_header__h1">КЛИНИЧЕСКИЙ ПСИХОЛОГ, ПСИХОЛОГ-КОНСУЛЬТАНТ, ПСИХОТЕРАПЕВТ</h1>
        </div>
    </div>
    <div class="wrapper_nav is-size-4-desktop is-size-4-fullhd is-5-tablet is-5-mobile">
        <nav class="navigation navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="psy_nav">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="psy_nav" class="navbar-menu "> <a href="index.php" class="navbar-item"> главная</a>
                                                    <a href="about.php" class="navbar-item">oбо мне</a>
                                                    <a href="psychotherapy.php" class="navbar-item">о психотерапии</a>
                                                    <a href="method.php" class="navbar-item">о подходе</a>
                                                    <a href="materials.php" class="navbar-item">полезные материалы </a>
                                                    <a href="contacts.php" class="navbar-item">контакты</a>
            </div>
        </nav>
    </div>
    

