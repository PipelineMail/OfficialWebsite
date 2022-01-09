(function ($) {
    "use strict";

    $(document).ready(function () {
        /*-------------------------------------------------------
            Useful Variables
        ---------------------------------------------------------*/

        let maxBody = $("body");
        let leftNavTrigger = $(".open-nav-left");
        let leftNavWrapper = $(".left-nav-wrapper");
        let primaryNavLeft = $(".open-nav-primary-left");
        let primaryNavRight = $(".open-nav-primary-right");
        let primaryNavLeftIs = $(".primary-nav-list--left-wrapper");
        let primaryNavRightIs = $(".primary-nav-list--right-wrapper");

        /* Useful Variables End ---------------------------------*/

        /*--------------------------------------------------------
            Feather Icon
        ---------------------------------------------------------*/

        feather.replace();

        /*Feather Icon End --------------------------------------*/

        /*--------------------------------------------------------
            Bar Rating
        ---------------------------------------------------------*/

        $(".mx-star").barrating({
            theme: "fontawesome-stars",
        });
        $(".mx-star-o").barrating({
            theme: "fontawesome-stars-o",
        });
        $(".mx-1to10").barrating({
            theme: "bars-1to10",
        });
        $(".mx-hr-rating").barrating({
            theme: "bars-horizontal",
        });
        $(".mx-movie-rating").barrating({
            theme: "bars-movie",
        });
        $(".mx-pill-rating").barrating({
            theme: "bars-pill",
        });
        $(".mx-reversed-rating").barrating({
            theme: "bars-reversed",
        });
        $(".mx-sqr-rating").barrating({
            theme: "bars-square",
        });

        /*Bar Rating End --------------------------------------*/

        /*--------------------------------------------------------
            Touch Spin
        ---------------------------------------------------------*/

        $("input[name='demo1']").TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: "%",
        });

        $("input[name='demo2']").TouchSpin({
            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            prefix: "$",
        });

        $("input[name='demo_vertical']").TouchSpin({
            verticalbuttons: true,
        });

        $("input[name='demo_vertical2']").TouchSpin({
            verticalbuttons: true,
            verticalupclass: "glyphicon glyphicon-plus",
            verticaldownclass: "glyphicon glyphicon-minus",
        });

        $("input[name='demo3']").TouchSpin();

        $("input[name='demo3_21']").TouchSpin({
            initval: 40,
        });

        $("input[name='demo3_22']").TouchSpin({
            initval: 40,
        });

        $("input[name='demo4']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-default",
        });

        $("input[name='demo4_2']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-default",
        });

        /*Touch Spin End --------------------------------------*/

        /*--------------------------------------------------------
            JQuery Date Picker
        ---------------------------------------------------------*/

        $(".datepicker").datepicker();
        $(".dateOtherMonth").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
        });
        $(".dateButtonBar").datepicker({
            showButtonPanel: true,
        });
        $(".dateMultiMonth").datepicker({
            numberOfMonths: 3,
            showButtonPanel: true,
        });
        $(".dateIcon").datepicker({
            showOn: "button",
            buttonText: '<span class="date-icon"><i class="las la-calendar-alt"></i></span>',
        });
        $(".bootsDate").bootstrapMaterialDatePicker({
            weekStart: 0,
            time: false,
        });
        $(".bootsTime").bootstrapMaterialDatePicker({
            date: false
        });
        $(".bootsDateTime").bootstrapMaterialDatePicker({
            format: "dddd DD MMMM YYYY - HH:mm",
        });

        /*JQuery Date Picker End --------------------------------------*/

        /*-------------------------------------------------------
            Nice Select
        ---------------------------------------------------------*/

        $(".mx-select").niceSelect();

        /*Nice Select End ---------------------------------------*/

        /*-------------------------------------------------------
            Image Upload
        ---------------------------------------------------------*/

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $(".imagePreview-1").css(
                        "background-image",
                        "url(" + e.target.result + ")"
                    );
                    $(".imagePreview-1").hide();
                    $(".imagePreview-1").fadeIn(650);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
        $(".avatars__input-file-1").change(function () {
            readURL(this);
        });


        /*Image Upload End ---------------------------------------*/

        /*-------------------------------------------------------
            Open / Hide Left Nav
        ---------------------------------------------------------*/

        if (leftNavTrigger.length > 0) {
            leftNavTrigger.on("click", function (e) {
                e.preventDefault();
                maxBody.toggleClass("open-nav-left");
            });
        }

        if (leftNavWrapper.length > 0) {
            leftNavWrapper.on("click", function () {
                maxBody.removeClass("open-nav-left");
            });
        }

        /* Open / Hide Left Nav End -----------------------------*/

        /*---------------------------------------------------------
            Open / Hide Primary Nav Right
        -----------------------------------------------------------*/

        if (primaryNavRight.length > 0) {
            primaryNavRight.on("click", function (e) {
                e.preventDefault();
                primaryNavRightIs.slideToggle();
            });
        }

        /* Open / Hide Primary Nav Right End ---------------------*/

        /*---------------------------------------------------------
            Enable Bootstrap Tooltip and Popover
        -----------------------------------------------------------*/

        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

        /* Enable Bootstrap Tooltip End ---------------------------*/
        /*---------------------------------------------------------
            Show Chat
        -----------------------------------------------------------*/

        var chatToggle = $(".show-chat");
        var chatPop = $(".pop-chat");
        chatToggle.on("click", function () {
            chatPop.toggleClass("active");
        });

        /* Show Chat End ---------------------------*/

        /*---------------------------------------------------------
            Range Slider
        -----------------------------------------------------------*/
        var rangeDefault = $(".mx-default-range");
        var rangeMinMax = $(".mx-min-max-range");
        var rangePrefix = $(".mx-prefix-range");
        var rangeNegative = $(".mx-negative-range");
        var rangeStep = $(".mx-step-range");
        var rangeSquare = $(".mx-sqr-range");
        var rangeSharp = $(".mx-sharp-range");
        var rangeFlat = $(".mx-flat-range");
        if (
            rangeDefault ||
            rangeMinMax ||
            rangePrefix ||
            rangeNegative ||
            rangeStep ||
            rangeSquare ||
            rangeSharp ||
            rangeFlat
        ) {
            rangeDefault.ionRangeSlider({
                skin: "round",
            });
            rangeMinMax.ionRangeSlider({
                skin: "round",
                type: "double",
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
            });
            rangePrefix.ionRangeSlider({
                skin: "round",
                type: "double",
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
                prefix: "$",
            });
            rangeNegative.ionRangeSlider({
                skin: "round",
                type: "double",
                min: -1000,
                max: 1000,
                from: -500,
                to: 800,
                grid: true,
            });
            rangeStep.ionRangeSlider({
                skin: "round",
                type: "double",
                min: -1000,
                max: 1000,
                from: -500,
                to: 800,
                step: 100,
                grid: true,
            });
            rangeSquare.ionRangeSlider({
                skin: "square",
                type: "double",
                min: -1000,
                max: 1000,
                from: -500,
                to: 800,
                step: 100,
                grid: true,
            });
            rangeSharp.ionRangeSlider({
                skin: "sharp",
                type: "double",
                min: -1000,
                max: 1000,
                from: -500,
                to: 800,
                step: 100,
                grid: true,
            });
            rangeFlat.ionRangeSlider({
                skin: "flat",
                type: "double",
                min: -1000,
                max: 1000,
                from: -500,
                to: 800,
                step: 100,
                grid: true,
            });
        }

        /* Range Slider End ---------------------------*/

        /*---------------------------------------------------------
            Multistep Form
        -----------------------------------------------------------*/
        $('a[data-toggle="formtab"]').click(function () {
            var targetId = $(this).attr("href");

            $(".tabs-panels").removeClass("active");
            $('a[data-toggle="formtab"]').removeClass("active");

            $(targetId).addClass("active");
            $('a[href="' + targetId + '"]').addClass("active");
        });
        /* Multistep Form End ---------------------------*/

        /*--------------------------------------------------------
            Calendar
        ---------------------------------------------------------*/
        var calendarBasic = $(".mx-calendar-basic");
        if (calendarBasic.length) {
            calendarBasic.fullCalendar({
                selectable: true,
                themeSystem: "bootstrap4",
                weekNumbers: true,
                eventLimit: true, // allow "more" link when too many events
                events: "https://fullcalendar.io/demo-events.json",
                droppable: true,
                editable: true,
                header: {
                    left: "prevYear,prev,next,nextYear today",
                    center: "title",
                    right: "addEventButton month,agendaWeek,agendaDay,listMonth,",
                },

                customButtons: {
                    addEventButton: {
                        text: "Add Event",
                        click: function () {
                            $("#createEventModal").modal();
                        },
                    },
                },
                //When u select some space in the calendar do the following:
                select: function (start, end, allDay) {
                    //do something when space selected
                    //Show 'add event' modal
                    $("#createEventModal").modal("show");
                },
                eventRender: function (event, element) {
                    $(element).tooltip({
                        title: event.title,
                    });
                },
                //Activating modal for 'when an event is clicked'
                eventClick: function (event) {
                    $("#modalTitle").html(event.title);
                    $("#modalBody").html(event.description);
                    // $("#createEventModal").modal();
                },
            });

            $("#submitButton").on("click", function (e) {
                // We don't want this to act as a link so cancel the link action
                e.preventDefault();

                doSubmit();
            });

            function doSubmit() {
                $("#createEventModal").modal("hide");
                $(calendarBasic).fullCalendar(
                    "renderEvent", {
                        title: $("#eventName").val(),
                        start: new Date($("#eventDueDate").val()),
                    },
                    true
                );
            }
        }

        /*Calendar End --------------------------------------*/

        /*--------------------------------------------------------
            Source Code
        ---------------------------------------------------------*/
        let codeShow = $(".mx-source-toggler-show");
        let codeClose = $(".mx-source-toggler-close");
        let codeBody = $(".mx-source__body");
        if (codeShow || codeClose) {
            codeShow.on("click", function () {
                $(this).css("display", "none");
                $(this).next().css({
                    display: "block",
                    color: "#1BC5BD",
                    background: "#f6f7fa",
                });
                $(this).parent().next().slideDown();
            });
            codeClose.on("click", function () {
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $(this).parent().next().slideUp();
            });
        }
        /*Source Code End --------------------------------------*/

        /*--------------------------------------------------------
            Side Nav
        ---------------------------------------------------------*/
        let sideNavHasSub = $(".mx-sidenav__has-sub");
        let sideNavLinkPrevent = $(
            ".mx-sidenav__has-sub .mx-sidenav__menu-link"
        );
        let sideNavToggle = $(".mx-sidenav-toggle");
        if (sideNavHasSub || sideNavLinkPrevent || sideNavToggle) {
            if ($("body").hasClass("mx-sidenav-not-collapsed")) {
                sideNavHasSub.on("click", function () {
                    $(this)
                        .toggleClass("active")
                        .find(".mx-sidenav__sub")
                        .slideToggle();
                });
            }

            sideNavLinkPrevent.on("click", function (e) {
                e.preventDefault();
            });
            sideNavToggle.on("click", function (e) {
                e.preventDefault();
                $("body").toggleClass(
                    "mx-sidenav-collapsed mx-sidenav-not-collapsed"
                );
                $(this).toggleClass("active");
            });
        }
        /*Side Nav End --------------------------------------*/

        /*--------------------------------------------------------
            Small Screen Side Nav
        ---------------------------------------------------------*/
        let smSideNavSubLink = $(
            ".mx-sm-sidenav__has-sub .mx-sm-sidenav__link"
        );
        let smSideNavSubSetLink = $(
            ".mx-sm-sidenav__has-sub-set .mx-sm-sidenav__sub-link"
        );
        let smSideNavToggle = $(".mx-sm-sidenav-toggle");
        let mobileNavWrapper = $(".mx-mobile-nav-wrapper");
        let mobileNavClose = $(".mx-mobile-nav__close");
        if (
            smSideNavSubLink ||
            smSideNavSubSetLink ||
            smSideNavToggle ||
            mobileNavWrapper ||
            mobileNavClose
        ) {
            smSideNavSubLink.on("click", function (e) {
                e.preventDefault();
                $(this)
                    .toggleClass("active")
                    .siblings(".mx-sm-sidenav__sub")
                    .slideToggle();
            });
            smSideNavSubSetLink.on("click", function (e) {
                e.preventDefault();
                $(this)
                    .toggleClass("active")
                    .siblings(".mx-sm-sidenav__sub-set")
                    .slideToggle();
            });
            smSideNavToggle.on("click", function (e) {
                e.preventDefault();
                $("body").toggleClass("mx-mobile-nav-open");
            });
            mobileNavWrapper.on("click", function () {
                $("body").removeClass("mx-mobile-nav-open");
            });
            mobileNavClose.on("click", function () {
                $("body").removeClass("mx-mobile-nav-open");
            });
        }
        /*Small Screen Side Nav End --------------------------------------*/

        /*--------------------------------------------------------
            Mobile Header
        ---------------------------------------------------------*/
        $(".mx-mobile-menu__sub-header").on("click", function (e) {
            e.preventDefault();

            $(".mx-sub-header").slideToggle();
            $(".mx-sm-user").slideUp();
        })
        $(".mx-mobile-menu__user").on("click", function (e) {
            e.preventDefault();
            $(".mx-sm-user").slideToggle();
            $(".mx-sub-header").slideUp();
        })

        /*Mobile Header End --------------------------------------*/

        // Example starter JavaScript for disabling form submissions if there are invalid fields

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    });
})(jQuery);

$(window).on("load", function () {
    /*-----------------
        preloader
    ------------------*/
    var preLoder = $(".preloader-container");
    preLoder.fadeOut(1000);
});