import React from "react";

const BagItemSummary = () => {
  let totalItem = 8;
  let totalMRP = 5800;
  let totalDiscount = 1200;

  let finalPayment = 4600;
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS (${totalItem} Items){" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹${totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹${totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹${finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};

export default BagItemSummary;
