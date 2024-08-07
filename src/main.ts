type student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: (number |string | undefined) []
}

const student1: student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5]
}

const student2: student = {
    firstName: 'Jane',
    lastName: 'Miller',
    age: 19,
    grades: [5, 4,undefined, 3, "B", 5]
}

const student3: student = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 22,
    grades: [4, "A", undefined, 4, 4, 5, 3]
}

const allStudents: student[] = [student1, student2, student3]

const showAllStudents = (students: student[]) => {
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName} (${student.age})`)
        console.log("=====================================")
        console.log(`Grades: ${student.grades.map(grade => grade === undefined ? "*" : grade).join(', ')}`)
        console.log(" ")
    })
}

showAllStudents(allStudents)