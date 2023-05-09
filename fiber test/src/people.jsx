const results = document.querySelector("#results");

// document.querySelector()

// async function asyncFetch(){
//     const res = await fetch('https://swapi.dev/api/people/')
//     const data = await res.json();
//     console.log(data)
// }

// https://swapi.dev/api/people/?page=2 there are multiple pages
let people =fetch("https://swapi.dev/api/people/").then((response) => {
    return response.json();
})

let films =fetch("https://swapi.dev/api/films/").then((response) => {
    return response.json();
})

people.then((data) =>{
    console.log(data)
    let output = "";
    data.results.forEach(element => {
        output+=`
            <div class= "card p-3 m-3" style="opacity:.8">
                <h4 class="card-title text-center">${element.name}</h4>
                <div class="car-content">
                    <span>Films</span>: ${element.gender}<br>

                </div>
            </div>
        `;

    });

    results.innerHTML=output
    let pages = document.getElementById('footer')
        pages.innerHTML='';
        if(data.previous){
            let prev = document.createElement('a');
            prev.href = data.previous;
            let url = new URL(data.previous);
            let labels = url.pathname.split('/');
            let label = labels[labels.length-2];
            prev.textContent=`<< Previous ${label}`;
            prev.setAttribute('data-link', data.previous);
            pages.append(prev);
        }
        if(data.next){
            console.log("hi")
            let next = document.createElement('a');
            next.href = data.next;
            let url = new URL(data.next);
            let labels = url.pathname.split('/');
            let label = labels[labels.length-2];
            next.textContent=`Next ${label} >>`;
            next.setAttribute('data-link', data.next)
            pages.append(next)
        }
})