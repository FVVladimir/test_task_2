class ProductCart {

    get buttonAddProductToCard () {
        return $("#add-to-cart-sauce-labs-bike-light");
    };

    get productNameInCart () {
        return $(".cart_item .cart_item_label  #item_0_title_link").getText();
    }
};

module.exports = ProductCart