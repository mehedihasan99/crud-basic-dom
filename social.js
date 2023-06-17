/**
 *! select
 **/
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const errorMsg = document.querySelector("#err-msg");
const postContainer = document.querySelector("#posts");
/**
 *! function
 **/
// click button

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// form validation check

const formValidation = (e) => {
  if (input.value === "") {
    errorMsg.innerHTML = "Please input value";
  } else {
    acceptData();
    errorMsg.innerHTML = "";
  }
};

// accept data and store
let data = {};
const acceptData = () => {
  data["text"] = input.value;
  createPost();
};

// create post

const createPost = () => {
  postContainer.innerHTML += `
   <div>
      <p>${data.text}</p>
      <span class="option">
      <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick='deletePost(this)' class="fa-sharp fa-solid fa-trash"></i>
       </span>
   </div>
  `;
  input.value = "";
};

// delete post

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// updatePost

const updatePost = (e) => {
  input.value = e.parentElement.previousElementSibling.textContent;
  e.parentElement.parentElement.remove();
};
