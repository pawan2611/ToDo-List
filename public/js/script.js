// jQuery code
$(document).ready(function () {
    // Add click event handler to elements with the class "myClass"
    $(".mycheckbox").on("click", function () {
        // Get the ID of the clicked element
        const elementID = $(this).attr("id");
        document.getElementById(elementID).classList.toggle("done");
    });
});
