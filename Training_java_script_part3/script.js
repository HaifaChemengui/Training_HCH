const wait2Seconds = new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds passed");
    }, 2000);
  });
  
  // Tester avec then
  wait2Seconds.then(message => console.log(message));
  
  //  Utiliser async/await pour la Promise
  async function runWait() {
    const message = await wait2Seconds;
    console.log("Async/Await:", message);
  }
  
  runWait();
  
  // Fetch un post et afficher titre dans le DOM
  const post1Div = document.getElementById("post1Title");
  
  async function fetchPost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
  
      // Afficher le titre dans le DOM
      post1Div.textContent = data.title;
  
      // Log dans la console
      console.log(`Post ${id} title:`, data.title);
    } catch (error) {
      post1Div.textContent = "Erreur lors du fetch";
      console.error("Fetch error:", error);
    }
  }
  
  // Appeler pour post 1
  fetchPost(1);
  
  // Step 4: Fetch deux posts avec Promise.all et loguer titres
  const postsList = document.getElementById("postsList");
  
  async function fetchTwoPosts() {
    const postIds = [1, 2];
  
    const promises = postIds.map(id =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    );
  
    try {
      const posts = await Promise.all(promises);
  
      // Afficher dans le DOM
      postsList.innerHTML = ""; // reset
      posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        postsList.appendChild(li);
  
        // Log dans la console
        console.log("Title:", post.title);
      });
    } catch (error) {
      console.error("Erreur fetching posts:", error);
    }
  }
  
  // Appeler pour les deux posts
  fetchTwoPosts();
  