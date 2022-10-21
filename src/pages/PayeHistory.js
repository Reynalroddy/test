import React, {useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";

import { Button } from 'primereact/button';
// import { Chart } from 'primereact/chart';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { Calendar } from 'primereact/calendar';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link} from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
// import { Divider } from 'primereact/divider';
// import {Checkbox} from 'primereact/checkbox';
const PayeHistory = () => {
    // const navigate=useNavigate();
    const [year, setYear] = useState('');
    const yearSelectItems = [
        {label: 'select year', value: ''},
        {label: '2022', value: '2022'},
        {label: '2021', value: '2021'},
       
    ];

    // const dialogFuncMap = {
       
    //     'displayBasic2': setDisplayBasic2,
       
    // }

    // const onClick = (name, position) => {
    //     dialogFuncMap[`${name}`](true);

       
    // }


    // const onHide = (name) => {
    //     dialogFuncMap[`${name}`](false);
    // }

    // const renderFooter = (name) => {
    //     return (
    //         <div>
    //             <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
               
    //         </div>
    //     );
    // }
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
                <Dropdown value={year} options={yearSelectItems} onChange={(e) => setYear(e.value)} placeholder="Select year"/>
 

                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
            </div>
        )
    }
    const header1 = renderHeader1();
    // // const myUploader = (event) => {
    // //     event.files == files to upload
    // //     console.log(event)
    // // }
    // const regz =()=>{
    //     setDisplayBasic2(false)
    //     Swal.fire({
    //         title: 'Assessment submitted successfully',
    //         text: 'redirecting to assessment summary..',
    //         icon: 'success',
           
    //         confirmButtonColor: '#0b6916',
    //  confirmButtonText: 'OKAY'
    //       })
    //       .then((result) => {
    //         if(result.value){
    //          navigate('/dashboard/assessment-summary')
    //        }
    //      })
    // }
  return (
    <div className="grid" >
                <div className="col-12 md:col-12 lg:col-12">
                    <div className="surface-card flex p-3 flex-column">    
                        <div className='flex justify-content-between align-items-center py-2'>
<p className='text-sm font-medium ' style={{color:'#3C66A3'}}>PAYE Transaction History</p>
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
 <Column field="bill" header="Gross Income(NGN)"></Column>
 <Column field="desc" header="Total Tax due"></Column>
 <Column field="bill" header="Assessment Ref"></Column>
 <Column field="bill" header="Assessment Status"></Column>
 <Column field="status" header="Action" body={statusBodyTemplate2}/>
                            
            
                          
                        </DataTable> 
                        {/* <FileUpload name="demo" url="./upload" mode="basic" customUpload uploadHandler={myUploader} /> */}
                    </div>
                </div>

               
            </div>



  )
}

export default PayeHistory;