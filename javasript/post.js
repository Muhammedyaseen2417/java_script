fetch('https://dummyjson.com/posts').then(response => response.json()).then(data=>{
    data.products.forEach(element => {
        const row = document.querySelector(".row")
        const col = document.createElement("div")
        col.classList.add("col-lg-3")
        col.innerHTML=`
                        <div class="card" style="width: 100%">
               
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    
                </div>
                </div>
        `

        row.appendChild(col)

        
        
    });



}) 

    
