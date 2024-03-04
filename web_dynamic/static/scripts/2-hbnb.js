$(document).ready(function () {
    // Event listener for checkbox clicks
    $('input[type=checkbox]').click(function () {
        // Arrays to store names and IDs of checked checkboxes
        const myListName = [];
        const myId = [];

        // Loop through checked checkboxes
        $('input[type=checkbox]:checked').each(function () {
            myListName.push($(this).data('name'));
            myId.push($(this).data('id'));
        });

        // Update amenities h4 content based on checked checkboxes
        $('.amenities h4').html(myListName.length === 0 ? '&nbsp;' : myListName.join(', '));

        // Log the array of checked amenity IDs to the console
        console.log(myId);
    });

    // API status check using AJAX
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        dataType: 'json',
        success: function (json) {
            // Update the class of api_status based on the API response
            $('#api_status').toggleClass('available', json.status === 'OK');
        },
        error: function (xhr, status) {
            console.error('Error: ' + status);
        }
    });
});
