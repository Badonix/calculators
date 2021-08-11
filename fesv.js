window.onload=function(){
    var button4 = document.getElementById('counttt')
    button4.addEventListener('click', function(){
        var a = document.getElementById('a').value
        var b = document.getElementById('b').value
        var c = document.getElementById('c').value


        var b1 = b*-1
        
        var fesvqvesh1 = b**2 
        var fesvqvesh2 = a*c
        var fesvqvesh3 = 4*fesvqvesh2
        var fesvqvesh = fesvqvesh1 - fesvqvesh3
        var second = Math.sqrt(fesvqvesh)

        var mn = 2*a

        var answ12 = b1 - second
        var answ1 = answ12/mn

        var answ22 = b1 + second
        var answ2 = answ22/mn


        var answ1string = answ1.toString()
        var answ2string = answ2.toString()
         
        var answ1short = answ1string.substring(0,7)
        var answ2short = answ2string.substring(0,7)
 
        document.getElementById('pasuxi').textContent = "X1 = " + answ1short
        document.getElementById('pasuxi2').textContent = "X2 = " + answ2short
    })
   
}

