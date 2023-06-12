import studentRoutes from "./routes/StudentRoutes.js";
import courseRoutes from './routes/CourseRoutes.js';
import SectionRoutes from "./routes/SectionRoutes.js";
import TeacherRoutes from "./routes/TeacherRoutes.js";
import paymentRoutes from "./routes/PaymentsRoutes.js";


export default function (app) {
    app.use("/student", studentRoutes);
    // app.use("/home", homeRoutes);
    app.use("/course", courseRoutes);
    app.use("/section", SectionRoutes);
    app.use("/teacher", TeacherRoutes);
    app.use("/payment", paymentRoutes);
}
