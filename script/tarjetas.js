

function clear(){
    let a = document.querySelectorAll('p')
    for (let i = 0; i < a.length; i++) {

        a[i].remove();
        
    }
}


// })

document.addEventListener('DOMContentLoaded', ()=>{
  showProductos(productos);
  selectProduct();
})



function showProductos(productos){

  const contenedorTarjeta = document.querySelector('#reposteria');
  clear()

  productos.forEach((card)=>{
    const cardHtml = document.createElement('div');

    

    const {imagen,nombre,categoria,descripcion,precioPorcion,precioEntera} = card;


    cardHtml.innerHTML = `

      <div class="col">
        <div class="card " style="width: 18rem;">
          <img src="img/${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h1 class="card-title"> ${nombre}</h1>
            <p class="card-text">... </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${categoria}</li>

            <a href="#" type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal"  img="${imagen}" descrip="${descripcion}" name ="${nombre}" style="font-size: 18px;">
            mas informacion
            </a>



          </ul>
            
                
        </div>
      </div>
    `;
    contenedorTarjeta.appendChild(cardHtml);

  });
}


const tbody = document.querySelector('tbody');
const rowModal = document.createElement('tr');


function  selectProduct(){
    
  const details = document.querySelector('#reposteria');
  details.addEventListener('click', loadDetails);

}

function loadDetails(e) {

    const imagen = (e.target.getAttribute('img'));
    const descripcion = (e.target.getAttribute('descrip'));
    const nombre = (e.target.getAttribute('name'));


  

    rowModal.innerHTML = `


    <td>
      <img src="img/${imagen}" class="card-img-top" alt="...">
    
    </td>
    <td>
      <p>${nombre}</p>
    
    </td>

    <td>
      <p>${descripcion}</p>
    </td>
   
  `;
    tbody.appendChild(rowModal);
    
}



