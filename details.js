function obterIdProduto() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

async function detalharProduto() {
  const idProduto = obterIdProduto();
  console.log(idProduto);
  const baseUrl = "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/produtos/?id=${idProduto}`);
  const produto = await res.json();

  const container = document.getElementById("produto-detalhado");
  console.log(container)
  container.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${produto[0].imgScr}" class="rounded float-left" alt="..." style="width: 500px; height: 500px;" >
      </div>
      <div class="col-md-4">
        <div class="row">
          <p class="h2"> ${produto[0].title} </p>
          <div class="ml-1 mr-1">
            <i class="bi bi-suit-heart" style="width: 30px; height: 30px;"></i>
            <i class="bi bi-arrows-angle-expand" style="width: 30px; height: 30px;"></i>
          </div>
          <p> ${produto[0].text} </p>
          <p> ${produto[0].textDesc} </p>
          <div class="row">
            <div class="text-dark"> <p> Cores </p> </div>
            <div class="ml-1 mr-1 mt-1 mb-1" style="border-radius:50%; background-color: #F2CFC6; cursor:pointer; height: 30px; width: 30px;"></div>
            <div class="ml-1 mr-1 mt-1 mb-1" style="border-radius:50%; background-color:#DADBC6; cursor:pointer; height: 30px; width: 30px;"></div>
          </div>
          <div class="row">
            <div class="text-dark"> <p> Size </p> </div>
              <button type="button" class="btn btn-outline-dark pequeno"> A6 </button>
              <button type="button" class="btn btn-outline-dark pequeno"> A5 </button>
              <button type="button" class="btn btn-outline-dark pequeno"> A4 </button>
              <button type="button" class="btn btn-outline-dark pequeno"> G </button>
              <button type="button" class="btn btn-outline-dark pequeno"> M </button>
              <button type="button" class="btn btn-outline-dark pequeno"> P </button>
              <button type="button" class="btn btn-outline-dark pequeno"> MP </button>
            </div>
            <div class="row mt-1">
              <a href="carrinho.html"> <button type="button" class="btn btn-info btn-primary medio" id="add-to-cart"> Adicionar ao carrinho </button> </a>                    
            </div> 
          </div>               
        </div>
      </div>
    </div>                     
  `;
  document.getElementById('add-to-cart').addEventListener('click', () => {
      document.location.href = `carrinho.html?id=${idProduto}`;
  });
}
detalharProduto()