<?php include "header.php"; ?>
<div class="top_big_banner">
    <h1>Международная транспортно-логистическая компания «Глобалтранс»</h1>
    <form action="">
        <div class="row align-items-end">
            <div class="item">
                <label for="from">Откуда</label>
                <input type="text" name="from">
            </div>
            <div class="replace__inputs">
                <img src="../assets/svg/replace__inputs.svg" class="svg" alt="">
            </div>
            <div class="item">
                <label for="to">Куда</label>
                <input type="text" name="to">
            </div>
        </div>
    </form>
</div>
<div class="container">
    <div class="row services">
        <a class="col-4">
            <div class="img" style="background-image: url('assets/img/service1.jpg')"></div>
            <div class="items">
                <h3>Морские перевозки</h3>
                <p>Описание описание описание описание описание</p>
                <button href="#" class="btn btn-white">Подробнее</button>
            </div>
        </a>
        <a class="col-4">
            <div class="img" style="background-image: url('assets/img/service2.jpg')"></div>
            <div class="items">
                <h3>Автоперевозки</h3>
                <p>Описание описание описание описание описание</p>
                <button href="#" class="btn btn-white">Подробнее</button>
            </div>
        </a>
        <a class="col-4">
            <div class="img" style="background-image: url('assets/img/service3.jpg')"></div>
            <div class="items">
                <h3>Авиаперевозки</h3>
                <p>Описание описание описание описание описание</p>
                <button href="#" class="btn btn-white">Подробнее</button>
            </div>
        </a>
        <a class="col-12">
            <div class="img" style="background-image: url('assets/img/service4.jpg')"></div>
            <div class="items">
                <h3>Железнодорожные перевозки</h3>
                <p>Описание описание описание описание описание описание описание описание описание описание описание
                    описание описание описание</p>
                <button href="#" class="btn btn-white">Подробнее</button>
            </div>
        </a>
        <div class="col-12">
            <a href="#" class="btn__all_services">
                Смотреть все услуги
            </a>
        </div>
    </div>
</div>
<?php include "footer.php"; ?>