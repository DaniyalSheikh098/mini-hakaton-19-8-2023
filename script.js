document.addEventListener('DOMContentLoaded', () => {
    const createPostButton = document.getElementById('create-post-btn');
    const postsList = document.getElementById('posts');

    createPostButton.addEventListener('click', createPost);

    function createPost() {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;

        if (postTitle && postContent) {
            const postItem = document.createElement('li');
            postItem.innerHTML = `<h3>${postTitle}</h3><p>${postContent}</p><button class="edit-btn">Edit</button>`;
            postsList.appendChild(postItem);

            // Clear input fields
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';

            // Add event listener for edit button
            const editButton = postItem.querySelector('.edit-btn');
            editButton.addEventListener('click', () => editPost(postItem, postTitle, postContent));
        }
    }

    function editPost(postItem, initialTitle, initialContent) {
        const newTitle = prompt('Edit Title:', initialTitle);
        const newContent = prompt('Edit Content:', initialContent);

        if (newTitle !== null && newContent !== null) {
            postItem.innerHTML = `<h3>${newTitle}</h3><p>${newContent}</p><button class="edit-btn">Edit</button>`;
            
            // Add event listener for edit button again
            const editButton = postItem.querySelector('.edit-btn');
            editButton.addEventListener('click', () => editPost(postItem, newTitle, newContent));
        }
    }
});


