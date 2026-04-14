# QuickNotes API

A simple REST API for managing notes with search functionality, built with Node.js and Express.

## Prerequisites
- Node.js v18+

## Setup
1. Clone the repo
2. npm install
3. node app.js

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /notes | Get all notes |
| GET | /notes?search=keyword | Search notes by title |
| GET | /notes/:id | Get a single note |
| POST | /notes | Create a note |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## Request Body (POST/PUT)
{
  "title": "Note title",
  "content": "Note content",
  "tags": ["tag1", "tag2"]
}

## API Documentation
Import postman-collection.json into Postman to test all endpoints with saved example responses.