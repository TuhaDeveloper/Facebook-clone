
// const Notifecations = document.getElementById("notifecations");
const leftMenu = document.querySelectorAll(".manu-items");
//================== message ===========================//
const messages_Var = document.querySelector(".messages");
const messages_Container = document.querySelector(".messagess");
const messag_search = document.querySelector("#message-search");
const message = messages_Container.querySelectorAll(".msg-div");
// ============thems==============
const Thems = document.querySelector('#thems');
const ThemsModal = document.querySelector('.cutomize-theme');
const RemoveThems = document.querySelector('.remove')

//========== font =====================//
const FontSize = document.querySelectorAll('.font-size span');

//============== color ===================//
var root = document.querySelector(':root')
const Color = document.querySelectorAll('.color span');

//=========== background ==================//
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//============= messages pointer ================ //
const messagPoint = document.querySelectorAll('.catagory h6');

const RemoveCagatory = () => {

    messagPoint.forEach(msgpoint => {
        msgpoint.classList.remove('active')

    })

}

messagPoint.forEach(msgpoint => {

    msgpoint.addEventListener('click', () => {
        RemoveCagatory();
        msgpoint.classList.add('active')
    })

})
messages_Var.addEventListener('click', () => {
    console.log('clicked')
    messages_Container.classList.add('messages-border')
    setInterval(() => {
        messages_Container.classList.remove('messages-border')

    }, 2000);
})

// =========== message search ====================//
const searchMessage = () => {
    const value = messag_search.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(value) != -1) {
            chat.style.display = 'flex';

        } else {
            chat.style.display = 'none';
        }
    })

}


messag_search.addEventListener('keyup', searchMessage)


// =========== height light messag bar ============// 

const ChangeClass = () => {
    leftMenu.forEach(item => {
        item.classList.remove('active');

    })
}



leftMenu.forEach(item => {
    item.addEventListener('click', () => {
        ChangeClass();
        item.classList.add('active');

        if (item.id != 'notifecations') {
            document.querySelector('.allNotidiv').style.display = 'none';
        } else {
            document.querySelector('.allNotidiv').style.display = 'block';
        }


    })
});

//========== theme ===================================//



const openThemeModal = () => {
    ThemsModal.style.display = 'grid'
}


Thems.addEventListener('click', openThemeModal)

// remove theme model//

const closeModel = (e) => {
    if (e.target.classList.contains('cutomize-theme')) {
        ThemsModal.style.display = 'none';
        console.log('theme')
    }
}
ThemsModal.addEventListener('click', closeModel)

// =================== font size change ========================//

const closeFontSize = () => {
    FontSize.forEach(size => {
        size.classList.remove('active')

    })
}



FontSize.forEach(size => {


    size.addEventListener('click', () => {

        closeFontSize()
        let fontSize;
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
        }
        document.querySelector('body').style.fontSize = fontSize;
    })

})

//=============== color ==========================//

const removeColorActive = () => {
    Color.forEach(color => {
        color.classList.remove('active')

    })
}


Color.forEach(color => {


    color.addEventListener('click', () => {
        removeColorActive();
        color.classList.add('active')

        let primary;

        if (color.classList.contains('color-1')) {
            primaryColor = "rgb(18, 206, 81  )";
            // root.style.setProperty('--color-primary', primaryColor)
        } else if (color.classList.contains('color-2')) {
            primaryColor = 'rgb(175, 175, 34)';

            // root.style.setProperty('--color-primary', primaryColor)

        } else if (color.classList.contains('color-3')) {
            primaryColor = 'rgb(32, 185, 160)';

            // root.style.setProperty('--color-primary', primaryColor)
        } else if (color.classList.contains('color-4')) {

            primaryColor = 'rgb(185, 56, 16)';

            // root.style.setProperty('--color-primary', primaryColor)
        } else if (color.classList.contains('color-5')) {
            primaryColor = 'rgb(163, 78, 78)';

            // root.style.setProperty('--color-primary', primaryColor)
        }
        root.style.setProperty('--color-primary', primaryColor)
    })
})

//================= Background =====================//

bg1.addEventListener('click', () => {
    root.style.setProperty('--color-body', "var(--color-bodynew)")
})
bg2.addEventListener('click', () => {
    root.style.setProperty('--color-body', "var(--color-body2)")
})
bg3.addEventListener('click', () => {
    root.style.setProperty('--color-body', "var(--color-body3)")
})



