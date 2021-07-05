
function loadXMLDoc(data, callback) {
    var xmlhttp = new XMLHttpRequest();
    var baseUrl = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';
    var response = '';

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
                callback(null, xmlhttp.responseText)
           }
        }
    };

    xmlhttp.open("GET", baseUrl, true);
    xmlhttp.send();  
}   
