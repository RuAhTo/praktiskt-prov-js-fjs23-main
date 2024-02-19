// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här
const url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts (){
    try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`HTTP Error! Status:${response.status}`)
    }
    const todos = await response.json();
    const completedTodos = todos.filter(todo => todo.completed)
    const containerElement = document.createElement('div')
    containerElement.id = "posts";
    completedTodos.forEach(todo => {
        const titleElement = document.createElement('p');
        titleElement.textContent = todo.title;
        document.body.appendChild(titleElement);
        console.log(completedTodos)
    })
    
    }catch(error){
        console.log(error);
        throw error;
    }
}

getPosts();