<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio | Vineela</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Vaishnavi's Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I am an aspiring front-end developer passionate about creating interactive web experiences.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>To-Do List App</h3>
      <div id="todo-app">
        <input type="text" id="taskInput" placeholder="Enter task" />
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
      </div>

      <h3>Product Listing</h3>
      <div>
        <select id="sort" onchange="renderProducts()">
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
        <div id="productContainer"></div>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <script src="script.js"></script>
</body>
</html>