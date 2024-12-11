let data=[{id:"1",name:"aslam",age:21},{id:"2",name:"yaseen",age:22},{id:"3",name:"shahid",age:20},{id:"4",name:"fayas",age:22},{id:"5",name:"althaf",age:20}]
function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach(Element=>{

        let tr = document.createElement("tr")
        let id_td = document.createElement("td")
        id_td.innerHTML=Element.id
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=Element.name
        tr.appendChild(name_td)
    
        let age_td=document.createElement("td")
        age_td.innerHTML=Element.age
        tr.appendChild(age_td)
        tbody.appendChild(tr)
    })
    
}

document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id=document.getElementById('id').value
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    data.push({id:id,name:name,age:age})
    Display()
})


Display()
    