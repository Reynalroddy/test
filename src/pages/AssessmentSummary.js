import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
const AssessmentSummary = () => {
   const navigate=useNavigate()
  
const viewNotice=()=>{

    navigate('/dashboard/view-notice')
}

const viewBill=()=>{

    navigate('/dashboard/view-bill')
}

  return (
    <div className="grid" >
                <div className="col-12 md:col-12 lg:col-12">
    <div className="surface-card p-4 shadow-2 border-round">
    <div className="font-medium text-3xl text-900 mb-3">Self assessment</div>
    <div className="text-500 mb-5">Assessment number :12334</div>
    <div className="text-500 mb-5"> Adamu Aliyu</div>
    <div className="text-500 mb-5">GTin: 107789</div>
   
    <div className="grid grid-nogutter border-top-1 surface-border pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Assessment Period</div>
            <div className="text-900">2021</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Date of assessment</div>
            <div className="text-900">01/12/2020</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Yearly income Gross</div>
            <div className="text-900">NGN 30,000,000</div>
        </div>

        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Consolidated relief allowance</div>
            <div className="text-900">NGN 630,000</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Total Taxable Income</div>
            <div className="text-900">NGN 5480000</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Outstanding</div>
            <div className="text-900">NGN 0.00</div>
        </div>
        <div className="col-12 md:col-6 p-3">
            <div className="text-500 font-bold mb-2">TOTAL Tax Due</div>
            <div className="text-900 font-bold">NGN 10,000</div>
        </div>
       
        <div className="col-12 p-3">
           
            <div className="flex md:align-items-center gap-3  border-top-1 surface-border p-3 flex-column md:flex-row">
            
                <Button  label="Generate Notice" className="p-button-outlined mt-2 md:mt-0" onClick={viewNotice} />
        
        
                <Button  label="Generate Bill" onClick={viewBill} className=" mt-2 md:mt-0 border-none text-sm" style={{background:'#3C66A3'}} />
            </div>
        </div>
    </div>
</div>
</div>
{/* notice */}

</div>


  )
}

export default AssessmentSummary