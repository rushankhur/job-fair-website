
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = '<a title="Done" data-toggle="tooltip"><button type="button" class="btn btn-default btn-sm done" name="done" value="Done"><i class="fas fa-check"></i></button></a>' +
        '<a title="Edit" data-toggle="tooltip"><button type="button" class="btn btn-default btn-sm edit" value="Edit"><i class="fas fa-edit"></i></button></a>' +
        '<a title="Delete" data-toggle="tooltip"><button type="button" class="btn btn-default btn-sm delete" name="delete" value="Delete"><i class="fas fa-trash-alt"></i></button></a>' +
        '<a title="Add" data-toggle="tooltip"><button type="button" class="btn btn-default btn-sm add" name="add" value="Add"><i class="fas fa-plus"></i></button></a>';
    // Append table with add row form on add button click
    $(document).on("click", ".add", function () {
        var row = '<tr>' +
            '<td><input class="qu_id" value="" readonly type="number" name="questionID[]"></td>' +
            '<td><input type="time" class="form-control qu_id status_change check_empty" name="start_time[]" ></td>' +
            '<td><input type="time" class="form-control qu_id status_change check_empty" name="end_time[]" ></td>' +
            '<td><input type="text" name="topic[]" class="qu_id status_change check_empty" ></td>' +
            '<td><input type="text" name="room[]" class="qu_id status_change" ></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $(this).parent().parent().parent().after(row);
        // eq means nth tr, chose new tr.
        $(this).parent().parent().parent().next().find(".status_change").css("border", "1px solid");
        $(this).parent().parent().parent().next().find(".done, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on done button click
    $(document).on("click", ".done", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]' && '.check_empty');
        input.each(function () {
            if (!$(this).val()) {
                $(this).parents("tr").find(".check_empty").css("border", "1px solid red");
                $(this).parents("tr").find(".check_empty").css("background-color", "#FFCECE");
                empty = true;
            } else {
                $(this).parents("tr").find(".status_change").css("border", "1px solid black");
                $(this).parents("tr").find(".status_change").css("background-color", "white");
            }
        });
        if (!empty) {
            $(this).parents("tr").find(".status_change").prop("readonly", true);
            $(this).parents("tr").find(".status_change").first().prop("disabled", false);
            $(this).parents("tr").find(".status_change").css("border", "hidden");

            $(this).parents("tr").find(".done, .edit").toggle();
        }
    });

    // Edit row on edit button click
    $(document).on("click", ".edit", function () {

        // change 2nd and 3rd readonly statue and give border;
        $(this).parents("tr").find(".status_change").prop("readonly", false);
        $(this).parents("tr").find(".status_change").prop("disabled", false);
        $(this).parents("tr").find(".status_change").css("border", "1px solid");

        $(this).parents("tr").find(".done, .edit").toggle();

        // can't submit when edit status
        event.preventDefault();

    });


    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
    });

    // Store form state at page load
    var initial_form_state = $('#myform').serialize();

    // Store form state after form submit
    $('#myform').submit(function(){
        initial_form_state = $('#myform').serialize();
    });

    // Check form changes before leaving the page and warn user if needed
    $(window).bind('beforeunload', function(e) {
        var form_state = $('#myform').serialize();
        if(initial_form_state != form_state){
            var message = "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
            e.returnValue = message; // Cross-browser compatibility (src: MDN)
            return message;
        }
    });

});
