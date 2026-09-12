const cl = console.log;

let base_url = 'https://jsonplaceholder.typicode.com/'
let todo_url = `${base_url}/todos`



let xhr = new XMLHttpRequest();

xhr.open('GET', todo_url, true)

xhr.send()

xhr.onload = function(){
    cl(xhr.status)
    cl(xhr.response)

    if(xhr.status >= 200 && xhr.status <= 299){
        let data = JSON.parse(xhr.response)
        let res = '';

        data.forEach(ele => {
            res += `<li class="list-group-item d-flex justify-content-between align-items-center" id="${ele.id}">
                        <h5 class="text-left m-3">${ele.userId}</h5>
                        <h6 class="mr-auto title">${ele.title} : <span class="badge ${ele.completed === true ? "badge-success" : "badge-danger"}">${ele.completed === true ? "completed" : "Pending"}</span></h6>

                         <div>
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Remove</button>
                         </div>
                        
                    </li>`
        });

        let todoContainer = document.getElementById('todoContainer')
        todoContainer.innerHTML = res;
    }
}