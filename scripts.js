document.addEventListener("DOMContentLoaded", function() {

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
    
    alert("Your website is hacked!");
});


