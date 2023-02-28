$(document).ready(function(){
    var selectVal1 = $("#country1 option:selected").val();
    var selectVal2 = $('#country2 option:selected').val()
    if(selectVal1 == 'no'){
        $('#us-img1').attr('src','').hide()
    }
    if(selectVal2 == 'no'){
        $('#us-img2').attr('src','').hide()
    }
    $('#country1').on('change', function () {
        var selectVal1 = $("#country1 option:selected").val();
        console.log(selectVal1)
        changeFlag1(selectVal1);
        $("#country2").on('change',function(){
            var selectVal2 = $("#country2 option:selected").val()
            changeFlag2(selectVal2)
            if(selectVal1 == 'INR' && selectVal2 == 'USD'){
                    var inputValue = $("#input1").val();
                    convertINRTOUSD(inputValue)
            }
            if(selectVal1 == 'USD' && selectVal2 == 'INR'){
                var inputValue = $("#input1").val();
                convertUSDTOINR(inputValue)
            }
            if(selectVal1 == 'INR' && selectVal2 == 'POUND'){
                    var inputValue = $("#input1").val();
                    convertINRTOPOUND(inputValue)
            }
            if(selectVal1 == 'POUND' && selectVal2 == 'INR'){
                var inputValue = $("#input1").val();
                convertPOUNDTOINR(inputValue)
            }
            if(selectVal1 == 'POUND' && selectVal2 == 'USD'){
                var inputValue = $("#input1").val();
                convertPOUNDTOUSD(inputValue)
            }
            if(selectVal1 == 'USD' && selectVal2 == 'POUND'){
                var inputValue = $("#input1").val();
                convertUSDTOPOUND(inputValue)
            }
            if(selectVal1 == 'INR' && selectVal2 == 'INR' || selectVal1 == 'USD' && selectVal2=='USD' || selectVal1 == 'POUND' && selectVal2=='POUND'){
                    var inputValue = $("#input1").val();
                    $('#input2').val(inputValue)
            }
        })
    })
    $('#convert').on('click',function(){
        // console.log('wdhgfudh')
        var inputValue1 = $('#input1').val()
        var inputValue2 = $('#input2').val()
        $('#input1').val(inputValue2)
        $('#input2').val(inputValue1)
        $('img').addClass('exchange')
    })
})

function changeFlag1(selectVal1){
    if(selectVal1=='USD'){
        $('#us-img1').attr('src','https://flagcdn.com/48x36/us.png').show()
    }
    if(selectVal1=='INR'){
        $('#us-img1').attr('src','https://flagcdn.com/48x36/in.png').show()
    }
    if(selectVal1=='POUND'){
        $('#us-img1').attr('src','https://flagcdn.com/48x36/gb.png').show()
    }
}

function changeFlag2(selectVal2){
    if(selectVal2=='USD'){
        $('#us-img2').attr('src','https://flagcdn.com/48x36/us.png').show()
    }
    if(selectVal2=='INR'){
        $('#us-img2').attr('src','https://flagcdn.com/48x36/in.png').show()
    }
    if(selectVal2=='POUND'){
        $('#us-img2').attr('src','https://flagcdn.com/48x36/gb.png').show()
    }
}

function convertINRTOUSD(selectVal){
    var res = selectVal *(1/82.86)
    $('#input2').val(parseFloat(res).toFixed(5))
    // console.log(res)
}
function convertINRTOPOUND(selectVal){
    // console.log(selectVal)
    var res = selectVal *(1/100)
    $('#input2').val(parseFloat(res).toFixed(5))
}
function convertUSDTOINR(selectVal){
    // console.log(selectVal)
    var res = selectVal * 82.86
    $('#input2').val(parseFloat(res).toFixed(5))
}
function convertPOUNDTOINR(selectVal){
    // console.log(selectVal)
    var res = selectVal * 100
    $('#input2').val(parseFloat(res).toFixed(5))
}
function convertUSDTOPOUND(selectVal){
    // console.log(selectVal)
    var res = selectVal * 0.830048
    $('#input2').val(parseFloat(res).toFixed(5))
}
function convertPOUNDTOUSD(selectVal){
    // console.log(selectVal)
    var res = selectVal * (1/0.830048)
    $('#input2').val(parseFloat(res).toFixed(5))
}
