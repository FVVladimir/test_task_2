class CheckOutPage {
       
    get checkOutFieldFirstName () {

        return $("#first-name");
    };
    get checkOutFieldLastName () {

        return $("#last-name");
    };
    get checkOutFiedZipCode () {

        return $("#postal-code");
    };
    get checkOutButtonContinue () {

        return $("#continue");
    };
    get checkOutButtonFinish () {

        return $("#finish");
    };
};

module.exports = CheckOutPage;