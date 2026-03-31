:root {
  --bg: #fff8f5;
  --bg-soft: #fff1ec;
  --paper: #fffdfb;
  --rose: #b76e79;
  --rose-dark: #8f4d57;
  --rose-light: #ead0d3;
  --gold: #d3a164;
  --text: #4f4042;
  --muted: #7e6b6e;
  --line: rgba(183, 110, 121, 0.18);
  --shadow: 0 20px 55px rgba(108, 68, 75, 0.12);
  --radius: 28px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Be Vietnam Pro", sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #fff8f5 0%, #fffdfb 44%, #fff2ef 100%);
  overflow-x: hidden;
}

img {
  display: block;
  width: 100%;
}

input,
textarea,
button {
  font: inherit;
}

button {
  cursor: pointer;
}

