const server = require('http');
const host = require('127.0.0.1');
const file = require('./3-read_file_async');

const port = 1245;

const app = server.creatServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') res.write('This is the list of our students\n');
	  file(process.argv[2]).then((data) => {
	  	res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.end();
	  }).catch((err) => res.end(err.message));
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
