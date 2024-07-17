class HolbertonCourse {
    constructor(name, length, students) {
        // Type checking for the attributes
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }

        // Initializing attributes
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Getter and setter for length
    get length() {
        return this._length;
    }

    set length(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = value;
    }

    // Getter and setter for students
    get students() {
        return this._students;
    }

    set students(value) {
        if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = value;
    }
}

// Example usage:
try {
    const course = new HolbertonCourse('Math', 10, ['Alice', 'Bob', 'Charlie']);
    console.log(course.name); // Output: Math
    console.log(course.length); // Output: 10
    console.log(course.students); // Output: ['Alice', 'Bob', 'Charlie']

    course.name = 'Science';
    course.length = 12;
    course.students = ['David', 'Eve'];

    console.log(course.name); // Output: Science
    console.log(course.length); // Output: 12
    console.log(course.students); // Output: ['David', 'Eve']
} catch (error) {
    console.error(error.message);
}
