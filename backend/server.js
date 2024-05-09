const express = require('express');
const app = express();

// Sample data - Replace this with your actual data
const articles = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    { id: 3, title: "Article 3", content: "Content of Article 3" }
];

// Route to display a list of articles
app.get('/', (req, res) => {
    res.json(articles);
});

// Route to display a specific article
app.get('/article/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);
    if (article) {
        res.json(article);
    } else {
        res.status(404).send("Article not found");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
