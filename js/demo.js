$(document).ready(function ($) {
    var contentSections = $('.cd-section');
    $(".buttons li a").on('click', function(){
        $(".buttons li").removeClass('active');
        $(this).parent().addClass('active');
    });
});


//
// CONFIG IZIToast
//

iziToast.settings({
    timeout: 5000,
    // position: 'center',
    // imageWidth: 50,
    pauseOnHover: true,
    // resetOnHover: true,
    close: true,
    progressBar: true,
    // layout: 1,
    // balloon: true,
    // target: '.target',
    // icon: 'material-icons',
    // iconText: 'face',
    // animateInside: false,
    // transitionIn: 'flipInX',
    // transitionOut: 'flipOutX',
});


$(".trigger-info").on('click', function (event) {
    event.preventDefault();

    iziToast.info({
        title: 'Hello',
        message: 'Welcome!',
        // imageWidth: 70,

        position: 'bottomLeft',
        transitionIn: 'bounceInRight',
        // rtl: true,
        // iconText: 'star',
        onOpen: function(){
            console.log('callback abriu! info');
        },
        onClose: function(){
            console.log("callback fechou! info");
        }
    });
});
$(".trigger-success").on('click', function (event) {
    event.preventDefault();

    iziToast.success({
        title: 'OK',
        message: 'Successfully inserted record!',
        position: 'bottomRight',
        transitionIn: 'bounceInLeft',
        // iconText: 'star',
        onOpen: function(){
            console.log('callback abriu! success');
        },
        onClose: function(){
            console.log("callback fechou! success");
        }
    });
});
$(".trigger-warning").on('click', function (event) {
    event.preventDefault();

    iziToast.warning({
        title: 'Caution',
        message: 'You forgot important data',
        position: 'topLeft',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX'
    });
});
$(".trigger-error").on('click', function (event) {
    event.preventDefault();

    iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        transitionIn: 'fadeInDown'
    });
});

$(".trigger-custom1").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        title: 'Hey',
        icon: 'icon-drafts',
        class: 'custom1',
        message: 'What would you like to add?',
        position: 'bottomCenter',
        image: 'img/avatar.jpg',
        balloon: true,
        buttons: [
            ['<button>Photo</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-photo',
                    title: 'OK',
                    message: 'Callback Photo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
            ['<button>Video</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-ondemand_video',
                    title: 'OK',
                    message: 'Callback V铆deo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
            ['<button>Text</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-event_note',
                    title: 'OK',
                    message: 'Callback Text!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
        ]
    });

});


$(".trigger-animInsideFalse").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        title: 'Hey',
        icon: 'icon-drafts',
        class: 'animInsideFalse',
        message: 'What would you like to add?',
        position: 'bottomCenter',
        animateInside: false,
        image: 'img/avatar.jpg',
        buttons: [
            ['<button>Photo</button>', function (instance, toast) {

            }],
            ['<button>Video</button>', function (instance, toast) {

            }],
            ['<button>Text</button>', function (instance, toast) {

            }],
        ]
    });

});



$(".trigger-custom2").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        // class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: 'Copied',
        // message: 'Do you like it?',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'img/avatar.jpg',
        imageWidth: 10,
        layout:2,
        onClose: function(){
            console.info('onClose');
        },
        iconColor: 'rgb(0, 255, 184)'
    });
});

document.addEventListener('iziToast-open', function(data){
    if(data.detail.class == 'test'){
        console.log('test open');
    }
});


document.addEventListener('iziToast-close', function(data){
    if(data.detail.class == 'test'){
        console.log('test close');
    }
});






$(".trigger-bounceInLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInLeft',
        transitionIn: 'bounceInLeft',
        transitionInMobile: 'bounceInLeft',
        position: 'center'
    });
});

$(".trigger-bounceInRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInRight',
        transitionIn: 'bounceInRight',
        transitionInMobile: 'bounceInRight',
        position: 'center'
    });
});

