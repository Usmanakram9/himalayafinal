import React, {useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { useDeliveryStore } from '../../stores/deliveryStore';
import {format} from 'date-fns'

const CompletedDeliveryScreen = () => {
    const navigate = useNavigate();
    const {custID,billId,formFieldId}= useParams();
    const {getDeliveryByCustomerBillAndField,singleDelivery, isLoading, error} = useDeliveryStore();

    useEffect(() => {
        // Fetch bills based on the customer ID using Zustand store
        getDeliveryByCustomerBillAndField(custID,billId,formFieldId);
      }, [custID,billId,formFieldId, getDeliveryByCustomerBillAndField]);
	


if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-600 mb-2">Loading...</p>
        <div className="animate-spin border-t-4 border-blue-500 rounded-full h-12 w-12"></div>
        <p className="text-sm text-gray-600 mt-2">Himalaya Enterprises</p>
      </div>
    );
  }

  return (
    <>
    <div className="mx-auto mt-8 p-8">
    <button className="text-blue-500 text-sm mb-4" onClick={()=>{ navigate(`/admin-panel/InvoiceHub/${custID}`)}} >
          &larr; Back
        </button>
        </div>
  
<div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
	<div className="overflow-x-auto">
	{singleDelivery ? (
		<table className="min-w-full bg-white border border-gray-200 rounded-xl">
			<thead>
				<tr className="bg-gray-200 h-30px">
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Shipment Tag</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Shipment Date & time</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product Name</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Prodcut length</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product Width</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product Thickness</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product Quantity</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Delivered By</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Driver Number</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Vehicle Number</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
					<th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
				</tr>
			</thead>
			<tbody>
			{singleDelivery.map((delivery, index) => (
				<tr key={index} className="h-72px hover:bg-gray-100 transition duration-150 ease-in-out">
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
						<div className="flex items-center flex-row gap-2">
							<span className="text-base">{delivery._id}</span>
						</div>
					</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      {format(new Date(delivery.createdAt), 'dd-MM-yyyy hh:mm:ss a')}
    </td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.productName}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.productLength}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.productWidth}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.productThickness}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.productQuantity}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.driverName}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.driverNumber}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{delivery.vehicleNumber}</td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      {delivery.isDelivered ? (
        <span className="px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-green-400 text-gray-800">COMPLETED</span>
      ) : (
        <span className="px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-200 text-gray-800">Pending</span>
      )}
    </td>
					<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
						<button className="text-gray-500 hover:text-blue-500 focus:outline-none">
							
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M14.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-12 12a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l12-12zM15 4l-10 10V16h4.586L15 14.586V4z" clipRule="evenodd" />
							</svg>
						</button>
						<button className="text-gray-500 hover:text-red-500 focus:outline-none">
							
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 011 1v1h1a1 1 0 110 2h-1v9a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1zm15-2H3a1 1 0 00-1 1v1h16V4a1 1 0 00-1-1z" clipRule="evenodd" />
							</svg>
						</button>
					</td>
				</tr>
				))}
			</tbody>
			<tfoot className="bg-gray-50 h-56px">
				<tr>
					<td className="px-12 py-4 whitespace-no-wrap text-sm font-normal text-center" colSpan="12">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<span className="mr-2">Show Records</span>
								<select className="form-select border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm">
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="20">20</option>
								</select>
							</div>
							<div className="flex items-center space-x-4">
								<span>1 - 8 de 25</span>
								<button className="text-gray-500 hover:text-blue-500 focus:outline-none">
									
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M9.293 12.293a1 1 0 011.414 0L15 16.586V6a1 1 0 112 0v10a1 1 0 01-1 1H4a1 1 0 110-2h10a1 1 0 01-.707-.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
								<button className="text-gray-500 hover:text-blue-500 focus:outline-none">
									
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 9.293a1 1 0 011.414 0L15 13.586V3a1 1 0 112 0v10a1 1 0 01-1 1H4a1 1 0 010-2h10a1 1 0 01-.707-.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
							</div>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
		 ) : (
			<p>Data is still loading...</p>
		  )}
	</div>
</div>
</>

  )
}

export default CompletedDeliveryScreen