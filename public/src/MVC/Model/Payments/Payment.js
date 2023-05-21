class Payment {
    amount = 0;
    discount = 0;
    currency = "ils";
    student_section_id = 0;
    constructor(amount, discount, currency, student_section_id) {
        this.setAmount(amount);
        this.setDiscount(discount);
        this.setCurrency(currency);
        this.setStudent_section_id(student_section_id);
    }
    setAmount(amount) { this.amount = amount; }
    setDiscount(discount) { this.discount = discount; }
    setCurrency(currency) { this.currency = currency; }
    setStudent_section_id(student_section_id) { this.student_section_id = student_section_id; }
    getAmount() { return this.amount; }
    getDiscount() { return this.discount; }
    getCurrency() { return this.currency; }
    getStudent_section_id() { return this.student_section_id; }
}
export default Payment;
