let currentPostIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
    const blogPosts = await getBlogPosts();
    if (blogPosts.length > 0) {
        displayBlogPost(blogPosts[currentPostIndex]);
    } else {
        alert('Nenhum post de blog encontrado.');
    }
});

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            nextPost();
            break;
        case 'ArrowLeft':
            prevPost();
            break;
    }
});

document.getElementById('nextPost').addEventListener('click', nextPost);

document.getElementById('prevPost').addEventListener('click', prevPost);

async function getBlogPosts() {
    try {
        const response = await fetch('content/blog-posts.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blogPosts = await response.json();
        return blogPosts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

function displayBlogPost(post) {
    const postTitle = document.getElementById('postTitle');
    postTitle.textContent = post.title;

    const postDate = document.getElementById('postDate');
    postDate.textContent = post.date;

    const postContent = document.getElementById('postContent');
    postContent.innerHTML = post.content;
}

async function nextPost() {
    const blogPosts = await getBlogPosts();
    if (blogPosts.length === 0) return;
    currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
    displayBlogPost(blogPosts[currentPostIndex]);
}

async function prevPost() {
    const blogPosts = await getBlogPosts();
    if (blogPosts.length === 0) return;
    currentPostIndex = (currentPostIndex - 1 + blogPosts.length) % blogPosts.length;
    displayBlogPost(blogPosts[currentPostIndex]);
}