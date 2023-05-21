class Section {
    id = 0;
    startDate;
    endDate;
    startTime;
    endTime;
    teacherId;
    courseId;
    constructor(startDate, endDate, teacherId, startTime, endTime, courseId) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.teacherId = teacherId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.courseId = courseId;
    }
    setId(id) { this.id = id; }
    setStartDate(startDate) { this.startDate = startDate; }
    setEndDate(endDate) { this.endDate = endDate; }
    setTeacherId(teacherId) { this.teacherId = teacherId; }
    setStartTime(startTime) { this.startTime = startTime; }
    setEndTime(endTime) { this.endTime = endTime; }
    setCourseId(courseId) { this.courseId = courseId; }
    getId() { return this.id; }
    getStartDate() { return this.startDate; }
    getEndDate() { return this.endDate; }
    getTeacherId() { return this.teacherId; }
    getStartTime() { return this.startTime; }
    getEndTime() { return this.endTime; }
    getCourseId() { return this.courseId; }


    static getSectionJSONFromDBResult(dbResult) {
        const transformedList = dbResult?.map(section => {
            return {
                id: section.id,
                date: {
                  startDate: section.startDate,
                  endDate: section.endDate
                },
                time:{
                    startTime: section.startTime,
                    endTime:section.endTime
                },
                teacherId: section.teacherId
               
            };
        })
        return transformedList;
    }
}
export default Section;
