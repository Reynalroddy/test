import React, {  useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
// import { Chart } from 'primereact/chart';
import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { Calendar } from 'primereact/calendar';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link } from 'react-router-dom';
// import { Dropdown } from 'primereact/dropdown';
// import {Checkbox} from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { FileUpload } from 'primereact/fileupload';
const EmployeeDetails = () => {
    // const navigate=useNavigate();
    const [displayBasic2, setDisplayBasic2] = useState(false);

const[city,setCity] = useState();

    const dialogFuncMap = {
       
        'displayBasic2': setDisplayBasic2,
       
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

       
    }


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

  return (
    <div className="grid" >
                <div className="col-12 md:col-12 lg:col-12">
                    <div className="surface-card flex p-3 flex-column">    
                        <div className='flex justify-content-between align-items-center py-2'>
<p className='text-sm font-medium ' style={{color:'#3C66A3'}}>Employee Details</p>
<Button label="Upload employee details" className="border-none p-button-raised text-sm" style={{backgroundColor:'#3C66A3'}} onClick={() => onClick('displayBasic2')} />
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
<Column field="desc" header="Tax ID"></Column>
 <Column field="bill" header="Name"></Column>
 <Column field="desc" header="Consolidated gross income"></Column>
 <Column field="bill" header="HMO"></Column>
 <Column field="bill" header="Other deduction"></Column>
 <Column field="desc" header="NHF"></Column>
 <Column field="desc" header=" Pencom"></Column>
 <Column field="status" header="Action" body={statusBodyTemplate2}/>
                            
            
                          
                        </DataTable> 
                        {/* <FileUpload name="demo" url="./upload" mode="basic" customUpload uploadHandler={myUploader} /> */}
                    </div>
                </div>
                <Dialog header="Upload Employee Data" visible={displayBasic2} style={{ width: '50vw',color:'#565656' }} breakpoints={{'960px': '95vw'}} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className="flex">  
                <div className='w-5'>
                {/* <div className="font-medium text-900 mb-2">Upload Employeee in the accept format that clearly shows the details and emumerations of employees</div> */}
            <div className="line-height-3 text-600 mb-3" style={{ maxWidth: '30rem' }}>Upload Employeee in the  format that clearly shows the details and emumerations of employees.</div>
            <div className="line-height-3 text-600 mb-3" style={{ maxWidth: '30rem' }}>Choose Financial condition</div>
            <div className="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="Consolidated" onChange={(e) => setCity(e.value)} checked={city === 'Consolidated'}  />
                    <label htmlFor="city1">Consolidated</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="Non-Consolidated" onChange={(e) => setCity(e.value)} checked={city === 'Non-Consolidated'} />
                    <label htmlFor="city2">Non-Consolidated</label>
                </div>
                <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]"  accept=".csv" className="mr-2" />

                </div>
                   <div className='w-2'>
                   <div className="flex relative align-items-center justify-content-center mx-1 py-3 min-h-full">
            <div className="border-left-1 border-300 top-0 left-50 absolute h-full"></div>
            <div className="py-2 z-1 surface-0">
                <span className="text-900 font-medium">OR</span>
            </div>
                    </div>
                   </div>
                 
                   

                    <div className='w-5'>
                    <div className="field mb-4 col-12 md:col-6">
                    <div className="text-sm text-900 mb-2">Employee Tax ID</div>
            <label htmlFor="company_name" className="text-sm text-900 ">Input employee Tax Id to continue</label>
            <InputText id="company_name" type="text" className='' placeholder='Input employee Tax Id' />
        </div>
        <Button label="Continue" className="w-8 mb-7 md:mb-0"  />
    </div>
   </div>
                </Dialog>


            </div>


  )
}

  

export default EmployeeDetails