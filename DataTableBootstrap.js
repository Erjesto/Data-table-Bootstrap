$(document).ready(function() {

    /* Working for the first row */

    /* EDIT Buttons */
    
    $('.edit1').on('click', function() {
        $('.data1').empty()
        $('.data2').empty()
        $('.data3').empty()
        
        $('.data1').append('<input class=i1 type=text>') 
        $('.data2').append('<input class=i2 type=text>')
        $('.data3').append('<input class=i3 type=text>')
        
     
    })

    $('.edit2').on('click', function() {

        $('.data4').empty()
        $('.data5').empty()
        $('.data6').empty()
        
        $('.data4').append('<input class=i4 type=text>') 
        $('.data5').append('<input class=i5 type=text>')
        $('.data6').append('<input class=i6 type=text>')
        
     
    })


    $('.edit3').on('click', function() {
        $('.data7').empty()
        $('.data8').empty()
        $('.data9').empty()
        
        $('.data7').append('<input class=i7 type=text>') 
        $('.data8').append('<input class=i8 type=text>')
        $('.data9').append('<input class=i9 type=text>')
        
     
    })




    /* SAVE button */

    $('.save1').on('click', function() {

        var txt1 = $('.i1').val()
        var txt2 = $('.i2').val()
        var txt3 = $('.i3').val()

        $('.data1').prepend(txt1)
        $('.data2').prepend(txt2)
        $('.data3').prepend(txt3)
       
        $('.i1').hide()
        $('.i2').hide()
        $('.i3').hide()

    })

    $('.save2').on('click', function() {

        var txt1 = $('.i4').val()
        var txt2 = $('.i5').val()
        var txt3 = $('.i6').val()

        $('.data4').prepend(txt1)
        $('.data5').prepend(txt2)
        $('.data6').prepend(txt3)
       
        $('.i4').hide()
        $('.i5').hide()
        $('.i6').hide()

    })

    $('.save3').on('click', function() {

        var txt1 = $('.i7').val()
        var txt2 = $('.i8').val()
        var txt3 = $('.i9').val()

        $('.data7').prepend(txt1)
        $('.data8').prepend(txt2)
        $('.data9').prepend(txt3)
       
        $('.i7').hide()
        $('.i8').hide()
        $('.i9').hide()

    })
})