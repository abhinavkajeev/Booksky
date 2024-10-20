// Function to show the modal
function showModal() {
  const modal = document.getElementById("addBookModal");
  modal.classList.add("show");
  setTimeout(() => {
    modal.style.display = "flex";
  }, 0); // Ensure display is flex for transition
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById("addBookModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Wait for transition to finish before hiding
  clearForm(); // Clear the form fields when the modal is closed
}

// Function to clear form fields
function clearForm() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookDescription").value = "";
}

// Function to add a new book note
function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const description = document.getElementById("bookDescription").value;

  // Ensure title and author are not empty
  if (title && author) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    setTimeout(() => {
      bookCard.classList.add("show");
    }, 0); // Trigger transition effect

    // Add the book information to the card
    bookCard.innerHTML = `
              <h2>${title}</h2>
              <h3>${author}</h3>
              <p>${description}</p>
              <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
          `;

    document.getElementById("notesContainer").appendChild(bookCard);
    hideModal();
  } else {
    alert("Please fill in both the title and the author.");
  }
}
