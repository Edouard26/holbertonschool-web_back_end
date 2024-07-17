import ClassRoom, { initializeRooms } from '0-classroom.js';

// Initialize rooms
const rooms = initializeRooms();

// Accessing properties of each room
rooms.forEach((room, index) => {
    console.log(`Room ${index + 1} can accommodate up to ${room._maxStudentsSize} students.`);
});