var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeallButton = document.getElementById('removeeverything')
removeallButton.addEventListener('click',removeallItem)

function addItem() {
    var input= document.querySelector('input')
    var item= input.value
    ul = document.getElementById('list')
    var textnode=document.createTextNode(item)
    if (item === '') {
        return false
    }
    else{
        li=document.createElement('li')
        //creating a checkbox
        var checkbox= document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')
        //creating a label
        var label=document.createElement('label')
        //placing it in the webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className='visual'
        }, 3);
        input.value=''
    }
}

function removeItem() {
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeallItem() {
    li=ul.children
    var index=0
    while(li[index] && li[index].children[0]) {
        ul.removeChild(li[index])
    }
}