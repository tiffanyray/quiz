export default (() => {
    let method = {};
    const $overlay = $('#overlay'),
        $modal = $('#modal'),
        $content = $modal.find('#content'),
        $close = $modal.find('#close');


    //Initially hiding the overlay & modal
    $modal.hide();
    $overlay.hide();
    //Adding the content and close button to modal window
    $modal.append($content, $close);


    //Adding the overlay and modal to the body
    $(document).ready(() => {
        $('body').append($overlay, $modal);
    });


    //Centering the modal window 
    method.center = () => {
        let top = Math.max($(window).height() - $modal.outerHeight(), 0 ) / 2;
        let left = Math.max($(window).width() - $modal.outerWidth(), 0 ) / 2;

        $modal.css({
            top: top+ $(window).scrollTop(),
            left: left + $(window).scrollLeft()
        })
    };


    //Opening the modal window
    method.open = (settings) => {
        $content.empty().append(settings.content);

        $modal.css({
            'min-width': '20vw;',
            width: settings.width || '40vw',
            height: settings.height || 'auto',
            'max-height': '90vw'
        })

        method.center();

        $(window).bind('resize.modal', method.center);

        $modal.show();
        $overlay.show();
    };

    method.close = () => {
        $modal.hide();
        $overlay.hide();
        $content.empty();
        $(window).unbind('resize.modal');
    };

    $close.click((e) => {
        e.preventDefault();
        method.close();
    });

    return method;

})(); //End of modal function
