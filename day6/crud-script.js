// Switch to (or create) the 'internship' database
use internship;

// 1. 🟢 CREATE - Insert multiple student documents
db.students.insertMany([
  {
    name: "Rahul",
    email: "rahul@example.com",
    course: "MERN Stack",
    marks: 90
  },
  {
    name: "Aditi",
    email: "aditi@example.com",
    course: "MERN Stack",
    marks: 85
  },
  {
    name: "Vikas",
    email: "vikas@example.com",
    course: "MERN Stack",
    marks: 78
  }
]);

// 2. 🔍 READ - Find all student records
print("=== All Students ===");
db.students.find().pretty();

// 3. 🔍 READ - Find a specific student
print("=== Student with name Rahul ===");
db.students.find({ name: "Rahul" }).pretty();

// 4. 📝 UPDATE - Update marks of student 'Rahul'
db.students.updateOne(
  { name: "Rahul" },
  { $set: { marks: 95 } }
);

// 5. 🔍 READ - Confirm update
print("=== Updated Rahul ===");
db.students.find({ name: "Rahul" }).pretty();

// 6. ❌ DELETE - Remove student 'Vikas'
db.students.deleteOne({ name: "Vikas" });

// 7. 🔍 READ - Confirm deletion
print("=== After Deletion ===");
db.students.find().pretty();
