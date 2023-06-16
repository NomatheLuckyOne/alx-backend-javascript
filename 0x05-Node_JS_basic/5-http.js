const http = require('http');
const students = require(',/3-read_file_async');
const hostname = '127.0.0.1';
const port = 12345;

const app = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	if (req.url ==='/') {
		res.end('Hello Holberton School');
	} else if (req.url === '/students') {
		res.write('This is the list of our students|n');
	students(process.argv[2]).then((data) => {
		res.write('Number of students: ${data.students.length}|n');
		res.write('Number of students in CS: ${data.csStudents.length}.list: ${data.csStudents.joint(', ')}n');
		res.write('Number of students in SWE: ${data.sweStudents.length. List: $(data.sweStudents.join(', '')}');
		res.end();
	}).catch((err) => res.end(err.message));
}
});

app.list(port, hostnsme, () => {
	console.log)(Server running at http://$(hostname}:${port);
})

module.exports = app;
