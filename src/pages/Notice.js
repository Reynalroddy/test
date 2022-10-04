import React from 'react'

import { Button } from 'primereact/button';
import Logo from '../assets/images/irms/logo.png'
const Notice = () => {
    const btnz = React.useRef(null);
    const print = () => {
        btnz.current.style.visibility = "hidden";
        // btnz2.current.style.visibility = "hidden";
        window.print();
        btnz.current.style.visibility = "";
        // btnz2.current.style.visibility = "";
      };
  return (
    <div className="grid" >
    <div className="col-12 md:col-12 lg:col-12">

     <div className="surface-card p-4 shadow-2 border-round">
    <div className='flex'>
    <img  src={Logo} className='w-5rem'  style={{objectFit:'contain' }} alt='logo'/>
    </div>
                    <div className='flex justify-content-between pt-2 text-sm '>
                        <div className='flex flex-column'>
                        <div className="text-500 mb-2">GTIN: 993942234</div>
                        <div className="text-500 mb-2">Taxpayer Name: Adamu musa</div>
                        <div className="text-500 mb-2">Address: Mib Plaza suite 34A, Gombe.</div>
                        </div>
                   
                      
                        <div className='flex flex-column'>
                        <div className="text-500 mb-2">Revenue office: Gombe Main office</div>
                        <div className="text-500 mb-2">TDate of assessment: 01/12/2020</div>
                        <div className="text-500 mb-2">Assessment period: 2021</div>
                        </div>

                    </div>
                   

                   <div className='flex flex-column text-sm'>
<p className=' font-bold'>Notice Assessment</p>
<p className='text-500'>These notice explain the result of our Assessment of your person income return. We have calculated your Total tax due And you can find the result below</p>

                   </div>

                   <div className='flex flex-column mt-2 text-sm'>
                   
                   <div className="text-500 mb-2">Thank you</div>
                        <div className="text-500 mb-2">Mallam TATA</div>
                        <div className="text-500 mb-2">  Director of revenue</div>
                   </div>

                   <div className="text-900 font-bold my-2">Summary of Assessment</div>

                    <div className="grid grid-nogutter border-top-1 surface-border pt-2">
              
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
           
               <Button   ref={btnz} label="print" className="p-button-outlined mt-2 md:mt-0" onClick={print} />
       
       
              
           </div>
       </div>
                     
                    </div>
                </div>
                </div>
                </div>
  )
}

export default Notice