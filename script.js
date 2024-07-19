// Create a style element
const style = document.createElement('style');
style.textContent = `
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
  .hacked-container {
    text-align: center;
  }
  .hacked-message {
    font-size: 2em;
    margin-bottom: 20px;
    animation: blink 1s steps(2, start) infinite;
  }
  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
  .hacker-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;

// Append the style element to the head
document.head.appendChild(style);

// Create the hacked container
const container = document.createElement('div');
container.className = 'hacked-container';

// Create the message element
const message = document.createElement('div');
message.className = 'hacked-message';
message.textContent = 'This website is Hacked';

// Create the image element
const img = document.createElement('img');
img.src = 'Hacker.png';
img.alt = 'Hacker Image';
img.className = 'hacker-image';

// Append message and image to the container
container.appendChild(message);
container.appendChild(img);

// Append the container to the body
document.body.appendChild(container);
