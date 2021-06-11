
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()

}

function ready() {
    //console.log("here 2")
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //console.log(removeCartItemButtons)

    for (var i = 0; i< removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i< quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartItem(Event) {
    var buttonClicked = Event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(Event){
    var input = Event.target
    if (isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i< cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priseElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var prise = parseFloat(priseElement.innerText.replace('DT',''))
        var quantity = quantityElement.value
        //console.log(prise * quantity)
        total = total + (prise * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' DT'
}