document.getElementById('loginForm').addEventListener('submit', function(event)
 {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields");
    } else {
        // Process login here (e.g., send data to a server)
        alert("Login successful!");
    }
});
const backgrounds = [
    "url('https://example.com/image1.jpg')",
    "url('https://example.com/image2.jpg')",
    "url('https://example.com/image3.jpg')"
];

let currentBackground = 0;

function changeBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    document.getElementById('dynamic-bg').style.backgroundImage = backgrounds[currentBackground];
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
document.getElementById('dynamic-bg').style.backgroundImage = backgrounds[0];

