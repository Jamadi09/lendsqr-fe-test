import './Dashboard.scss'
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import lendlogo from '../../Assets/lendsqr logo.png'
import { BellOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { DownSquareOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { BankOutlined } from '@ant-design/icons';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { TeamOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { ExperimentOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDollar, faHandshake, faUserCheck, faUserXmark, faSackDollar,
  faBriefcase, faHouseUser, faLayerGroup, faMoneyBillTransfer, faFan, faScroll, faChartColumn, faList, faCircleXmark, faSuitcaseRolling
}
  from '@fortawesome/free-solid-svg-icons';


export interface IAppProps {
}

export function Dashboard(props: IAppProps) {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/user')
  }
  return (
    
      <div className='dashbord'>  <div className='dashboardlogo'>
        <div><img src={lendlogo} alt="" /></div>
        <div className='dashboardinput'>
         <div className='input'> <input type="text" placeholder='Search for anything' /></div>
          <div className='btn'><span><button><SearchOutlined /></button></span></div>


          <div className='a'> <a href="">Docs</a></div>
        <div className='bell'>
           <div className='b'> <BellOutlined /></div>
            <div className='u'><UserOutlined /></div>
            <span className='span'>JOEL <DownSquareOutlined /></span>
            
          </div>
        </div>
       
      </div>

     
     
     
     
     
      


     <div className='sidebar'>

     <div className='heading'>
      <div className="heading1"><ShoppingOutlined /></div>
        <span><h4>Switch Organization</h4></span>
        <div className='downsquare'><DownSquareOutlined /></div>
      </div>
     <div className='section2'>
        <div className='bankoutlined'><BankOutlined /></div>
        <span><h4>Dashboard</h4></span>
      </div>
      <div className='section3'>
        <h4>CUSTOMERS</h4>
        <span onClick={handleClick}><UsergroupAddOutlined /> Users</span>
        <span><TeamOutlined /> Guarantors</span>
        <span><FontAwesomeIcon icon={faSackDollar} /> Loans</span>
        <span><FontAwesomeIcon icon={faHandshake} /> Decision Models</span>
        <span><FontAwesomeIcon icon={faHandHoldingDollar} />Loan Request</span>
        <span><FontAwesomeIcon icon={faUserCheck} />Whitelist</span>
        <span><FontAwesomeIcon icon={faUserXmark} />Karma</span>
      </div>
      <div className='section4'>
        <h4>BUISNESSES</h4>
        <span><FontAwesomeIcon icon={faBriefcase} /> Orginazation</span>
        <span><FontAwesomeIcon icon={faHandHoldingDollar} />Loan Products</span>
        <span> <FontAwesomeIcon icon={faHouseUser} />Savings Products</span>
        <span><FontAwesomeIcon icon={faLayerGroup} />Fees and Charges</span>
        <span><FontAwesomeIcon icon={faMoneyBillTransfer} />Transactions</span>
        <span><FontAwesomeIcon icon={faFan} /> Services</span>
        <span><FontAwesomeIcon icon={faUserCheck} /> Service Account</span>
        <span><FontAwesomeIcon icon={faScroll} /> Settlements</span>
        <span><FontAwesomeIcon icon={faChartColumn} />Reports</span>

      </div>

      <div className='section5'>
        <h4>SETTINGS</h4>
        <span><FontAwesomeIcon icon={faList} /> Preferences</span>
        <span><FontAwesomeIcon icon={faCircleXmark} /> Fees and pricing</span>
        <span><FontAwesomeIcon icon={faSuitcaseRolling} /> Audit Logs</span>
      </div>
     </div>
    </div>
  
    
  );
}
