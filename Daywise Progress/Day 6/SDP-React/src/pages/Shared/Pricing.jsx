import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const navigate = useNavigate();

  const handleRequestAccess = (plan) => {
    let price;
    switch(plan) {
      case 'Startup':
        price = billingCycle === 'monthly' ? 69900 : 699900;
        break;
      case 'Growth':
        price = billingCycle === 'monthly' ? 699900 : 6999000;
        break;
      default:
        price = 0; // Free plan
    }

    navigate('/paygateway', {
      state: {
        item: `${plan} Plan`,
        price,
        billingCycle
      }
    });
  };

  return (
    <div className="bg-black text-white font-sans py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Pricing Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing</h1>
          <p className="text-lg mb-4">
            You can stay on the ₹699 plan until you have enough active users to justify managing their data or you start selling things.
          </p>
          <div className="inline-flex space-x-4 mb-8">
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg ${billingCycle === 'yearly' ? 'bg-green-500 text-black' : 'bg-gray-800 text-white'}`}
            >
              Billed yearly - 43% off
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${billingCycle === 'monthly' ? 'bg-green-500 text-black' : 'bg-gray-800 text-white'}`}
            >
              Billed monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Start Here Plan */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4"> Basic </h2>
            <p className="text-4xl font-bold mb-6">₹0</p>
            <p className="mb-6">per {billingCycle}</p>
            <ul className="mb-6">
              <li className="mb-2">✔ Create and manage staff schedules</li>
              <li className="mb-2">✔ Track time and attendance</li>
              <li className="mb-2">✖ Handle shift swaps and coverage requests</li>
              <li className="mb-2">✖ Automate reminders and notifications</li>
              <li className="mb-2">✖ Manage leave requests and availability</li>
              <li className="mb-2">✖ Generate detailed reports and analytics</li>
              <li className="mb-2">✖ Integrate with payroll systems</li>
              <li>✖ Customizable settings for different team needs</li>
            </ul>
            <button 
              className="bg-green-500 text-black px-4 py-2 rounded-lg w-full"
              onClick={() => handleRequestAccess('Start Here')}
            >
              Request Access
            </button>
            <p className="mt-4 text-sm">It's free so why not</p>
          </div>

          {/* Startup Plan */}
          <div className="bg-gray-800 p-6 rounded-lg border border-white">
            <h2 className="text-2xl font-bold mb-4">Startup</h2>
            <p className="text-4xl font-bold mb-6">
              {billingCycle === 'monthly' ? '₹699' : '₹6,999'}
            </p>
            <p className="mb-6">per {billingCycle}</p>
            <ul className="mb-6">
              <li className="mb-2">✔ Create and manage staff schedules</li>
              <li className="mb-2">✔ Track time and attendance</li>
              <li className="mb-2">✔ Handle shift swaps and coverage requests</li>
              <li className="mb-2">✔ Automate reminders and notifications</li>
              <li className="mb-2">✔ Manage leave requests and availability</li>
              <li className="mb-2">✖ Generate detailed reports and analytics</li>
              <li className="mb-2">✖ Integrate with payroll systems</li>
              <li>✖ Customizable settings for different team needs</li>
            </ul>
            <button 
              className="bg-green-500 text-black px-4 py-2 rounded-lg w-full"
              onClick={() => handleRequestAccess('Startup')}
            >
              Request Access
            </button>
            <p className="mt-4 text-sm">
              {billingCycle === 'monthly' ? 'Save ₹5,999 per year' : 'Save ₹59,991 per year'}
            </p>
          </div>

          {/* Growth Plan */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Growth</h2>
            <p className="text-4xl font-bold mb-6">
              {billingCycle === 'monthly' ? '₹6,999' : '₹69,990'}
            </p>
            <p className="mb-6">per {billingCycle}</p>
            <ul className="mb-6">
              <li className="mb-2">✔ Create and manage staff schedules</li>
              <li className="mb-2">✔ Track time and attendance</li>
              <li className="mb-2">✔ Handle shift swaps and coverage requests</li>
              <li className="mb-2">✔ Automate reminders and notifications</li>
              <li className="mb-2">✔ Manage leave requests and availability</li>
              <li className="mb-2">✔ Generate detailed reports and analytics</li>
              <li className="mb-2">✔ Integrate with payroll systems</li>
              <li>✔ Customizable settings for different team needs</li>
            </ul>
            <button 
              className="bg-green-500 text-black px-4 py-2 rounded-lg w-full"
              onClick={() => handleRequestAccess('Growth')}
            >
              Request Access
            </button>
            <p className="mt-4 text-sm">
              {billingCycle === 'monthly' ? 'Save ₹39,999 per year' : 'Save ₹399,990 per year'}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What features does the staff scheduling app offer?</h3>
              <p>
                Our staff scheduling app provides a range of features to simplify workforce management. You can create and manage staff schedules, track time and attendance, handle shift swaps, and automate reminders. The app also offers tools for managing leave requests, setting up availability, and generating reports on staffing and productivity. For more details on the features, check out our <a href="#" className="text-green-500">features page</a>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I handle staff availability and time-off requests?</h3>
              <p>
                The app allows staff members to submit time-off requests directly through their profiles. Managers can review and approve these requests from their dashboard. Additionally, staff can set their availability preferences, which the app uses to automatically suggest optimal shift assignments and prevent scheduling conflicts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens if I decide to cancel my subscription?</h3>
              <p>
                If you decide to cancel your subscription, you will retain access to your data for the remainder of the billing period. After cancellation, your account will be deactivated, but you can export your data before this happens. Simply go to the settings and select the export data option to download your schedules, reports, and other important information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is there a fee for exporting data or accessing premium features?</h3>
              <p>
                The export of your data is included in your subscription plan, so there are no additional fees for this service. Premium features, such as advanced analytics and integrations with other software, may incur extra charges. These fees are clearly outlined in our pricing plans, and you can view them <a href="#" className="text-green-500">here</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
