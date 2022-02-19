const express = require('express');
const app = express();
//NEEEED TOOOOOOOOOOOOOOO ADDDDDDDDDDDDDDD VALIDATIONNNNNNNNNNNNNNNNNNNNNNNN

app.use(express.json());


const students = [
    { id: 1, name: 'Horacio' },
    { id: 2, name: 'Joe' },
    { id: 3, name: 'Peter' },
];

app.get('/', (req, res) => {
    res.send('Hello Yall');
    
});

app.get('/api/students', (req, res) => {
    res.send(students);
})

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send('The student with the given id was not found.');
    res.send(student); // 404
});

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name

    };
    students.push(student);
    res.send(student);
});

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send('The student with the given id was not found.');
    
    student.name = req.body.name;
    res.send(student);
    // 404


});



app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).send('The student with the given id was not found.');

    const index = students.indexOf(student);
    students.splice(index, 1);

    res.send(student);
    
})




const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}....`));


// app.post()
// app.put()
// app.delete()