import React from 'react'
import { Button } from 'primereact/button';
import { Link,useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import Ban  from "../assets/images/irms/login-bg.png"
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const Register = () => {
    const navigate=useNavigate();
    const city = [
       
            {label: 'Gombe', value: 'NY'},
            {label: 'Rome', value: 'RM'},
            {label: 'London', value: 'LDN'},
            {label: 'Istanbul', value: 'IST'},
            {label: 'Paris', value: 'PRS'}
        
    ];


    const regz =()=>{
        Swal.fire({
            title: 'Registration is successful',
            text: 'login to view tax certificate.',
            icon: 'success',
           
            confirmButtonColor: '#0b6916',
     confirmButtonText: 'OKAY'
          })
          .then((result) => {
            if(result.value){
             navigate('/login')
           }
         })
    }
  return (
    <div className="px-3 md:px-8 py-4 w-screen bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(90deg, hsla(104, 20%, 48%, 0.86) 100%, hsla(104, 23%, 22%, 0.86) 100%),url(${Ban})` }}>
    <div className="surface-card p-4 shadow-2 border-round-xl p-fluid">
        <Link to='/login'>
        <Button label="Back" icon="pi pi-arrow" className="w-auto my-3" />
        </Link>
   
    <p className='font-bold text-xl'>Create {'Individual'} Taxpayer Account</p>
    <div className="grid formgrid p-fluid">
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="company_name" className="font-medium text-900 ">Registration Type</label>
            <InputText id="company_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="comp_name" className="font-medium text-900 ">Company name</label>
            <InputText id="comp_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="cac_num" className="font-medium text-900 ">CAC registration number</label>
            <InputText id="cac_num" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="invoice_id" className="font-medium text-900">Identification Id</label>
            <InputText id="invoice_id" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="customer_name" className="font-medium text-900">Surname</label>
            <InputText id="customer_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="other_name" className="font-medium text-900">Othernames</label>
            <InputText id="other_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="title_name" className="font-medium text-900">Title</label>
            <InputText id="title_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="customer_email" className="font-medium text-900"> Email</label>
            <InputText id="customer_email" className='border-none border-bottom-2 outline-none' type="text" />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="invoice_date" className="font-medium text-900">Date of Birth</label>
            <Calendar id="invoice_date" showIcon className='border-none outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="inc_date" className="font-medium text-900">Date of Incorporation</label>
            <Calendar id="inc_date" showIcon className='border-none outline-none' />
        </div>
      
        <div className="field mb-4 col-12 md:col-6">
        <label htmlFor="withoutgrouping">Phone number</label>
                        <InputNumber inputId="withoutgrouping"   mode="decimal" useGrouping={false} className='border-none outline-none' />

        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="customer_occupation" className="font-medium text-900"> Occupation/Profession</label>
            <InputText id="customer_occupation" className='border-none border-bottom-2 outline-none' type="text" />
        </div>
       
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="sector_name" className="font-medium text-900">Business Sector</label>
            <InputText id="sector_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="customer_addy" className="font-medium text-900"> Address</label>
            <InputText id="customer_addy" className='border-none border-bottom-2 outline-none' type="text" />
        </div>
      
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="lga" className="font-medium text-900">LGA</label>
            <InputText id="lga" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="item" className="font-medium text-900">Select Tax office </label>
<Dropdown  options={city}  placeholder="Select a City"/>
 
        </div>
       
        <Button label="Complete registration" icon="pi pi-file" className="w-auto mb-7 md:mb-0" onClick={regz} />
    </div>
   
</div>
</div>
  )
}

export default Register