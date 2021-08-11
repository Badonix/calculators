window.onload=function(){
    var button4 = document.getElementById('counttt')
    button4.addEventListener('click', function(){
        var a1 = document.getElementById('A1').value
        var b1 = document.getElementById('B1').value
        var c1 = document.getElementById('C1').value
        var c2 = document.getElementById('C2').value
        var a2 = document.getElementById("A2").value
        var b2 = document.getElementById("B2").value

        if ((a1 != a2)||(b1 != b2)){
            Swal.fire('წრფეები პარალელური არ არის')
        }
        else{
            var mr2 = c2-c1
            var mr = Math.abs(mr2)
            var mn1 = a1**2
            var mn2 = b1**2
            var mn3 = mn1+mn2
            var mn = Math.sqrt(mn3)
            var answ = mr/mn
            var answ1 = answ.toString()
            var answer = answ1.substring(0,6) 
       
            document.getElementById('pasuxi').textContent = "მანძილი - " + answer + " სმ"
        }
    
    


     
        
    })
   
}

