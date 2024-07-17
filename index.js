const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;


let taskTypes = [
    {
        "id": 1,
        "type": "chores",
        "task": "Drink 2L of water",
        "streak": 5,
        "repeat": "Everyday",
        "icon": "water",
        "bg-imageID": "waterBG",
        "description": "Stad hydrateded, stay energised"
    },
    {
        "id": 2,
        "type": "gym",
        "task": "Workout",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "gymBG",
        "description": "Stay strong, be a man"
    },
    {
        "id": 3,
        "type": "study",
        "task": "Study Time",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "studyBG",
        "description": "A wise man always will be prepared"
    },
    {
        "id": 4,
        "type": "leisure",
        "task": "Chill Out",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "leisureBG",
        "description": "Get energy up, back to work"
    },
    {
        "id": 5,
        "type": "work",
        "task": "Work",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "workBG",
        "description": "Getting on hard work"
    }
]

let task = {
    "todos": [
      {
        "id": 1,
        "type": "chores",
        "task": "Drink 2L of water",
        "streak": 5,
        "repeat": "Everyday",
        "bgimageID": "waterBG",
        "description": "Stad hydrateded, stay energised"
    },
    {
        "id": 2,
        "type": "gym",
        "task": "Workout",
        "streak": 5,
        "repeat": "5 days per week",
        "bgimageID": "gymBG",
        "description": "Stay strong, be a man"
    },
    {
        "id": 3,
        "type": "study",
        "task": "Study Time",
        "streak": 5,
        "repeat": "5 days per week",
        "bgimageID": "studyBG",
        "description": "A wise man always will be prepared"
    },
    {
        "id": 4,
        "type": "leisure",
        "task": "chill out",
        "streak": 5,
        "repeat": "5 days per week",
        "bgimageID": "chilloutBG",
        "description": "Get energy up, back to work"
    },
    {
        "id": 5,
        "type": "work",
        "task": "Work",
        "streak": 5,
        "repeat": "5 days per week",
       "bgimageID": "workBG",
        "description": "Getting on hard work"
    },
    {
        "id": 6,
        "type": "health",
        "task": "health",
        "streak": 5,
        "repeat": "5 days per week",
        "bgimageID": "healthBG",
        "description": "Keep up health, long life"
    }
    ],
    "completed": [
      {
        "id": "5",
        "task": "Clean the kitchen",
        "streak": 5,
        "repeat": "3 days per week",
        "icon": "kitchen",
        "bgimageID": "kitchenBG",
        "description": "Wash dishes and mop the floor"
      }
    ]
  }

app.get('/',(req, res) => {
    res.send('<h1>hit /taskTypes to access</h1> <h1>hit /UserActivities to access</h1> <h1>hit /Completed to access</h1> <h1>hit /ToDoes to access</h1> <h1>hit /todos:id to access</h1>')
   
})

app.get('/taskTypes',(req,res) => {
    res.send(taskTypes)
})

app.get('/UserActivities',(req,res) => {
    res.send(task)
})

app.get('/completed', (req,res) =>{
    res.json(task.completed)
})

app.get('/todoes', (req,res) => {
    res.json(task.todos)
})

app.get('/todos', (req,res) => {
    res.json(task.todos)
})

app.get('/todos/:id',(req,res) => {
    const id = Number(req.params.id)
    const result = task.todos.find(x => {
        return x.id === id
    })

    if(result)(
        res.json(result)
    )
    else{
        res.status(404).send('Not found')
    }
})

app.post('/todos', (req, res) => {
    const newTask = {
        id: task.todos.length + 1, 
        type: req.body.type,
        task: req.body.task,
        streak: req.body.streak,
        repeat: req.body.repeat,
        bgimageID: req.body.bgimageID,
        description: req.body.description
    };
    console.log(task.todos)
    task.todos.push(newTask); 
});

app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = task.todos.findIndex(x => x.id === id);

    if (index !== -1) {
        const deletedTask = task.todos.splice(index, 1);
        res.json({
            message: 'Task deleted',
            deletedTask: deletedTask[0]
        });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
    
    console.log(task)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  