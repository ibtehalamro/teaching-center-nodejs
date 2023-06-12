import con, { executeQuery } from "../../../server/DB_connection.js";
import { PAYMENT_QUERIES } from "./PaymentQueries.js";

class PaymentRepository {
  saveStudentSectionPayment(amount, currency, sectionId, studentId) {
    return new Promise((resolve, reject) => {
      // Start the transaction
      con.beginTransaction((error) => {
        if (error) {
          con.release();
          reject(error);
          return;
        }
  
        let paymentId = 0;
        con.query(
          PAYMENT_QUERIES.INSERT_PAYMENT_VALUE,
          [parseInt(amount), currency||'ILS'],
          (error, results) => {
            if (error) {
              con.rollback(() => {
                reject(error);
              });
              return;
            }
            if (results) {
              paymentId = results.insertId; 
            }
  
            con.query(
              PAYMENT_QUERIES.SAVE_STUDENT_SECTION_PAYMENT,
              [paymentId, sectionId, studentId],
              (error, results) => {
                if (error) {
                  con.rollback(() => {
                    reject(error);
                  });
                  return;
                }
              }
            );
  
            // Commit the transaction
            con.commit((error) => {
              if (error) {
                con.rollback(() => {
                  reject(error);
                });
                return;
              }
              resolve();
            });
          }
        );
      });
    });
  }
  
  viewStudentPaymentsForSection(studentId, sectionId) {
    return executeQuery(PAYMENT_QUERIES.VIEW_STUDENT_PAYMENTS_FOR_SECTION, [studentId, sectionId]);
  }

  deleteStudentSectionPaymentByPaymentId(paymentId,studentPaymentId) {
    return new Promise((resolve, reject) => {
      // Start the transaction
      con.beginTransaction((error) => {
        if (error) {
          con.release();
          reject(error);
          return;
        }
  
         con.query(
          PAYMENT_QUERIES.DELETE_PAYMENT_BY_ID,
          [paymentId],
          (error, results) => {
            if (error) {
              con.rollback(() => {
                reject(error);
              });
              return;
            }
            
  
            con.query(
              PAYMENT_QUERIES.DELETE_STUDENT_SECTION_PAYMENT_BY_PAYMENT_ID,
              [studentPaymentId],
              (error, results) => {
                if (error) {
                  con.rollback(() => {
                    reject(error);
                  });
                  return;
                }
              }
            );
  
            // Commit the transaction
            con.commit((error) => {
              if (error) {
                con.rollback(() => {
                  reject(error);
                });
                return;
              }
              resolve();
            });
          }
        );
      });
    });
  }
}
export default PaymentRepository;
