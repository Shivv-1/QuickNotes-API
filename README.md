# 📌 QuickNotes API

A simple RESTful API for managing notes with full CRUD (Create, Read, Update, Delete) functionality.  
This project was built to practice backend development, API design, and handling HTTP requests and responses.

---

## 🚀 Features

- Create a new note  
- Retrieve all notes  
- Update an existing note  
- Delete a note  
- Handles JSON request and response data  

---

## 🛠️ Tech Stack

- Node.js / Python (REPLACE WITH YOUR ACTUAL TECH)
- Express / Flask (REPLACE WITH YOUR FRAMEWORK)
- JSON for data handling  

---

## 📡 API Endpoints

| Method | Endpoint        | Description            |
|--------|---------------|------------------------|
| GET    | /notes        | Get all notes          |
| POST   | /notes        | Create a new note      |
| PUT    | /notes/:id    | Update a note by ID    |
| DELETE | /notes/:id    | Delete a note by ID    |

---

## ▶️ How to Run

### 1. Clone the repository
```bash
git clone https://github.com/Shivv-1/QuickNotes-API.git
cd QuickNotes-API
```

### 2. Install dependencies
npm install

### 3. Start the Server
npm start

## Request Body (POST/PUT)
{
  "title": "Note title",
  "content": "Note content",
  "tags": ["tag1", "tag2"]
}

## API Documentation
Import postman-collection.json into Postman to test all endpoints with saved example responses.
