$('#result').val('Loading...');

var amount = $('#amount').val();
var from = $('#from').val();
var to = $('#to').val();



 $.ajax({
     type: "GET",
       url: "http://free.currencyconverterapi.com/api/v5/convert?q=" + from + "_" + to +"&compact=y",
    success: function(data) {
        var exchangeRate = JSON.stringify(data).replace(/[^0-9\.]/g,'');

        var result = amount*exchangeRate;
           $('#result').val(parseFloat(result).toFixed(2));
        }
    });