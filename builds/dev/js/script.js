$(function () {
  //
  // var to = $('.contacts').offset().top;
  // $('html, body').stop().animate({
  //  scrollTop: to
  // }, 0);
  //

  // стилизация элементов форм
  //               - [all]
  $('\
    select, \
    input[type="radio"], \
    input[type="checkbox"]\
  ').styler();

  // добавление маски в текстовые поля
  //                   - [all]
  $('input[type="tel"]').inputmask('+7 (999) 999 99 99', {
    clearMaskOnLostFocus: true,
  });

  // валидация формы при отправке
  //                - [all]
  var req_rules = {
    phone:  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    mail:   /^[\w0-9\._-]+@\w+\.\w{2,4}$/,
  }
  $('.js-validate').submit(function () {
    var form = $(this),
      action = $(this).attr('action');

    form.find('*[data-req]').each(function () {
      var name = $(this).attr('name'),
        line = $(this).closest('.form__line'),
        value = $(this).val();
      if($(this).hasClass('jq-selectbox')) {
        value = $(this).find('option:selected').val();
      }

      if(req_rules[name] === undefined) {
        req_rules[name] = /^.+$/; // любой символ
      }
      if(req_rules[name].test(value)) {
        line.removeClass('form__line_invalid');
      }
      else {
        line.addClass('form__line_invalid');
        $('html, body').animate({
          scrollTop: $('.form__line_invalid:eq(0)').offset().top - 10,
        }, 300);
      }
    });

    if(form.find('.form__line_invalid').length) {
      if(window.innerWidth <= 768) {
        $('html, body').animate({
          scrollTop: $('.form__line_invalid:eq(0)').offset().top - 10,
        }, 300);
      }
      return false;
    }
  });

  // валидация формы при вводе
  //               - [all]
  $('.js-validate').on('keydown, change', '.form__line_invalid *[data-req]', function () {
    var name = $(this).attr('name'),
      value = $(this).val(),
      line = $(this).closest('.form__line');
    if(req_rules[name].test(value)) {
      line.removeClass('form__line_invalid');
    }
  });

  // перемещение по странице
  //                       - [all]
  $('.js-scroll').click(function (e) {
    var href = $(this).attr('href'),
      offsetTop = href === '#' ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
  });

  // выравнивание высоты контактов
  function contactsFix () {
    $('.js-contacts-fix').height('auto');

    if(window.innerWidth >= 992) {
      var maxHcontacts = 0;
      $('.js-contacts-fix').each(function () {
        var h = $(this).outerHeight(true);
        if(h > maxHcontacts) {
          maxHcontacts = h;
        }
      });
      $('.js-contacts-fix').outerHeight(maxHcontacts);
    }
  }
  contactsFix();

  // выравнивание высоты прайса
  function priceFix () {
    $('.js-price-fix').height('auto');

    if(window.innerWidth >= 992) {
      var maxHprice = [ 0, 0];
      $('.js-price-fix').each(function () {
        var h = $(this).outerHeight(),
          i = 0;
        if($(this).hasClass('price__options')) {
          i = 1;
        }
        if(h > maxHprice[i]) {
          maxHprice[i] = h;
        }
      });
      $('.js-price-fix').each(function () {
        var i = 0;
        if($(this).hasClass('price__options')) {
          i = 1;
        }
        $(this).outerHeight(maxHprice[i]);
      });
    }
  }
  priceFix();

  $(window).resize(function () {
    contactsFix();
  });

  // модальное окно акции
  $('.js-popup-stocks').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-fade',
      showCloseBtn: false,
      removalDelay: 300,
  });

  // слайдер акций
  //             - главная
  var owlStocks = $('.js-stocks');
  owlStocks.owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 900,
    slideBy: 1,
    nav: true,
    navContainerClass: 'owl-nav owl-nav_light',
    navText: [
      '',
      '',
    ],
    dots: false,
  });

  // добавление / удалении доп. опций к заявке
  function price_format (a) {
    return String(a).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
  }
  function connect_summary () {
    var output = $('.js-connect-summary'),
      base = output.data('base'),
      add = 0;
    $('.connect__option_active').each(function () {
      var price = Number($(this).find('.connect__option-price').html().replace('+ ', ''));
      add += price;
    });
    output.html(price_format(base + add));
    var conn_summprice = $('input[name=connect_summprice]');
    conn_summprice.val(price_format(base + add));
    // $(this).find('input[name=connect_summprice]').val();
    console.log(conn_summprice.val());
  }
  function connect_option (input) {
    if(input.prop('checked')) {
      input.closest('.connect__option').addClass('connect__option_active');
    }
    else {
      input.closest('.connect__option').removeClass('connect__option_active');
    }
  }
  $('.js-connect-option').find('input').change(function () {
    connect_option($(this));
    connect_summary();
  });
  $('.js-connect-option').find('input').each(function () {
    connect_option($(this));
  });
  connect_summary();

  // Прижатие подвала
  //          - [all]
  setTimeout(function () {
    var main = $(window).height(),
      body = $('body').outerHeight();
    if(body < main) {
      $('footer').addClass('footer_attached-bottom');
    }
  }, 100);

  // прокрутка на странице
  function pagerScroll () {
    var t = $(window).scrollTop(),
      h_header = $('.header').outerHeight(),
      loc_footer = $('.footer').offset().top - window.innerHeight;
    // скрытие хедера
    if(t > h_header && t > loc_footer && window.innerWidth >= 768) {
      $('.header').css('margin-top', loc_footer - t);
    }
    else {
      $('.header').css('margin-top', 0);
    }
  }
  $(window).scroll(function () {
    pagerScroll();
  });
  pagerScroll();
});