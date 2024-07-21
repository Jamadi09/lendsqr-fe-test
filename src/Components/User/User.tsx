import  React from 'react';
import './User.scss'
import { useEffect, useState } from 'react';
import lendlogo from '../../Assets/lendsqr logo.png'
import { BellOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { DownSquareOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { BankOutlined } from '@ant-design/icons';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { TeamOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDollar, faHandshake, faUserCheck, faUserXmark, faSackDollar,
  faBriefcase, faHouseUser, faLayerGroup, faMoneyBillTransfer, faFan, faScroll, faChartColumn, faList, faCircleXmark, faSuitcaseRolling
}
  from '@fortawesome/free-solid-svg-icons';
  import { faUsers, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




export interface post  { 
  
}

export function User (props: post) {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/userdetails')
  }
  const [column, setColumn] = useState<any[]>([])
  const [record, setRecord] = useState<any[]>([])
  useEffect(()=>{
    fetch("http://localhost:3000/Data.json")
    .then(res => res.json())
    .then(data => {
      setColumn(Object.keys(data.users[0]))
      setRecord(data.users)
    })
  },[])
  return (
    <div className='dashbord'>  
    <div className='dashboardlogo'>
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

 
 
 
 <div className='users'>
    <div><h1 onClick={handleClick }>Users</h1></div>
    <div className='subuser1'>
    <UsergroupAddOutlined />
    <h5>USERS</h5>
    <h5>2,453</h5>
    </div>

    <div className='subuser2'>
    <FontAwesomeIcon icon={faUsers} />
    <h5>ACTIVE USERS</h5>
    <h5>2,453</h5>
    </div>

    <div className='subuser3'>
    <FontAwesomeIcon icon={faLayerGroup} />
    <h5>USERS WITH LOANS</h5>
    <h5>12,453</h5>
    </div>

    <div className='subuser4'>
    <FontAwesomeIcon icon={faLayerGroup} />
    <h5>USERS SAVINGS</h5>
    <h5>102,453</h5>
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
    <span><UsergroupAddOutlined /> Users</span>
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
       <div className='container'>
        <table className='table'>
          <thead className='thead'>
            <tr className='tablesub'>
              {column.map((c, i) => (
                  <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className='body'>
            {
              record.map((record, i) => (
                <tr key={i}>
                  <div className='id'><td >{record.id}</td></div>
                  <div className='organization'><td>{record.organization}</td></div>
                  <div className='username'><td >{record.username}</td></div>
                  <div className='email'><td>{record.email}</td></div>
                 <div className='phone'> <td>{record.phone}</td></div>
                  <div className='date'><td>{record.date}</td></div>
                  <div className='status'><td>{record.status}</td></div>
                </tr>
                ))
            }
          </tbody>
        </table>
       </div>
</div>
      
  );
}
