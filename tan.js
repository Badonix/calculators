window.onload=function(){
    var button = document.getElementById("btn")

button.addEventListener('click', function(){
    var k1 = document.getElementById('K1').value
    var k2 = document.getElementById('K2').value
   

    var mr = k2-k1
    var mn2 = k1*k2
    var mn = 1-mn2
    var wil = mr/mn
    var answ = Math.abs(wil)
    var answstring = answ.toString()
    var answer = answstring.substring(0, 6)

    document.getElementById('pasuxi1').textContent ="tan α= " + answer
    console.log(answer)
})

}


