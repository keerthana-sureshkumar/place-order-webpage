import React from 'react';
import indexClasses from '../../index.css';
const Payment = () => {
  return (
    <div
      className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(
        ' '
      )}
    >
      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>Payment</div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>π²Cash preferred </li>
          <li>π²Venmo/Zelle/Paypal/CASH app etc accepted too </li>
          <li>π²If you choose to pay online, use this same cell number </li>
          <li>π 206.353.4792 OR </li>
          <li>π Deepti Sharan OR </li>
          <li>π DeepHolistix </li>
          <li>
            π Paypal accounts linked to buyers's credit cards - deduct ~$2-$4
            per transaction at the receiver's (my) end! Duh! You may want to
            consider linking your paypal to your Debit card / Bank Account
            instead Reference: https://www.salecalc.com/paypal. Or else, add
            $2-$4 to your total. π²If you pay online, private message name of
            your app. I don't need a payment screenshot. For example even this
            will help me:{' '}
          </li>
          <li>π V (for vemo) or </li>
          <li>π Z (for zelle) or </li>
          <li>π P (for paypal) or</li>
          <li>π C (for CASH). </li>
          <li>πElse its a mystery for me to guess your payment method π€</li>
        </ul>
      </div>
    </div>
  );
};
export default Payment;
