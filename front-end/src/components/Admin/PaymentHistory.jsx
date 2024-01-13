import React, {useEffect} from 'react'
import { usePaymentStore } from '../../stores/paymentStore';
import { useParams } from 'react-router-dom';

const PaymentHistory = () => {
    const {billId} = useParams();
    const {getPaymentsByBillId,payments,isLoading, error} = usePaymentStore();

    useEffect(() => {
        // Fetch the form field when the component mounts
        
        getPaymentsByBillId(billId);
      }, [billId]);
      console.log(payments);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              {/* Render your payment information here */}
              <p>Payment Amount: {payment.paid}</p>
              <p>Payment Date: {payment.date}</p>
              {/* Add other payment details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PaymentHistory
