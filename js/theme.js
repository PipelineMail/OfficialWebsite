/*
 Theme Name: Payloan
 Theme URI: 
 Author: 
 Author URI: 
 Description: Payloan - Banking & Business Loan HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */
/*=======================================================================
 [Table of contents]
 ========================================================================
 1. Revolution Slider
 2. Bact To Top
 3. Related Blog Post
 4. Customer Slider
 5. Image Full Width
 6. Portfolio Suffle js
 7. Related Folio Slider
 8. Google Map
 9. Team Slider
 10. Loan Calculation
 11. Fixed Header
 12. Preloder
 13. Contact From Submit
 14. Mobile Menu
 */


(function ($) {
    'use strict';

    /*--------------------------------------------------------
     / 1. Revolution Slider
     /----------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 7000,
        responsiveLevels: [1400, 1200, 1140, 778, 480],
        gridwidth: [1140, 1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: false
            }
        }
    });

    /*--------------------------------------------------------
     / 2. Bact To Top
     /---------------------------------------------------------*/
    $("body, html").on("click", "#backTo", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /*--------------------------------------------------------
     / 3. Related Blog Post
     /---------------------------------------------------------*/
    if ($('.related_post_slide').length > 0) {
        $('.related_post_slide').owlCarousel({
            items: 2,
            margin: 60,
            autoplay: false,
            nav: true,
            navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 4. Customer Slider
     /---------------------------------------------------------*/
    if ($('.customer_area').length > 0) {
        $('.customer_area').owlCarousel({
            items: 1,
            margin: 0,
            autoplay: false,
            nav: true,
            navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
            dots: false
        });
    }

    /*--------------------------------------------------------
     / 5. Image Full Width
     /---------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d
            }
            $this.css(styles)
        })
    }
    tw_stretch();

    /*--------------------------------------------------------
     / 6. Portfolio Suffle js
     /---------------------------------------------------------*/
    if ($("#grid_suffle").length > 0) {
        $(window).load(function () {
            $("#grid_suffle").shuffle({
                itemSelector: ".item",
                gutterWidth: 0
            });
        });
    }

    /*--------------------------------------------------------
     / 7. Related Folio Slider
     /---------------------------------------------------------*/
    if ($('.related_slide').length > 0) {
        $('.related_slide').owlCarousel({
            items: 2,
            margin: 40,
            autoplay: true,
            nav: false,
            navText: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 8. Google Map
     /---------------------------------------------------------*/
    if ($("#gmap").length > 0)
    {
        var map;

        map = new GMaps({
            el: "#gmap",
            lat: 39.966528,
            lng: -75.158284,
            scrollwheel: false,
            draggable: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false,
        });
        var image = "";
        map.addMarker({
            lat: 39.966528,
            lng: -75.158284,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2d2d2d"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#b1b1b1"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*------------------------------------------------------------------------------
     / 9. Team Slider
     /------------------------------------------------------------------------------*/
    if ($('.team_slider').length > 0) {
        $('.team_slider').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            dots: false,
            arrows: true,
            centerMode: true,
            asNavFor: '.slider-nav',
            centerPadding: '0'
        });

        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            asNavFor: '.team_slider',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }

    /*--------------------------------------------------------
     / 10. Loan Calculation
     /--------------------------------------------------------*/
    if ($('#price_range').length > 0) {
        $("#price_range").slider({
            range: "min",
            value: 90800,
            min: 1,
            max: 181600,
            slide: function (event, ui) {
                $("#amount").val("$" + ui.value);
            }
        });
        $("#amount").val("$" + $("#price_range").slider("value"));
    }

    /*--------------------------------------------------------
     / 11. Fixed Header
     /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $("#header").addClass('fixedHeader animated flipInX');
        } else
        {
            $("#header").removeClass('fixedHeader animated flipInX');
        }
    });

    /*--------------------------------------------------------
     / 12. Preloder
     /----------------------------------------------------------*/
    $(window).load(function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
     / 13. Contact From Submit
     /----------------------------------------------------------*/
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var f_name = $("#f_name").val();
            var l_name = $("#l_name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var address = $("#address").val();
            var message = $("#con_message").val();

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'ajax/mail.php',
                    data: {f_name: f_name, l_name: l_name, email: email, phone: phone, address: address, message: message},
                    success: function (data)
                    {
                        //alert(data);
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                        setTimeout(function () {
                            $("#con_submit").html('Send Message');
                        }, 2500);
                    }
                });
            } else
            {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function (e) {
            $(this).removeClass('reqError');
        });
    }

    /*--------------------------------------------------------
     / 14. Mobile Menu
     /----------------------------------------------------------*/
    if ($('.mobilemenu').length > 0) {
        $('.mobilemenu').on('click', function (e) {
            var w = $(window).width();
            $(this).toggleClass('active');
            $('.mainmenu > ul').slideToggle('slow');
        });

        $('.mainmenu ul li.menu-item-has-children').each(function () {
            var $this = $(this);
            $this.append('<span class="submenu_toggler d-md-none d-lg-none d-xl-none"><i class="fa fa-angle-down"></i></span>');
        });

        $('.mainmenu ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
            var $this = $(this);

            if ($(this).hasClass('active-span')) {
                $('i', $this).removeClass('fa-angle-up').addClass('fa-angle-down');
            } else {
                $('i', $this).addClass('fa-angle-up').removeClass('fa-angle-down');
            }
            $(this).prev('ul.sub-menu').slideToggle();
            $(this).toggleClass('active-span');
        });
    }
})(jQuery);