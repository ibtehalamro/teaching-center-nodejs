import express from "express";
import PaymentController from './../../MVC/Controller/PaymentController.js';

const paymentRoutes = express.Router();

const paymentController = new PaymentController();

const PAYMENT_ENDPOINTS ={
    VIEW_STUDENT_SECTION_PAYMENTS:"/view-section-payments/:studentId/:sectionId",
    SAVE_PAYMENT: "/save-payment",
    DELETE_PAYMENT: "/student-section/deletePayment"
};

// GET
paymentRoutes.get(PAYMENT_ENDPOINTS.VIEW_STUDENT_SECTION_PAYMENTS, paymentController.viewStudentSectionPayments);

// POST
paymentRoutes.post(PAYMENT_ENDPOINTS.SAVE_PAYMENT, paymentController.saveStudentSectionPayment);

// DELETE
paymentRoutes.delete(PAYMENT_ENDPOINTS.DELETE_PAYMENT, paymentController.deleteStudentSectionPaymentByPaymentId);

export default paymentRoutes;
