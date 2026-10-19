
const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Praktikum AWS</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #dbeafe, #fce7f3);
          margin: 0;
          padding: 0;
          text-align: center;
          color: #333;
        }

        .container {
          background: white;
          max-width: 600px;
          margin: 80px auto;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #2563eb;
        }

        p {
          font-size: 17px;
          line-height: 1.7;
        }

        .status {
          background: #dcfce7;
          color: #166534;
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
        }

        footer {
          margin-top: 25px;
          font-size: 13px;
          color: #666;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>Praktikum AWS Elastic Beanstalk</h1>

        <p>Selamat Datang!</p>

        <p>
          Aplikasi Node.js dengan HTML dan CSS
          berhasil dijalankan.
        </p>

        <p><strong>Nama Mahasiswa:</strong> Intan Lusiana</p>
        <p><strong>Mata Kuliah:</strong> Cloud Computing</p>

        <div class="status">
          Status: Aplikasi Berhasil Berjalan
        </div>

        <footer>
          Praktikum Platform as a Service (PaaS)<br>
          AWS Elastic Beanstalk
        </footer>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server berjalan pada port ${port}`);
});
