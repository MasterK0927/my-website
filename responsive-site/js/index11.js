// Get all the radio buttons
const root = document.querySelector(":root");

function toggleContent(id) {
  var contentDiv = document.getElementById(id);
  var otherContentDiv = id === "content1" ? document.getElementById("content2") : document.getElementById("content1");
  if (contentDiv.style.display === "" || contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    otherContentDiv.style.display = "none";
    root.style.setProperty("--translating",'40px');
    root.style.setProperty("--translated",'calc(65px + 20px)');
    root.style.setProperty("--afterBackgroundColour", '#63cdff');
    root.style.setProperty("--checkedBackground",'linear-gradient(45deg, #20b7ff, blue)');
    root.style.setProperty("--afterShadow",'0 0 5px #63cdff, 0 0 15px #63cdff, 0 0 30px #63cdff');
  } else {
    contentDiv.style.display = "none";
    root.style.setProperty("--translating",0);
    root.style.setProperty("--translated",'50px');
    root.style.setProperty("--afterBackgroundColour", '#555');
    root.style.setProperty("--checkedBackground",'0');
    root.style.setProperty("--afterShadow",'none');
  }
}

//form-submission

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementsByClassName("text-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    mssage: messageInput.value,
  };

  alert("Thank You for reaching me out!");

  form.reset();
});


// root.style.setProperty("--fade-color",'#E9ECE6');
// root.style.setProperty("--font-color",'black');

const darkModeToggle = document.getElementById('Dark-Mode');
const body = document.body;
const content = document.querySelector('.bg');
let originalContentStyle1;
let originalContentStyle2;
let originalContentStyle3;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  content.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    originalContentStyle1 = content.getAttribute('style');
    originalContentStyle2 = body.getAttribute('style');
    originalContentStyle3 = root.getAttribute('style');
    content.style.background = 'var(--fade-color-3)';
    content.style.color = 'var(--font-color-3)';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    root.style.setProperty("--displayTypeNo",'block');
    root.style.setProperty("--displayTypeYes",'none');
  } else {
    content.setAttribute('style', originalContentStyle1);
    body.setAttribute('style', originalContentStyle2);
    root.setAttribute('style' , originalContentStyle3);
  }
});

let alertShow = false;
setInterval(() => {
  document.title =
  alertShow ? "✨Viewing Keshav's Portfolio✨": "Follow @MasterK0927 🧑‍💻";

  alertShow = !alertShow;
}, 1000);