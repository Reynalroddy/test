
import React,{useRef} from 'react'
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Outlet } from "react-router-dom";
import Logo from '../assets/images/irms/logo.png'

import icon1 from '../assets/images/irms/1.png'
import icon2 from '../assets/images/irms/2.png'
import icon3 from '../assets/images/irms/3.png'
import icon4 from '../assets/images/irms/4.png'
import icon5 from '../assets/images/irms/5.png'
// import icon6 from '../assets/images/irms/logo.png'
// import Avatar from "../assets/images/avatar.png";
// import { InputText } from 'primereact/inputtext';
import "./shared.css";
const Testz = () => {
    const btnRef54 = useRef(null);
    // const btnRef55 = useRef(null);
    // const btnRef56 = useRef(null);
    const btnRef30 = useRef(null);
    // const btnRef1 = useRef(null);
    // const btnRef2 = useRef(null);
  return (
  
    <div className="min-h-screen flex flex-column surface-ground">
                    <div className=" py-3 px-6 flex align-items-center justify-content-between relative lg:sticky top-0 left-0 z-3 " style={{backgroundColor:'#038541' ,height:'65px'}}>
                        <StyleClass nodeRef={btnRef54} selector="#app-sidebar-12" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                         {/* eslint-disable-next-line  */}
                            <a ref={btnRef54} className="p-ripple cursor-pointer block lg:hidden text-700">
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <img src={Logo} alt="Img" height="50" className="loc-img mr-0 lg:mr-6" />
                        <div  className="hidden lg:opacity-0 lg:block"></div> 
                        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row ">
                   
                </ul>
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                  
                    <li className="h-full relative">
                <StyleClass nodeRef={btnRef30} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                     {/* eslint-disable-next-line */}
                    <a ref={btnRef30} className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none  border-transparent  transition-colors transition-duration-150">
                        {/* <img src={Avatar}  alt='avatar' className="lg:mr-0" style={{ width: '28px', height: '28px' }} /> */}
                        <span className="mx-2 font-medium text-white">Jane Sanders</span>
                        <i className="pi pi-angle-down text-white"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-5 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                    <ul className="list-none p-0 m-0">
                        {/* <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-user mr-2"></span>
                                <span className="font-medium">Profile</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-cog mr-2"></span>
                                <span className="font-medium">Settings</span>
                                <Ripple />
                            </a>
                        </li> */}
                        <li>
                             {/* eslint-disable-next-line */}
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-sign-out mr-2"></span>
                                <span className="font-medium">Sign Out</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
                   
                </ul>
            </div>
            </div>
                      
                 
                    <div className=" flex relative lg:static flex-auto">
                        <div id="app-sidebar-12" className="surface-card hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none shadow-2" style={{ width: '280px', borderRadius: '12px' }}>
                            <div className="flex flex-column h-full">
                                <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0 mt-4">
                    <li>
                         {/* eslint-disable-next-line  */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            {/* <i className="pi pi-home mr-2 text-green-700 font-bold"></i> */}
                            <img src={icon1} alt='' className='w-2rem mr-2 h-2rem' style={{objectFit:'contain'}}/>
                            <span className="font-medium  font-medium" style={{color:'#038541'}}>Dashboard</span>
                            <Ripple />
                        </a>
                    </li>
                    
                    {/* <li>
                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef1} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                <span className="text-gray-700 font-medium">Requests</span>
                                <i className="pi pi-chevron-right ml-auto mr-1"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/admin/admin-approved' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">Approved Requests</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/admin/admin-flagged' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">Flagged Requests</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </ul>
                    </li> */}

                    <li>
                         {/* eslint-disable-next-line  */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <img src={icon2} alt='' className='w-2rem mr-2 h-2rem' style={{objectFit:'contain'}}/>
                            <span className="font-medium  font-medium" style={{color:'#3C66A3'}}>Pay as you Earn</span>
                            <Ripple />
                        </a>
                    </li>

                    <li>
                         {/* eslint-disable-next-line  */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <img src={icon3} alt='' className='w-2rem mr-2 h-2rem' style={{objectFit:'contain'}}/>
                            <span className="font-medium  font-medium" style={{color:'#17BDC4'}}>MDA</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                         {/* eslint-disable-next-line  */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <img src={icon5} alt='' className='w-2rem mr-2 h-2rem' style={{objectFit:'contain'}}/>
                            <span className="font-medium  font-medium" style={{color:'#C48117'}}>Direct Assessment</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                         {/* eslint-disable-next-line  */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <img src={icon4} alt='' className='w-2rem mr-2 h-2rem' style={{objectFit:'contain'}}/>
                            <span className="font-medium  font-medium" style={{color:'#668C89'}}>Vehicle Licensing</span>
                            <Ripple />
                        </a>
                    </li>

                    {/* <li>
                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                <span className="text-gray-700 font-medium">Visa Applications</span>
                                <i className="pi pi-chevron-right ml-auto mr-1"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">Approved</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">Queried</span>
                                    <Ripple />
                                </a>
                            </li>

                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">Rejected</span>
                                    <Ripple />
                                </a>
                            </li>

                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-green-700 font-bold"></i>
                                    <span className="font-medium text-gray-700">None Responsive</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li> */}
                   
                  
                 
                   
                </ul>
                                    {/* <div className="p-3">
                                        <div className="p-input-icon-left w-full">
                                            <i className="pi pi-search"></i>
                                            <InputText className="border-1 surface-border w-full" placeholder="Search" style={{ borderRadius: '30px' }} />
                                        </div>
                                    </div> */}
                                    {/* <ul className="list-none px-3 pb-3 pt-0 m-0">
                                        <li>
                                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                                <span className="font-medium text-sm text-900">FAVORITES</span>
                                                <Ripple />
                                            </div>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 bg-purple-50 transition-duration-150 transition-colors text-purple-500 border-purple-500 border-right-2">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef56} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef56} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef57} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef57} className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                    {/* <ul className="list-none p-3 m-0">
                                        <li>
                                            <div className="p-3 flex align-items-center justify-content-between text-600">
                                                <span className="font-medium text-sm text-900">APPLICATION</span>
                                                <Ripple />
                                            </div>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </div>
                                <div className="lg:hidden mt-auto border-top-1 surface-border p-3 flex justify-content-between">
                                    {/* <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                                        <i className="pi pi-file text-xl"></i>
                                        <Ripple />
                                    </a>
                                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                                        <i className="pi pi-star text-xl"></i>
                                        <Ripple />
                                    </a> */}
                                     {/* eslint-disable-next-line  */}
                                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                                        <i className="pi pi-cog text-xl"></i>
                                        <Ripple />
                                    </a>
                                     {/* eslint-disable-next-line  */}
                                    <a className="p-ripple cursor-pointer inline-flex align-items-center justify-content-center bg-pink-500 text-white border-2 border-pink-600 hover:bg-pink-600 text-600 transition-colors transition-duration-150 border-circle" style={{ width: '40px', height: '40px' }}>
                                        <i className="pi pi-sign-out text-xl"></i>
                                        <Ripple />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="flex-auto">
<Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Testz