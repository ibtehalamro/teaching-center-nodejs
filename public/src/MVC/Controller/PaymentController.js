import { JSON_RESPONSE, ResponseStatus } from "../../utils/Response.js";
import PaymentService from "../Service/PaymentService.js";

class PaymentController {
     paymentService = new PaymentService();

    saveStudentSectionPayment = async (req, res) => {
        try {
            const response = await this.paymentService.saveStudentSectionPayment(req);
            res.json(response);
        }
        catch (err) {
            console.log(err);
            res.json(JSON_RESPONSE(ResponseStatus.error, "payment creation faced a problem"));
        }
    }

    viewStudentSectionPayments=async(req,res)=>{
        try {
          const response = await this.paymentService.viewStudentPaymentsForSection(req);
          res.json(response);
        } catch (err) {
          const response = JSON_RESPONSE(ResponseStatus.error, "Error occurred while fetching student payments for the section.");
          res.json(response);
        }
    }

    deleteStudentSectionPaymentByPaymentId = async (req, res) => {
        try {
            const result = await this.paymentService.deleteStudentSectionPaymentByPaymentId(req);
            res.json(result);
        } catch (err) {
            console.error('Error deleting payment:', err);
            res.status(500).json({ error: 'Failed to delete payment' });
        }
    };
}
export default PaymentController;