function postToGoogle() {
    var name = $("[name='name']").val();
    var phone = $("[name='phone']").val();
    var email = $("[name='email']").val();
    var qualification = $("[name='qualification']").val();
    var subject = $("[name='entry.1498671018']:checked").val();
    var work = $("[name='entry.123645729']:checked").val();
    var description = $("[name='description']").val();
    window.alert($('form').serialize());
    // preventDefault();

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfu1bdBc4R8j5WIhJb92xuD4_wNLEEwEHGkKyBfK569HHrFSQ/formResponse",
        data: {
            "entry.2005620554": name,
            "entry.1045781291": email,
            "entry.1166974658": phone,
            "entry.839337160": qualification,
            "entry.123645729": work,
            "entry.1498671018": subject,
            "entry.1065046570": description
        },
        data: $('form').serialize(),
        type: "POST",
        dataType: "xml",
        crossDomain: true,
        statusCode: {
            0: function() { alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY."); },
            200: function() { alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY."); }
        }
    });
}