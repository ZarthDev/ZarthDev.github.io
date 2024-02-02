let StateColor = 'Light';

function ShakeImg ( ) {
    let img = document.getElementById('profile-img');

    img.className = 'animate__animated animate__rubberBand';

    setTimeout(function () {
        img.className = '';
    }, 1500);
}

let sidebar = document.getElementById('lateral-content');
let sidebarActive = false;

let screenSidebar = (screenSize * 100) / 40;

function OpenSidebar ( ) {
    if ( !sidebarActive ) {
        sidebar.style.left = 0;
        sidebarActive = true;
    }else{
        sidebar.style.left = `-${screenSidebar}px`;
        sidebarActive = false;
    }
}

function SetBg ( ) {
    let radioBtn = document.getElementById('circle');

    radioBtn.style.animation = '';

    if (StateColor === 'Light') {
        StateColor = 'Dark';

        let elements = Array();
        elements = document.getElementsByClassName('light-bg');

        for (let i = elements.length ; i >= 0 ; i--) {
            if (elements[i] != undefined) {
                elements[i].className = 'dark-bg';
            }
        }

        radioBtn.style.animation = 'RollRight 0.5s forwards';
    }else{
        StateColor = 'Light';
        
        let elements = Array();
        elements = document.getElementsByClassName('dark-bg');

        for (let i = elements.length ; i >= 0 ; i--) {
            if (elements[i] != undefined) {
                elements[i].className = 'light-bg';
            }
        }

        
        radioBtn.style.animation = 'RollLeft 0.5s forwards';
    }
}

function messagePopUp ( ) {
    if (document.getElementById('message') === null) {
        let messageArea = document.getElementById('contact');
        let message = document.createElement('div');
    
        let messageTittle = document.createElement('h1');
        let messageSpan = document.createElement('a');
        let messageButton = document.createElement('button');
    
        messageTittle.innerHTML = 'CONTATO:';
        messageSpan.innerHTML = '+55 51 98692-8804';
        messageSpan.href = "https://wa.me/5551986928804";
        messageButton.innerHTML = 'Fechar';
    
        messageButton.className = 'btn btn-outline-danger';
    
        messageButton.onclick = function ( ) {
            message.className = 'animate__animated animate__fadeOutLeft';

            setTimeout(function () {
                message.remove();
            }, 2000);
        }
    
        message.id = 'message';
        message.className = 'animate__animated animate__fadeInRight';

        messageArea.appendChild(message);
    
        message.appendChild(messageTittle);
        message.appendChild(messageSpan);
        message.appendChild(messageButton);

        if (StateColor === 'Light') {
            message.style.background = '#F2F0F0';
            message.style.color = '#050505';
        }else{
            message.style.background = '#050505';
            message.style.color = '#F2F0F0';
        }
    }
}