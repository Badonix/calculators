var button = document.getElementById('btn')

button.addEventListener('click', function() {
    var a1 = document.getElementById('a1').value
    var d = document.getElementById('d').value
    var n = document.getElementById('n').value
    console.log("a1: " + a1)
    console.log("d: "+ d)
    console.log("n :" + n)
    var n_1 = n-1
    var mr = a1*2 + d*n_1
    var wiladi = mr / 2
    var answ = wiladi * n
    console.log(answ)
    document.getElementById('sum').value = answ
    
})
