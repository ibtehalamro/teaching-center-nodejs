class Course {
    id = 0;
    name;
    type;
    constructor(name, type) {
        this.setName(name);
        this.setType(type);
    }
    setId(id) { this.id = id; }
    setName(name) { this.name = name.trim(); }
    setType(type) { this.type = type.trim(); }
    
    getId() { return this.id; }
    getName() { return this.name; }
    getType() { return this.type; }

    static getCourseFromRequestBody(course) {
        const { name, type } = course;
        return new Course(name, type);
    }
}
export default Course;
