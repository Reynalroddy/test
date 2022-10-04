import React, {  useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";

import { Button } from 'primereact/button';
// import { Chart } from 'primereact/chart';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { Calendar } from 'primereact/calendar';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link,useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import {Checkbox} from 'primereact/checkbox';
const DirectAssessment = () => {
    const navigate=useNavigate();
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [checked1,setChecked1] = useState(false)
    const [val,setVal]= useState([{}]);
    const [val1,setVal1]= useState([{}]);
    const add=()=>{
        const abc=[...val,{}]
        setVal(abc)
    }
const add1=()=>{
    const abc=[...val1,{}]
    setVal1(abc)
}




//    var UploadFieldID = "file-upload";
//    var MaxSizeInBytes = 2097152;
//    var fld = document.getElementById(UploadFieldID);
//    if( fld.files && fld.files.length == 1 && fld.files[0].size > MaxSizeInBytes )
//    {
//       alert("The file size must be no more than " + parseInt(MaxSizeInBytes/1024/1024) + "MB");
//       return false;
//    }
//    return true;
// } 

// const handleChange=(onChangeValue,i,name)=>{
//     const inputdata = [...val];
//     inputdata[i][name] = onChangeValue.target.value;
//     setVal(inputdata)
//    }
//    const handleDelete=(i)=>{
//        const deletVal=[...val]
//        deletVal.splice(i,1)
//        setVal(deletVal)  
//    }
    const dialogFuncMap = {
       
        'displayBasic2': setDisplayBasic2,
       
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

       
    }
    const city = [
       
        {label: 'Business', value: 'NY'},
        {label: 'Trade', value: 'RM'},
        {label: 'Profession', value: 'LDN'},
        {label: 'Vocation', value: 'IST'},
        {label: 'Contracts', value: 'PRS'}
    
];

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
               
            </div>
        );
    }
    const prods=[
        
    ]
    const statusBodyTemplate2 = (rowData) => {
        return <Link className={`btn btn-primary text-primary font-bold `} to={`/single-device/${rowData.id}`} >
            view
        </Link>
    }

    const renderHeader1 = () => {
        return (
            <div className="hidden lg:flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
            </div>
        )
    }
    const header1 = renderHeader1();
    // const myUploader = (event) => {
    //     event.files == files to upload
    //     console.log(event)
    // }
    const regz =()=>{
        setDisplayBasic2(false)
        Swal.fire({
            title: 'Assessment submitted successfully',
            text: 'redirecting to assessment summary..',
            icon: 'success',
           
            confirmButtonColor: '#0b6916',
     confirmButtonText: 'OKAY'
          })
          .then((result) => {
            if(result.value){
             navigate('/dashboard/assessment-summary')
           }
         })
    }
  return (
    <div className="grid" >
                <div className="col-12 md:col-12 lg:col-12">
                    <div className="surface-card flex p-3 flex-column">    
                        <div className='flex justify-content-between align-items-center py-2'>
<p className='text-sm font-medium ' style={{color:'#3C66A3'}}>Assessment History</p>
<Button label="Apply for Assessment" className="border-none p-button-raised text-sm" style={{backgroundColor:'#3C66A3'}} onClick={() => onClick('displayBasic2')} />
                        </div>
                         <DataTable value={prods}
                            stripedRows
                           responsiveLayout="stack"
                            breakpoint="960px"
                            header={header1}
                            paginator
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5, 10, 50]}    
                        >
