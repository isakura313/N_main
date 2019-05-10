<footer>
    <div class="wrap_footer_head column is-full">
        <h3 class="wrap_footer_head_h3  has-text-centered">Форма обратной связи</h3>
        <h5 class="wrap_footer_head_h5  has-text-centered">Здесь можно договориться о встрече или задать
            интересующий вас вопрос</h5>
    </div>
    <div class="columns main_form">
        <div class="field column is-5">
            <form action="form.inc.php" method="GET">
                <div class="control has-icons-left input_first">
                    <input name="name" class="input is-medium" type="text" placeholder="Ваше имя" maxlength="15" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </div>
                <div  class="control has-icons-left input_first">
                    <input name="email" class="input is-medium" type="text" placeholder="Ваша почта" maxlength="30" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
                <div class="control has-icons-left input_first">
                    <input  name="telephone" class="input is-medium" type="text" placeholder="Ваш телефон" maxlength="15" required>
                    <span class="icon is-small is-left ">
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                </div>
        </div>
        <div class="column is-5 ">
            <textarea class="textarea is-medium" name="message" id="texta" rows="6" cols="40"
                placeholder="Тема обращения" required></textarea>
            <input type="submit" class="button is-pulled-right" value="Отправить">
            </form>
        </div>
    </div>
    <div class="footer_low_wrapper columns">
        <div class="text_right column is-four-fifths">
            <p> &copy; 2018 yakupoff </p>
            <p>All Rights Reserved</p>
        </div>
        <div class="social_icons column">
            <a href="mailto:n.chizhikova25@gmail.com"> <img src="img/footer_envelope.png" alt="письмо"></a>
            <a href="https://t-do.ru/NataliaChizhikova"> <img src="img/footer_telegram.png" alt="telegram"></a>
            <a href="https://www.facebook.com/profile.php?id=100001813093691"> <img
                    src="img/footer_facebook — копия.png" alt=""></a>
        </div>
    </div>
</footer>
</body>
</html>