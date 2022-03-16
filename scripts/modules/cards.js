export const cards = (data, container) => {

    data.forEach(element =>{

        let img = document.createElement('img');
        img.setAttribute ('src', element.img);

        //img.setAttribute ('src', element.img);

        /*let titulo = document.createElement('titulo');
        titulo.setAttribute ('id',element.titulo);*/


        

        container.appendChild (img);
        //container.appendChild (titulo);
    }
    );
}

