class Address {
    city = "";
    constructor(city) {
        this.setCity(city);
    }
    getCity() {
        return this.city;
    }
    setCity(value) {
        this.city = value;
    }
}
export default Address;
