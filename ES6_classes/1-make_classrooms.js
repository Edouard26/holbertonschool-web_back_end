  export default class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}

export function initializeRooms() {
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
}