import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaGoogleWallet, FaMoneyCheckAlt } from 'react-icons/fa';
import { RiBankLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Paygateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, price, billingCycle } = location.state || {};

  const itemName = item || "Basic Plan";
  const itemPrice = price || 0;
  const cycle = billingCycle || "one-time";

  const formattedPrice = (itemPrice / 100).toFixed(2);
  const total = parseFloat(formattedPrice) + 0.00;

  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [selectedBank, setSelectedBank] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handlePlaceOrder = () => {
    if (!termsAccepted) {
      setShowAlertDialog(true);
      return;
    }

    toast.success('Payment successful!', {
      onClose: () => navigate('/')
    });

    // Additional order placement logic here
  };

  const handleAgreeToTerms = () => {
    setTermsAccepted(true);
    setShowAlertDialog(false);
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className="bg-secondary mt-24 p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{itemName}</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Price ({cycle})</span>
            <span>${formattedPrice}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Payment Method</h3>
          <div className="space-y-4">

            {/* Credit Card Option */}
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => handlePaymentMethodChange('credit-card')}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  checked={selectedMethod === 'credit-card'}
                  readOnly
                />
                <FaMoneyCheckAlt className="text-xl mr-2" />
                <span>Credit Card</span>
              </label>
              {selectedMethod === 'credit-card' && (
                <div className="ml-6 mt-2 space-y-2">
                  <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
                  <div className="flex space-x-2">
                    <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" />
                    <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded" />
                  </div>
                </div>
              )}
            </div>

            {/* Debit Card Option */}
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => handlePaymentMethodChange('debit-card')}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  checked={selectedMethod === 'debit-card'}
                  readOnly
                />
                <FaCreditCard className="text-xl mr-2" />
                <span>Debit Card</span>
              </label>
              {selectedMethod === 'debit-card' && (
                <div className="ml-6 mt-2 space-y-2">
                  <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
                  <div className="flex space-x-2">
                    <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" />
                    <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded" />
                  </div>
                </div>
              )}
            </div>

            {/* Netbanking Option */}
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => handlePaymentMethodChange('netbanking')}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  checked={selectedMethod === 'netbanking'}
                  readOnly
                />
                <RiBankLine className="text-xl mr-2" />
                <span>Netbanking</span>
              </label>
              {selectedMethod === 'netbanking' && (
                <div className="ml-6 mt-2">
                  <select
                    value={selectedBank}
                    onChange={handleBankChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="" disabled>Select your Bank</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                    <option value="indusind">IndusInd Bank</option>
                    <option value="yesbank">YES Bank</option>
                    <option value="pnb">Punjab National Bank</option>
                    <option value="bob">Bank of Baroda</option>
                    <option value="canara">Canara Bank</option>
                    <option value="idbi">IDBI Bank</option>
                    <option value="union">Union Bank of India</option>
                    <option value="boi">Bank of India</option>
                    <option value="federal">Federal Bank</option>
                    <option value="central">Central Bank of India</option>
                  </select>
                </div>
              )}
            </div>

            {/* UPI Option */}
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => handlePaymentMethodChange('upi')}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  checked={selectedMethod === 'upi'}
                  readOnly
                />
                <FaGoogleWallet className="text-xl mr-2" />
                <span>UPI</span>
              </label>
              {selectedMethod === 'upi' && (
                <div className="ml-6 mt-2 space-y-2">
                  <input type="text" placeholder="Enter UPI ID" className="w-full p-2 border rounded" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I've agreed to the terms and conditions
          </label>
          <button
            className="w-full bg-black text-white py-2 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>

        <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              You need to agree to the terms and conditions before placing the order. Do you want to agree now?
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setShowAlertDialog(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleAgreeToTerms}>Agree</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Paygateway;
