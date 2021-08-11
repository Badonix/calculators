var button1 = document.getElementById('btn1')
button1.addEventListener('click', function(){

    var b1 = document.getElementById('b1').value
    var q = document.getElementById('q').value
    var n1 = document.getElementById('n1').value
  
    var qn = q**n1
    var fr = qn-1
    var mr = b1 * fr
    var mn = q-1
    var answ1 = mr/mn
    
  

    document.getElementById('sum1').value = answ1
    console.log(answ1)

})