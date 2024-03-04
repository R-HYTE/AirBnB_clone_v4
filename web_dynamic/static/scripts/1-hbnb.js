// JavaScript script that is executed only when DOM is loaded
// Uses JQuery

$(document).ready(function () {
    let checkedAmenities = {};

    $('input:checkbox').change(function () {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            delete checkedAmenities[amenityId];
        }

        updateAmenitiesList();
    });

    function updateAmenitiesList() {
        const amenities = Object.values(checkedAmenities);
        const amenitiesText = (amenities.length === 0) ? '&nbsp;' : amenities.join(', ');
        $('div.amenities h4').html(amenitiesText);
    }
});
