// sign in open
    const openModalSI = document.querySelector('.openModalSI');
    const ModalSI = document.querySelector('#sign_in');
    openModalSI.addEventListener('click', () => {
        ModalSI.showModal();
    });
    // close
    const closeModalSI = document.querySelector('.closeModalSI');
    closeModalSI.addEventListener( 'click', (e) => {
        if (e.target == document.querySelector(".closeModalSI")){
            ModalSI.close();
        }
    });
// sing up open
    const openModalSU = document.querySelector(".openModalSU");
    const ModalSU = document.querySelector("#sign_up");

    openModalSU.addEventListener('click', ()=> {
        ModalSU.showModal();
    })
    // close 
    const closeModalSU = document.querySelector('.closeModalSU');
    closeModalSU.addEventListener( 'click', (e) => {
        if (e.target == document.querySelector(".closeModalSU")){
            ModalSU.close();
        }
    });







// closeModalSISI.addEventListener( 'click', () => {
//     if (closeModalSISI != document.querySelector('#signin'))
//     document.querySelector('#sign_in').close ( )
// }

// function closeModalSISI(e){
//     if(e.target == document.querySelector('#signin')) document.querySelector('#signin').close()
//     console.log(e.target)
// }