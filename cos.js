window.onload=function(){
    var button4 = document.getElementById('counttt')
    button4.addEventListener('click', function(){
        var a1 = document.getElementById('A1').value
        var b1 = document.getElementById('B1').value
        var c1 = document.getElementById('C1').value
        var a2 = document.getElementById('A2').value
        var b2 = document.getElementById('B2').value
        var c3 = document.getElementById('C2').value
   
        var first = a1*a2
        var sec = b1*b2
        var jm = first + sec
        var mr = Math.abs(jm) 
        var third = a1**2
        var fourth = b1**2
        var fifth = third + fourth
        var sixth = Math.sqrt(fifth)
        var seventh = a2**2
        var eighth = b2**2
        var nineth = seventh+eighth
        var tenth = Math.sqrt(nineth)
        var mn = sixth*tenth
        var answ = mr/mn
        var answ4 = answ.toString()
        var lastansw = answ4.substring(0,7)
   
        document.getElementById('pasuxi').textContent = "cos α = " + lastansw
    })
   
}

