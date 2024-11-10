const http = require('http');

const server = http.createServer((req, res) => {
  // Respuesta en HTML con CSS para centrar el texto y hacerlo color tomate
  const response = `
    <html>
      <body style="text-align:center; color:tomato;">
        Hello, Engineer! This is a Docker container running a JavaScript app.
      </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(response);
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}...`);
});

