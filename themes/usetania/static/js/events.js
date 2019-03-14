$(document).ready(function() {
    $('#download-windows').click(function() {
        ga('send', 'event', 'Binaries', 'download', 'Download - Windows');
    });

    $('#download-linux').click(function() {
        ga('send', 'event', 'Binaries', 'download', 'Download - Linux');
    });

    $('#submit-contact-en').click(function() {
        ga('send', 'event', 'Contact', 'submit', 'Submit - English');
    });

    // copy to clipboard
    $('#copy-address').bind('click', function() {
        var input = $('#eth-address');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(input).text()).select();
        try {
            var success = document.execCommand('copy');
            if (success) {
                $('#copy-address').trigger('copied', ['Copied!']);
                $temp.remove();
            } else {
                $('#copy-address').trigger('copied', ['Copy with Ctrl-c']);
                $temp.remove();
            }
        } catch (err) {
            $('#copy-address').trigger('copied', ['Copy with Ctrl-c']);
            $temp.remove();
        }
    });
    
    // Handler for updating the tooltip message.
    $('#copy-address').bind('copied', function() {
        $('#copy-address').text('Copied');
        setTimeout(function() {
            $('#copy-address').text('Copy to Clipboard');
        }, 2000);
    });
});