const botao = document.getElementById("btnBuscar");
const loading = document.getElementById("loading");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    loading.style.display = "block";
    resultado.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then(response => {
        loading.style.display = "none";

        if(!response.ok){
            throw new Error("Erro HTTP: " + response.status);

        }
        return response.json();
        
    })
    .then(posts =>{
        resultado.innerHTML = "<ol>";

        const lista = resultado.querySelector("ol");

        posts.forEach(post => {
            lista.innerHTML += `
        <li><p>${post.title}</p></li>`;
        });
    })
    .catch(erro => {
        loading.style.display = "none";
        resultado.innerHTML = `Erro ao realizar a requisição. <br> 
        (${erro.message})`;
    });
});
