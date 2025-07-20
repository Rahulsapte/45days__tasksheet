# Day 6 - MongoDB CRUD with Compass & Mongo Shell

## 📚 Task Overview
Perform basic MongoDB CRUD (Create, Read, Update, Delete) operations using both:
- MongoDB Shell (CLI)
- MongoDB Compass (GUI)

---

## 🔧 Database Used
- **Database Name:** `internship`
- **Collection Name:** `students`

---

## ✅ CRUD Operations

### 1. 🟢 CREATE
Inserted multiple student documents using `insertMany()` in Mongo Shell.
📸 Screenshot: `./paris.png.png`

### 2. 🔍 READ
- Displayed all records using `find().pretty()`
- Queried a specific record using `find({ name: "Rahul" })`
📸 Screenshot: `./dubai.png.png`

### 3. 📝 UPDATE
- Updated Rahul's marks from 90 to 95 using `updateOne()`
📸 Screenshot: `./london.png.png`

### 4. ❌ DELETE
- Deleted student named 'Vikas' using `deleteOne()`
📸 Screenshot: `./tokoy.png.png`

---

## 🧠 Commands Used (Mongo Shell)
```javascript
use internship;
db.students.insertMany([...]);
db.students.find().pretty();
db.students.updateOne({ name: "Rahul" }, { $set: { marks: 95 } });
db.students.deleteOne({ name: "Vikas" });
