const inputForm = document.querySelector('.quizForm')
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const p = document.querySelector('.testResult')
const pImg = document.querySelector('.backgroundResult')




const respostArray =['A','C','D','B','B','A','D','C','A','D']


inputForm.addEventListener('submit', event =>{
    event.preventDefault()

    popup.style.display = 'block'

    let score = 0

    const userAnswers = [
        inputForm.inputQuestion1.value, 
        inputForm.inputQuestion2.value, 
        inputForm.inputQuestion3.value, 
        inputForm.inputQuestion4.value, 
        inputForm.inputQuestion5.value, 
        inputForm.inputQuestion6.value, 
        inputForm.inputQuestion7.value, 
        inputForm.inputQuestion8.value, 
        inputForm.inputQuestion9.value, 
        inputForm.inputQuestion10.value]

    userAnswers.forEach((userAnswers, index) =>{
        if(userAnswers === respostArray[index]){
            score += 10
        }
    })
    if(score < 70) {
        pImg.setAttribute ('class', 'disapprovedImg')
        p.setAttribute ('class', 'disapproved')
        p.textContent=`Você obteve ${score} pontos de 100. Você ficou abaixo da média (70%). Vamos revisar o conteúdo!`
        return
    } 
       pImg.setAttribute ('class', 'approvedImg') 
       p.setAttribute('class', 'approved')
       p.textContent=`Parabéns! Você obteve ${score} pontos de 100, ótimo trabalho :)`
})


popup.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
     popup.style.display = 'none'
    }
})