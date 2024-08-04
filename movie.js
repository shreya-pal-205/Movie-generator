let btn = document.querySelector(".btn");
let inputBox = document.querySelector(".input-box");
let result = document.querySelector(".result");

btn.addEventListener("click",()=>{
    getMovie(inputBox.value);
})

async function getMovie(movie){
    result.innerHTML = "";
    let url = `https://www.omdbapi.com/?apikey=2c928f03&t=${movie}`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    let left = document.createElement("div");
    left.classList.add("left");
    let poster = document.createElement("img");
    poster.src = data.Poster;
    result.appendChild(left).appendChild(poster);

    let right = document.createElement("div");
    right.classList.add("right");
    result.appendChild(right);

    let h1 = document.createElement("h1");
    h1.innerHTML = data.Title;
    right.appendChild(h1);

    let p = document.createElement("p");
    p.innerHTML = data.Writer;
    p.classList.add("writer");
    right.appendChild(p);

    let info = document.createElement("div");
    info.innerHTML = `<p><strong>Cast: </strong>${data.Actors}</p>
    <p><strong>Released Date: </strong>${data.Released}</p>
    <p><strong>Duration: </strong>${data.Runtime}</p>
    <p><strong>Language: </strong>${data.Language}</p>
    <p><strong>Plot: </strong>${data.Plot}</p>`;
    info.classList.add("info");
    right.appendChild(info);

    inputBox.value = "";
}
    