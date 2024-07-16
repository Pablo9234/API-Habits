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
  
app.get('/taskTypes',(req,res) => {
        res.send(taskTypes)
})

app.get('/',(req, res) => {
    res.send('Hello world!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  