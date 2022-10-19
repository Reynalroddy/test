import React, {  } from 'react'

// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from "axios";
import { Button } from 'primereact/button';
// import { Chart } from 'primereact/chart';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
// import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
// import { Calendar } from 'primereact/calendar';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { Link,useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
// import {Checkbox} from 'primereact/checkbox';


const Mda = () => {
    const mda = [
       
        {label: 'Ministry of justice', value: 'ministry of justice'},
        {label: 'Ministry of education', value: 'ministry of education'},
        {label: 'Ministry of commerce, Industry and `Co-operative', value: 'Ministry of commerce,Industry and `Co-operative'},
    
];

const service = [
       
    {label: 'Stamp fee', value: 'Stamp fee'},
    {label: 'court fee', value: 'court fee'},
    {label: 'sitting charge', value: 'sitting charge'},

];
  return (
    <div className="grid" >
    <div className="col-12 md:col-12 lg:col-12">
        <div className="surface-card flex p-3 flex-column"> 
        <div className="grid formgrid p-fluid"> 
        <div className='col-12 md:col-10 mx-auto'>
        <div className="field mb-4 w-full">
   <label htmlFor="item" className="font-medium text-sm text-900">Name of MDA </label>
<Dropdown  options={mda}  placeholder="Name of MDA"/>
</div>

<div className="field mb-4 w-full">
   <label htmlFor="item" className="font-medium text-sm text-900">Name of service/purpose </label>
<Dropdown  options={service}  placeholder="Name of purpose"/>
</div>
<div className='grid'>
<div className="field mb-4 col-12 md:col-6 lg:col-6">
                    <label htmlFor="city1" className="font-medium text-900">Fixed amount to pay (₦) *</label>
                    <InputText id="city1" type="text" />
                </div>
                <div className="field mb-4 col-12 md:col-6 lg:col-6">
                    <label htmlFor="state1" className="font-medium text-900">Type in the amount (₦) (optional)</label>
                    <InputText id="state1" type="text" />
                </div>
</div>

<div className="field mb-4 col-12">
                    <label htmlFor="bio1" className="font-medium text-900">Description (optional)</label>
                    <InputTextarea id="bio1" type="text" rows={4} autoResize />
                </div>
               
                <div className="flex md:align-items-center gap-3  border-top-1 surface-border p-3 flex-column md:flex-row">
          
          <Button    label="Generate bill" className="p-button-outlined mt-2 md:mt-0 w-10rem border-round-md" />
          <Button     label="Make Payment" className="p-button-outlined mt-2 md:mt-0 w-10rem border-round-md" />
  
      </div>
        </div>
 
</div>
        </div>
        </div>
        </div>
  )
}

export default Mda