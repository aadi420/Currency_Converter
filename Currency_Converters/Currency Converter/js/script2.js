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
        // changeFlag1(selectVal1);
        changeFlag1Ref(selectVal1, '#us-img1');
        $("#country2").on('change',function(){
            var selectVal2 = $("#country2 option:selected").val()
            changeFlag1Ref(selectVal2, '#us-img2');

            var inputValue = $("#input1").val();

            if(selectVal1 == 'INR' && selectVal2 == 'USD'){
                cal(inputValue,1)
            }
            if(selectVal1 == 'USD' && selectVal2 == 'INR'){
                cal(inputValue,2)
            }
            if(selectVal1 == 'INR' && selectVal2 == 'POUND'){
                cal(inputValue,3)
            }
            if(selectVal1 == 'POUND' && selectVal2 == 'INR'){
                cal(inputValue,4)
            }
            if(selectVal1 == 'POUND' && selectVal2 == 'USD'){
                cal(inputValue,5)
            }
            if(selectVal1 == 'USD' && selectVal2 == 'POUND'){
                cal(inputValue,6)
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

var curFlagMap = {
    USD: 'https://flagcdn.com/48x36/us.png',
    INR: 'https://flagcdn.com/48x36/in.png',
    POUND: 'https://flagcdn.com/48x36/gb.png'
}

// function changeFlag1(selectVal1){
//     if(selectVal1=='USD'){
//         $('#us-img1').attr('src','https://flagcdn.com/48x36/us.png').show()
//     }
//     if(selectVal1=='INR'){
//         $('#us-img1').attr('src','https://flagcdn.com/48x36/in.png').show()
//     }
//     if(selectVal1=='POUND'){
//         $('#us-img1').attr('src','https://flagcdn.com/48x36/gb.png').show()
//     }
// }

/**
 * 
 * @param {*} selectVal1 
 * @param {*} selector 
 */
function changeFlag1Ref(selectVal1, selector){
    $(`${selector}`).attr('src', curFlagMap[selectVal1]).show()
}

// function changeFlag1Ref(selectVal1){
//     $('#us-img1').attr('src', curFlagMap[selectVal1]).show()
// }

// function changeFlag1Ref2(selectVal1){
//     $('#us-img2').attr('src', curFlagMap[selectVal1]).show()
// }

// function changeFlag2(selectVal2){
//     if(selectVal2=='USD'){
//         $('#us-img2').attr('src','https://flagcdn.com/48x36/us.png').show()
//     }
//     if(selectVal2=='INR'){
//         $('#us-img2').attr('src','https://flagcdn.com/48x36/in.png').show()
//     }
//     if(selectVal2=='POUND'){
//         $('#us-img2').attr('src','https://flagcdn.com/48x36/gb.png').show()
//     }
// }


function cal(selectVal,num){

    var res;

    switch (num) {
        case 1:
            res = selectVal *(1/82.86)
            break;

        case 2:
            res = selectVal * 82.86
            break;

        case 3:
            res = selectVal *(1/100)
            break;        

        case 4:
            res = selectVal * 100
            break;

        case 5:
            res = selectVal * (1/0.830048)
            break;

        case 6:
            res = selectVal * 0.830048
            break;

        default:
            break;
    }
    $('#input2').val(parseFloat(res).toFixed(5))
    priceChange()
}

// function convertINRTOUSD(selectVal){
//     var res = selectVal *(1/82.86)
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
    
// }
// function convertINRTOPOUND(selectVal){
//     // console.log(selectVal)
//     var res = selectVal *(1/100)
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
// }
// function convertUSDTOINR(selectVal){
//     // console.log(selectVal)
//     var res = selectVal * 82.86
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
// }
// function convertPOUNDTOINR(selectVal){
//     // console.log(selectVal)
//     var res = selectVal * 100
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
// }
// function convertUSDTOPOUND(selectVal){
//     // console.log(selectVal)
//     var res = selectVal * 0.830048
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
// }
// function convertPOUNDTOUSD(selectVal){
//     // console.log(selectVal)
//     var res = selectVal * (1/0.830048)
//     $('#input2').val(parseFloat(res).toFixed(5))
//     priceChange()
// }

function priceChange()
{
   let RandomNum = Math.random()*5;
    RandomNum = Math.round(RandomNum*100)/100;
   let colorDecision = Math.floor(Math.random()*2)
  let colorClass = colorDecision < 1 ? "redTag":'greenTag';

  //acessing the dom element
  $('.priceChange').html(`<p class=${colorClass}>${RandomNum}%</p>`);
}