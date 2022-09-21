
import React, { useState} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
// import { Checkbox } from 'primereact/checkbox';
// import { Divider } from 'primereact/divider';
// import { Carousel } from 'primereact/carousel';
// import { Ripple } from 'primereact/ripple';
import Logo from '../assets/images/irms/logo.png'
import Ban  from "../assets/images/irms/login-bg.png"
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
    // const [checked2, setChecked2] = useState(false);
    const [displayBasic, setDisplayBasic] = useState(false);
    const basicDialogFooter = <Button type="button" label="Dismiss" onClick={() => setDisplayBasic(false)} icon="pi pi-check" className="p-button-secondary" />;
  return (
   <>
    <div className="min-h-screen  px-3 md:px-8 pt-4 w-screen bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(90deg, hsla(104, 20%, 48%, 0.86) 100%, hsla(104, 23%, 22%, 0.86) 100%),url(${Ban})` }}>
<div className='flex justify-content-center md:justify-content-start'>
<img  src={Logo} className='w-5rem'  style={{objectFit:'contain' }} alt='logo'/>
</div>

     <div className='flex gap-4 w-full pt-8 md:mt-6' 
    //  style={{minHeight:'calc(100vh - 144px)'}}
     >
    <div className="hidden lg:flex h-26rem justify-content-center flex-column text-white w-8 gap-1">
    <div className="text-5xl font-bold mb-3">Gombe State Internal revenue</div>
                            <p className="line-height-3 mt-0 mb-6 text-2xl font-semibold">integrated Management system.</p>
<div className='border-round-md flex justify-content-center align-items-center w-25rem h-5rem ' style={{border:'1px solid #707070',background:'transparent'}}>
<p className='m-0 text-xl font-medium '>All your Tax need in One place and Ease</p>
</div>
    </div>
    <div className="w-full lg:w-4 surface-card px-4 py-5 border-round-xl">
    <div className="text-blue-500 text-2xl font-medium mb-6">Taxpayer Login</div>
                            <label htmlFor="email3" className="block text-900 font-medium mb-2">Taxpayer ID</label>
                            <InputText id="email3" type="text" className="out-0 w-full mb-4 border-none border-bottom-2 outline-none" />

                            

                            <div className="flex align-items-center justify-content-end mb-6">
                               
                                <Link to='' className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer text-sm ">Forgot TaxID?</Link>
                            </div>

                           <Link to='/dashboard'> <Button label="Login" icon="pi pi-user" className="w-full bg-blue-700 border-none " /></Link>

                            <Divider align="center" className="my-6">
                                <span className="text-600 font-normal text-sm">OR</span>
                            </Divider>

                            {/* <Button label="Sign In with GitHub" icon="pi pi-github" className="w-full p-button-secondary" /> */}

                            <div className="mt-6 text-center text-blue-500 cursor-pointer" onClick={() => setDisplayBasic(true)}>
                               create a new taxpayer account
                            </div>
                          
        
    </div>
   
        </div> 
       
      
    </div>

<Dialog header="Create new account as an individual with NIN or without NIN or as a business. " visible={displayBasic} style={{ width: '30vw' }} breakpoints={{'960px': '95vw'}} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
<TabView className='py-3'>
                        <TabPanel header="Register with NIN">
                        {/* <label htmlFor="nin" className="block text-900 font-medium mb-2">Linked NIN phone number</label> */}
                            <InputText id="nin" type="text" className="out-0 w-full mb-4 border-none border-bottom-2 outline-none my-2" placeholder='Type in the phone number used to register NIN' />
                           <Link to='/register'> 
                           <Button label="Proceed to Register" icon="pi pi-plus" className="w-full bg-blue-700 border-none my-3 " />
                           </Link> 
                            </TabPanel>
                        <TabPanel header="Register without NIN">
                        <Link to='/register'> 
                        <Button label="Proceed to Register" icon="pi pi-plus" className="w-full bg-blue-700 border-none my-3 " />
                        </Link>
                        </TabPanel>
                        <TabPanel header="Register as Business">
                        <InputText id="cac" type="text" className="out-0 w-full mb-4 border-none border-bottom-2 outline-none my-2" placeholder='Type in your CAC' />
                        <Link to='/register'> 
                            <Button label="Proceed to Register" icon="pi pi-plus" className="w-full bg-blue-700 border-none my-3 " />
                            </Link>
                        </TabPanel>
                    </TabView>
</Dialog>

</>

       
  )
}

export default Login




// background: linear-gradient(90deg, hsla(104, 20%, 48%, 1) 100%, hsla(104, 23%, 22%, 1) 100%);