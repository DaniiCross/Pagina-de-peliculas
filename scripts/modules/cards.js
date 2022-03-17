export const cards = (data, container) => {

    data.forEach(element =>{
        let divCard =document.createElement('div');
        let imgCard = document.createElement('img');
        imgCard.setAttribute ('src', element.img);
        let titleCard = document.createElement('h3');
        titleCard.innerHTML = element.titulo;

        

        divCard.appendChild(titleCard);
        divCard.appendChild(imgCard);

        container.appendChild(divCard);


    })
}


    /*data.forEach(element =>{

        let img = document.createElement('img');
        img.setAttribute ('src', element.img);
        let titulo = document.createElement('label');
        titulo.innerHTML = element.titulo;

        img.style.height = "100px";
        img.style.width ="100px";

        container.appendChild(titulo);
        container.appendChild (img);
    }
    );
}*/

