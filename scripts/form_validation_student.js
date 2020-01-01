function validateform() {
    let isFirstNameValidat = nameValidation($("#firstName"),$("#firstNameHelp"));
    let islastNameValidat = nameValidation($("#lastName"),$("#lastNameHelp"));
    if (isFirstNameValidat && islastNameValidat && studentIDValidation()) {//
        return true;
    }
    else {
        return false;
    }

}

function nameValidation(name,nameHelp) {
    var firstName = name.val();
    var nameRGEX = /^[A-Za-z]+$/;
    if (!nameRGEX.test(firstName)) {  //check not null and no white space
        name.css('border', '2px red solid');
        nameHelp.html("<i class='falert alert-danger alert-dismissible fade show'><strong>Error: </strong>This field is required.</i>");
        return false;
    }
    else {
        name.css('border', '1px black solid');
        nameHelp.html("<br>");
        return true;
    }
}

function studentIDValidation() {
    var studentIDRGEX = /^[wW][0-9]{7}$/; // eg 902-414-1875
    if (!studentIDRGEX.test($("#studentID").val())) {
        $('#studentID').css('border', '2px red solid');
        $("#studentIDHelp").html("<i class='falert alert-danger alert-dismissible fade show'><strong>Error: </strong>StudentID's format is invalid.(eg. w0410000)</i>");
        return false;
    }
    else {
        $('#studentID').css('border', '1px black solid');
        $("#studentIDHelp").html("<br>");
        return true;
    }
}

$(document).ready(function () {
   // company name validation on 'change' and 'click'
    $("#firstName, #lastName").on('change', function () {
        nameValidation($("#firstName"),$("#firstNameHelp"));
        nameValidation($("#lastName"),$("#lastNameHelp"));
    })

    $("#studentEmail").on('change', function () {
        emailValidation()
    })

    $("#studentID").on('change', function () {
        studentIDValidation()
    })

    for (var i=2022; i > 2010; i--){
        $("#graduateYear").append(`<option value="${i}">${i}</option>`);
    }
    

});
