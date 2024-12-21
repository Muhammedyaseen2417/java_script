fetch('https://dummyjson.com/products').then(response => response.json()).then(data=>{
    data.products.forEach(element => {
        const row = document.querySelector(".row")
        const col = document.createElement("div")
        col.classList.add("col-lg-3")
        col.innerHTML=`
                        <div class="card" style="width: 100%">
                <img ..." class="card-img-top" src="${element.thumbnail}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <button type="button" class="btn btn-primary see_more" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#myModal">
                    view details
                </button>
                </div>
                </div>
        `

        row.appendChild(col)

        
    });

    document.querySelectorAll(".see_more").forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            const proid= e.target.getAttribute("data-id")
            const product = data.products.find((pro)=>pro.id==proid)
            console.log(product);
            document.querySelector(".modal-title").innerHTML=product.title
            document.getElementById("modal-img").src=product.thumbnail
            
        })
    })
}) 