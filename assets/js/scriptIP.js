// INI UNTUK IP PENGUNJUNG
$.getJSON('https://ipapi.co/json/', function(data){
    $("#ip").text(data.ip);
    $('#isp').text(data.org);
    $('#country').text(data.country_name);
    $('#city').text(data.region);
    $("#gmaps").attr("src", "https://www.google.com/maps?q="+data.latitude+","+data.longitude+"&output=embed");
})
