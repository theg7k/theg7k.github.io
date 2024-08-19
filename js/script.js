document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const addPostBtn = document.getElementById('add-post-btn');

    // Example posts array - manually add posts here
    const posts = [
        {
            title: "Welcome to My Blog",
            content: "<p>This is the first post on my blog. Stay tuned for more updates!</p>"
        },
        {
            title: "Another Blog Post",
            content: "<p>This is another post with <strong>bold text</strong> and <em>italic text</em>.</p>"
        }
    ];

    // Function to display posts
    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><div>${post.content}</div>`;
            postsContainer.appendChild(postElement);
        });
    }

    // Display posts on page load
    displayPosts();

    // Open text editor to add a new post
    addPostBtn.addEventListener('click', () => {
        const editorContainer = document.createElement('div');
        editorContainer.classList.add('editor-container');
        editorContainer.innerHTML = `
            <div id="editor"></div>
            <input type="text" id="post-title" placeholder="Post Title" required>
            <button id="save-post-btn" class="btn">Save Post</button>
        `;
        postsContainer.prepend(editorContainer);

        // Initialize Quill editor
        const quill = new Quill('#editor', {
            theme: 'snow'
        });

        // Save post
        document.getElementById('save-post-btn').addEventListener('click', () => {
            const title = document.getElementById('post-title').value;
            const content = quill.root.innerHTML;

            if (title && content) {
                posts.push({ title, content });
                editorContainer.remove();
                displayPosts();
            } else {
                alert('Please enter a title and content');
            }
        });
    });
});
