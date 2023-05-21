// import ResponseEnums from "../Enums/ResponseEnums.js";
// import Common from "../Model/common/common.js";
// class PaymentService {
//     paymentRepository;
//     constructor(paymentRepository) { this.paymentRepository = paymentRepository; }
//     async addStudentPaymentToSection(req) {
//         const { amount, discount = 0, student_section_id, currency = "ils" } = req.body;
//         const response = await this.paymentRepository.addStudentPaymentToSection(amount, discount, student_section_id, currency);
//         return Common.apiResponse(ResponseEnums.success, "Section list", { id: response });
//     }
// }
// export default PaymentService;
