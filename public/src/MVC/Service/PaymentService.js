
import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import PaymentRepository from '../Repository/Payment/PaymentRepository.js';
class PaymentService {
  paymentRepository = new PaymentRepository();

  async saveStudentSectionPayment(req) {
    const { amount, type, sectionId, studentId } = req.body;
    try {
      const result = await this.paymentRepository.saveStudentSectionPayment(amount, type, sectionId, studentId);
      return JSON_RESPONSE(ResponseStatus.success, "Course added", { id: result });
    } catch (error) {
      if (error.code == "ER_DUP_ENTRY") {
        console.log('service error', error)
        return JSON_RESPONSE(ResponseStatus.error, "Course already exists.");
      } else {
        throw error;
      }
    }
  }

  async viewStudentPaymentsForSection(req) {
    const { studentId, sectionId } = req.params;
    try {
      const response = await this.paymentRepository.viewStudentPaymentsForSection(studentId, sectionId);
      console.log('response', response)
      return JSON_RESPONSE(ResponseStatus.success, "Student payments for the section", response);
    } catch (error) {
      console.error("Error occurred while fetching student payments for the section:", error);
      return JSON_RESPONSE(ResponseStatus.error, "Error occurred while fetching student payments for the section.");
    }
  }

  async deleteStudentSectionPaymentByPaymentId(req) {
        const {paymentId,studentPaymentId} = req.query ;
    try {
      const result = await this.paymentRepository.deleteStudentSectionPaymentByPaymentId(paymentId,studentPaymentId);
      if (result.affectedRows > 0) {
        return JSON_RESPONSE(ResponseStatus.success, "Payment deleted");
      } else {
        return JSON_RESPONSE(ResponseStatus.fail, "Payment not found");
      }
    } catch (error) {
      return JSON_RESPONSE(
        ResponseStatus.error,
        "Error occurred while deleting payment"
      );
    }
  }
}
export default PaymentService;