$(".trigger-bounceInUp").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInUp',
        transitionIn: 'bounceInUp',
        transitionInMobile: 'bounceInUp',
        position: 'center'
    });
});

$(".trigger-bounceInDown").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'bounceInDown',
        transitionIn: 'bounceInDown',
        transitionInMobile: 'bounceInDown',
        position: 'center'
    });
});

$(".trigger-fadeIn").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeIn',
        transitionIn: 'fadeIn',
        transitionInMobile: 'fadeIn',
        position: 'center'
    });
});

$(".trigger-fadeInDown").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInDown',
        transitionIn: 'fadeInDown',
        transitionInMobile: 'fadeInDown',
        position: 'center'
    });
});

$(".trigger-fadeInUp").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInUp',
        transitionIn: 'fadeInUp',
        transitionInMobile: 'fadeInUp',
        position: 'center'
    });
});

$(".trigger-fadeInLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInLeft',
        transitionIn: 'fadeInLeft',
        transitionInMobile: 'fadeInLeft',
        position: 'center'
    });
});

$(".trigger-fadeInRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'fadeInRight',
        transitionIn: 'fadeInRight',
        transitionInMobile: 'fadeInRight',
        position: 'center'
    });
});

$(".trigger-flipInX").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        icon: 'icon-style',
        title: 'Transition',
        message: 'flipInX',
        transitionIn: 'flipInX',
        transitionInMobile: 'flipInX',
        position: 'center'
    });
});


$(".trigger-image").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        imageWidth: 50,
        image: 'img/avatar.jpg',
        color: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'How are you?',
        position: 'center',
        layout: 1
    });
});

$(".trigger-imageWidth").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        imageWidth: 100,
        image: 'img/avatar.jpg',
        color: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'How are you?',
        position: 'center',
        layout: 2
    });
});


$(".trigger-layout1").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        title: 'Layout 1',
        icon: 'icon-palette',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        layout: 1
    });
});
$(".trigger-layout2").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        title: 'Layout 2',
        icon: 'icon-palette',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        layout: 2
    });
});

$(".trigger-balloon").on('click', function (event) {
    event.preventDefault();
    iziToast.show({
        color: 'dark',
        progressBarColor: '#d48d37',
        title: 'Balloon',
        icon: 'icon-chat_bubble',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        position: 'center',
        balloon: true
    });
});









$(".trigger-bottomRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomRight',
        position: 'bottomRight'
    });
});
$(".trigger-bottomLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomLeft',
        position: 'bottomLeft'
    });
});
$(".trigger-topRight").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topRight',
        position: 'topRight'
    });
});
$(".trigger-topLeft").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topLeft',
        position: 'topLeft'
    });
});
$(".trigger-topCenter").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'topCenter',
        position: 'topCenter'
    });
});
$(".trigger-bottomCenter").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'bottomCenter',
        position: 'bottomCenter'
    });
});
$(".trigger-center").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-style',
        title: 'Position',
        message: 'center',
        position: 'center'
    });
});


$(".trigger-show").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'Welcome!',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
            ['<button>Ok</button>', function (instance, toast) {
                alert("Hello world!");
            }],
            ['<button>Close</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOutUp' }, toast);
            }]
        ]
    });
});


$(".trigger-pause").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-mouse',
        title: 'Pause',
        message: 'OnHover',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
    });
});

$(".trigger-reset").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: 'dark',
        icon: 'icon-mouse',
        title: 'Reset',
        message: 'OnHover',
        position: 'center',
        resetOnHover: true,
        progressBarColor: 'rgb(0, 255, 184)',
    });
});




$(".trigger-target").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        color: '#fff',
        icon: 'icon-style',
        title: 'Target',
        message: 'Specifying a Target',
        transitionIn: 'flipInX',
        transitionInMobile: 'flipInX',
        target: '.target-example',
        progressBarColor: '#d48d37',
    });
});