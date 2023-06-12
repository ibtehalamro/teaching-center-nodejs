class Section {
    id = 0;
    startDate;
    endDate;
    startTime;
    endTime;
    teacherId;
    courseId;
    feeTotal;
    sectionName;
    constructor(date, teacherId, time, courseId,feeTotal,sectionName) {
        this.startDate = date.startDate;
        this.endDate = date.endDate;
        this.teacherId = teacherId;
        this.startTime = time.startTime;
        this.endTime = time.endTime;
        this.courseId = courseId;
        this.feeTotal= parseInt(feeTotal);
        this.sectionName = sectionName;
    }
    setId(id) { this.id = id; }
    setStartDate(startDate) { this.startDate = startDate; }
    setEndDate(endDate) { this.endDate = endDate; }
    setTeacherId(teacherId) { this.teacherId = teacherId; }
    setStartTime(startTime) { this.startTime = startTime; }
    setEndTime(endTime) { this.endTime = endTime; }
    setCourseId(courseId) { this.courseId = courseId; }
    setFeeTotal(feeTotal){this.feeTotal = parseInt(feeTotal);}
    setSectionName(sectionName){this.sectionName = sectionName;}
    getId() { return this.id; }
    getStartDate() { return this.startDate; }
    getEndDate() { return this.endDate; }
    getTeacherId() { return this.teacherId; }
    getStartTime() { return this.startTime; }
    getEndTime() { return this.endTime; }
    getCourseId() { return this.courseId; }
    getFeeTotal(){return this.feeTotal;}
    getSectionName(){return this.sectionName;}

    static getSectionJSONFromDBResult(dbResult) {
        const transformedList = dbResult?.map(section => {
            return {
                id: section.id,
                date: {
                    startDate: section.startDate,
                    endDate: section.endDate
                },
                time: {
                    startTime: section.startTime,
                    endTime: section.endTime
                },
                teacherId: section.teacherId,
                feeTotal:section.feeTotal
            };
        })
        return transformedList;
    }

    static createSectionFromRequest(req) {
        const { courseId, time, date, teacherId, sectionId,feeTotal,sectionName } = req.body;
        const section = new Section(date, teacherId,time, courseId,feeTotal,sectionName);
        section.setId(sectionId);
        console.log('section', section)
        return section;
    }
}
export default Section;
