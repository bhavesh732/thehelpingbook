function postToGoogle() {
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfu1bdBc4R8j5WIhJb92xuD4_wNLEEwEHGkKyBfK569HHrFSQ/formResponse",
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

function searchresult(){
    var query = document.getElementById('searchinput').value;
    console.log(query);
    window.location.href = `/home/search/results/${query}`;
}

function searchresult2(){
    var query = document.getElementById('searchinput2').value;
    console.log(query);
    window.location.href = `/home/search/results/${query}`;
}