<Column field="desc" header="Year of Assessment"></Column>
 <Column field="bill" header="Gross income(NGN)"></Column>
 <Column field="desc" header="Total Tax due"></Column>
 <Column field="bill" header="Assessment Ref"></Column>
 <Column field="bill" header="Assessment Status"></Column>
 <Column field="desc" header="Additional Tax due"></Column>
 <Column field="status" header="Action" body={statusBodyTemplate2}/>
                            
            
                          
                        </DataTable> 
                        {/* <FileUpload name="demo" url="./upload" mode="basic" customUpload uploadHandler={myUploader} /> */}
                    </div>
                </div>
                <Dialog header="Apply for Assessment" visible={displayBasic2} style={{ width: '50vw',color:'#565656' }} breakpoints={{'960px': '95vw'}} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className="grid formgrid p-fluid">
                    <div className='grid w-full my-2'>
                    <div className="field mb-4 col-12 md:col-4">
            <label htmlFor="company_name" className="font-medium text-sm text-900 ">Year of Assessment</label>
            <InputText id="company_name" type="text"  value='2022' readOnly className='border-none border-bottom-2 outline-none' />
        </div>

                    </div>
               
                    <div className='grid w-full my-2'>
                    <div className="field  col-12">
    <p className='text-sm font-medium text-900'>Statement of income of the Year Ended December 31st</p>
    </div>
    {
val.map((item,i)=>{
    return <div className='grid w-full ' key={i}>
    <div className="field mb-4 col-12 md:col-4">
   <label htmlFor="item" className="font-medium text-sm text-900">Source of income </label>
<Dropdown  options={city}  placeholder="Source of income"/>

</div>
<div className="field mb-4 col-12 md:col-4">
   <label htmlFor="company_name" className="font-medium text-sm text-900 ">Amount</label>
   <InputText id="company_name" type="text" className='border-none border-bottom-2 outline-none' />
</div>
<div className="field mb-4 col-12 md:col-4">
   <label htmlFor="comp_name" className="font-medium text-sm text-900 ">Supporting document</label>
   {/* <InputText id="comp_name" type="text" className='border-none border-bottom-2 outline-none' /> */}
   <input type='file' />
</div>


</div>
})
     
    }

        <div className="field mb-4 col-12 md:col-3">
   <Button label="Add source of income " icon="pi pi-plus" className="w-auto my-3 md:mb-0 text-sm" onClick={add}/>
   </div>       
</div>

<div className='grid w-full my-2'>
<div className="field col-12">
    <p className='text-sm font-medium text-900'>Deductions</p>
    </div>


        {
           val1.map((item,i)=>{
            return <div className='grid w-full ' key={i}> 
                        <div className="field mb-4 col-12 md:col-4">
            <label htmlFor="item" className="font-medium text-sm text-900">Deductions </label>
<Dropdown  options={city}  placeholder="Source of income"/>
 
        </div>
        <div className="field mb-4 col-12 md:col-4">
            <label htmlFor="company_name" className="font-medium text-sm text-900 ">Amount</label>
            <InputText id="company_name" type="text" className='border-none border-bottom-2 outline-none' />
        </div>
        <div className="field mb-4 col-12 md:col-4">
            <label htmlFor="comp_name" className="font-medium text-sm text-900 ">Supporting document</label>
            {/* <InputText id="comp_name" type="text" className='border-none border-bottom-2 outline-none' /> */}
            <input type='file' />
        </div>
        </div>
        })
     
    }
        
     

        <div className="field mb-4 col-12 md:col-3">
            <Button label="Add Deduction " icon="pi pi-plus" className="w-auto my-3 md:mb-0 text-sm" onClick={add1}/>
            </div>
       </div>
       <div className='grid w-full my-2'>
                    <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="item" className="font-medium text-sm text-900">Total income(NGN)</label>
            <InputText id="company_name" type="text"  value='100,000' className='border-none border-bottom-2 outline-none' />
 
        </div>
        <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="company_name" className="font-medium text-sm text-900 ">Consolidated relief Allowance</label>
            <InputText id="company_name" type="text" value='100,000' className='border-none border-bottom-2 outline-none' />
        </div>
        </div>
        <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                <label htmlFor="rememberme" className='text-sm'>I here by acknowledge that all information and document provided above are true and I can be hold accountable and prosecuted for any false information provided</label>
            </div>
            {/* <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a> */}
        </div>
       
      
     
       
        <Button label="Submit"  className="w-auto mb-7 md:mb-0" onClick={regz} />
    </div>
                </Dialog>
            </div>



  )
}

export default DirectAssessment