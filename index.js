const express = require('express')
const app = express()
const port = 3000

const taskTypes = [
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

const users = {
    "todos": [
      {
        "id": 1,
        "type": "chores",
        "task": "Drink 2L of water",
        "streak": 5,
        "repeat": "Everyday",
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
        "task": "chill out",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "chilloutBG",
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
    },
    {
        "id": 6,
        "type": "health",
        "task": "health",
        "streak": 5,
        "repeat": "5 days per week",
        "bg-imageID": "healthBG",
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
    res.send(users)
})

app.get('/completed', (req,res) =>{
    res.json(users.completed)
})

app.get('/todoes', (req,res) => {
    res.json(users.todos)
})

app.get('/todos', (req,res) => {
    res.json(users.todos)
})

app.get('/todos/:id',(req,res) => {
    const id = Number(req.params.id)
    const result = users.todos.find(x => {
        return x.id === id
    })

    if(result)(
        res.json(result)
    )
    else{
        res.status(404).send('Not found')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  