const addBtn = document.querySelector('#addBtn')
const contactName = document.querySelector('#contactName')
const contactNumber = document.querySelector('#contactNumber')
const tbody = document.querySelector('#tbody')

addBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    if(contactName.value == ''){
        console.log('Nome inválido!')
    } else if (contactNumber.value == '') {
        console.log('Número inválido!')
    } else {
        createTr()
    }


})

function createTr(){
    let newTr = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdNumber = document.createElement('td')
    tdName.classList.add('tableName')
    tdName.innerHTML = contactName.value
    tdNumber.innerHTML = contactNumber.value
    newTr.appendChild(tdName)
    newTr.appendChild(tdNumber)
    tbody.appendChild(newTr)
    clean()
}

function clean(){
    contactName.value = ''
    contactNumber.value = ''
}