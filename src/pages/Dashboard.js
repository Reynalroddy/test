import React from 'react'

// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
// import { InputText } from 'primereact/inputtext';
const Dashboard = () => {
    // const [loading1, setLoading1] = useState(true);
// const [filters1, setFilters1] = useState(null);
// const [globalFilterValue1, setGlobalFilterValue1] = useState('');
// const [products, setProducts] = useState([]);

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Revenue chart',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#32A969',
            tension: .4
        },
        
    ]
};

// const statusBodyTemplate2 = (rowData) => {
//     return <Link  className={`btn btn-primary text-primary font-bold `} to={`/single-device/${rowData.id}`} >
// VIEW DEVICE
//     </Link>
// }

// const renderHeader1 = () => {
//     return (
//         <div className="flex justify-content-between">
//             <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined"  />
//             <span className="p-input-icon-left">
//                 <i className="pi pi-search" />
//                 <InputText  placeholder="Keyword Search" />
//             </span>
//         </div>
//     )
// }
// const header1 = renderHeader1();
// useEffect(() => {
//     const getDatz=async ()=>{
//   // const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
//   // console.log(statz.data.results)
//   const statz = await axios.get('https://jsonplaceholder.typicode.com/users');
//   console.log(statz.data)
//   // setMyStatz(statz.data.mtn);
//   setProducts(statz.data)
//     // setProducts(statz.data.results)
//     setLoading1(false)
//     }
//             getDatz()
           
  
//   }, []);
   // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <div className="grid">
    <div className="col-12">
    <div className="surface-card shadow-2 border-round flex p-3 flex-column">
    <div className="grid">
                                        <div className="col-12 md:col-6 lg:col-4 p-3">
                                            <div className="p-3 text-center bg-blue-500" style={{ borderRadius: '12px' }}>
                                                <span className="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-inbox text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">+12%</div>
                                                <span className="text-blue-100 font-medium">Total tax payment</span>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 p-3">
                                            <div className="p-3 text-center bg-purple-500" style={{ borderRadius: '12px' }}>
                                                <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-map-marker text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">+23%</div>
                                                <span className="text-purple-100 font-medium">Monthly tax payment</span>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 p-3">
                                            <div className="p-3 text-center bg-indigo-500" style={{ borderRadius: '12px' }}>
                                                <span className="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-file text-xl text-white"></i>
                                                </span>
                                                <div className="text-2xl font-medium text-white mb-2">+53%</div>
                                                <span className="text-indigo-100 font-medium">Weekly tax payment</span>
                                            </div>
                                        </div>
                                      

                                        <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Monthly Revenue Statistics</div>
                      
                    </div>

                    <Chart type="line" data={lineData}  className='my-chart w-11 lg:w-12' />
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4 flex align-items-center justify-content-center">
                                            <div className="p-3  w-15rem" style={{ borderRadius: '12px',backgroundColor:'#286C65' }}>
                                                {/* <span className="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3" style={{ width: '49px', height: '49px' }}>
                                                    <i className="pi pi-map-marker text-xl text-white"></i>
                                                </span> */}
                                                <p className='text-2xl font-bold text-white'>N59,000</p>
                                                <span className="text-purple-100 text-sm">Generated MDA revenue</span>
                                                <div className="text-2xl font-medium text-white mb-2">23,000</div>

                                                <span className="text-purple-100 text-sm">Generated MDA Bills</span>
                                                <div className="text-2xl font-medium text-white mb-2">63,000</div>
                                                
                                            </div>
                                        </div>

                                       
                                        {/* <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Pending Requests</span>
        <div className="flex align-items-center export-buttons">
           
            <Button type="button" icon="pi pi-file-excel" 
            // onClick={exportExcel}
             className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" 
            // onClick={exportPdf}
             className="p-button-warning mr-2" data-pr-tooltip="PDF" />
           
        </div>
       
    </div>
             <DataTable value={products} 
            //  ref={dt}
                //   filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="scroll"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                            <Column field="name" header="NAME"></Column>
                            <Column field="username" header="REQUEST NUMBER"></Column>
                            <Column field="email" header="REQUEST DATE"></Column>
                            <Column field="phone" header="STATUS"></Column>
                           
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                   
                </div>
            </div> */}

                                      
                                    </div>
                                    </div>
     
    </div>
    </div>
    {/* <div className='grid mt-2'> */}
     {/* <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Pending Requests</span>
        <div className="flex align-items-center export-buttons">
           
            <Button type="button" icon="pi pi-file-excel" 
            // onClick={exportExcel}
             className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" 
            // onClick={exportPdf}
             className="p-button-warning mr-2" data-pr-tooltip="PDF" />
           
        </div>
       
    </div>
             <DataTable value={products} 
            //  ref={dt}
                //   filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="scroll"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                            <Column field="name" header="NAME"></Column>
                            <Column field="username" header="REQUEST NUMBER"></Column>
                            <Column field="email" header="REQUEST DATE"></Column>
                            <Column field="phone" header="STATUS"></Column>
                           
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                   
                </div>
            </div> */}
            
           
{/* </div>  */}
 {/* <div className='grid'>
    <div className="col-12 lg:col-12">
    <div className="surface-card shadow-2 border-round flex  flex-column">
   
    <DataTable value={products} 
            //  ref={dt}
                //   filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="scroll"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                            <Column field="name" header="NAME"></Column>
                            <Column field="username" header="REQUEST NUMBER"></Column>
                            <Column field="email" header="REQUEST DATE"></Column>
                            <Column field="phone" header="STATUS"></Column>
                            
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                  
        </div>
        </div>

    </div>  */}
    </>
  )
}

export default Dashboard