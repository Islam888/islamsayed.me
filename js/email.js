const sendBtn = document.querySelector('.send-btn')
sendBtn.addEventListener('click', e => {
    e.preventDefault()
    const email = document.getElementById('email')
    const name = document.getElementById('name')
    const message = document.getElementById('message')
    const templateParams = {
        email: email.value,
        name: name.value,
        message: message.value
    }
    if (email.value && name.value && message.value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            emailjs.send("islam", "template_Q49bolsv", templateParams)
            .then(() => {
                console.log('sent')
                const snackbarSuccess = document.getElementById('snackbar-success')
                snackbarSuccess.className = 'show'
                setTimeout(() => {
                    snackbarSuccess.classList.remove('show')
                }, 3000)
            })
        } else {
            const snackbarFailedEmail = document.getElementById('snackbar-failed-email')
            email.classList.add('invalid')
            snackbarFailedEmail.className = 'show'
                setTimeout(() => {
                    snackbarFailedEmail.classList.remove('show')
                }, 3000)
        }
        
    } 
    email.onchange = () => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            email.classList.add('invalid')
        } else {
            email.classList.remove('invalid')
        }
    }
})

const subscribeBtn = document.querySelector('.subscribe-btn')
subscribeBtn.addEventListener('click', () => {
    const subscribeEmail = document.getElementById('subscribe-email')
    const templateParams = {
        email: subscribeEmail.value
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscribeEmail.value)) {
        emailjs.send("islam", "template_Q49bolsv", templateParams)
            .then(() => {
                console.log('sent')
                const snackbarSubscribeSuccess = document.getElementById('snackbar-subscribe-success')
                snackbarSubscribeSuccess.className = 'show'
                setTimeout(() => {
                    snackbarSubscribeSuccess.classList.remove('show')
                }, 3000)
            })
    } else {
        const snackbarFailedSubscribe = document.getElementById('snackbar-failed-subscribe')
        subscribeEmail.classList.add('invalid')
            snackbarFailedSubscribe.className = 'show'
                setTimeout(() => {
                    snackbarFailedSubscribe.classList.remove('show')
                }, 3000)
    }
})