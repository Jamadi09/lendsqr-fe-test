import  react, { useEffect, useState } from 'react';
import './UserDetails.scss'
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
  faHandHoldingDollar, faHandshake, faStar, faUserCheck, faUserXmark, faSackDollar,
  faBriefcase, faHouseUser, faLayerGroup, faUser, faMoneyBillTransfer, faFan, faScroll, faChartColumn, faList, faCircleXmark, faSuitcaseRolling
}
  from '@fortawesome/free-solid-svg-icons';
  import { faUsers, faArrowDownWideShort, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View} from '../View';



export interface IAppProps {
}

export function UserDetails(props: IAppProps) {

  const deleteBook = (fullname)=>{
    const filteredBooks=books.filter((element, index)=>{
      return element.fullname !==fullname
    })
    setbooks(filteredBooks);
  }

  const getDatafromLS=()=>{
    const data = localStorage.getItem("books");
    if(data){
      return JSON.parse(data);
    }
    else{
      return [];
    }
  }

  const [books, setbooks] =useState(getDatafromLS());

  const handleAddBookSubmit=(e: { preventDefault: () => void; })=>{
      e.preventDefault();
      let book ={
         fullname,
        phonenumber,
        address,
        bvn,
        gender,
       maritalstatus,
        Children,
        residence,
        education,
        employmentstatus,
        sectorofemployment,
        duration,
        officeemail,
        monthlyincome,
        loanrepayment,
        twitter,
        facebook,
        instagram,
        linkedin,
        name,
        number,
        email,
        relationship
      }
      setbooks([...books, book] as any);
      setFullName("");
      setPhoneNumber("");
      setAddress("");
      setBvn("");
      setGender("");
      setMaritalStatus("");
      setChildren("");
      setResidence("");
      setEducation("");
      setEmploymentStatus("");
      setSectorofEmployment("");
      setDuration("");
      setOfficeEmail("");
      setMonthlyIncome("");
      setLoanRepayment("");
      setTwitter("");
      setFacebook("");
      setInstagaram("");
      setLinkedIn("");
      setName("");
      setNumber("");
      setEmail("");
      setRelationship("");
}
   
 useEffect(()=>{
    localStorage.setItem("books", JSON.stringify(books));
 }, [books]);
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bvn, setBvn] = useState("");
  const [gender, setGender] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [Children, setChildren] = useState("");
  const [residence, setResidence] = useState("");
  const [education, setEducation] = useState("");
  const [employmentstatus, setEmploymentStatus] = useState("");
  const [sectorofemployment, setSectorofEmployment] = useState("");
  const [duration, setDuration] = useState("");
  const [officeemail, setOfficeEmail] = useState("");
  const [monthlyincome, setMonthlyIncome] = useState("");
  const [loanrepayment, setLoanRepayment] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagaram] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/user')
  }
   
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

  
  <div className='box1'>
 <span onClick={handleClick}><FontAwesomeIcon icon={faArrowLeft} />  Back to Users</span>

 <span><h2>User Details</h2></span>
 <div className='blacklist'><h4>BLACKLIST USER</h4></div>
 <div className='activate'><h4>ACTIVATE USER</h4></div>
 
 </div>
 
<div className='container'>
<div className='icon'><FontAwesomeIcon icon={faUser} /> </div>

<div className='line'></div>
<span className='span1'>User's Tier </span>
<div className='star'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></div>
<div className='line1'></div>
<span className='bank'>#200, 000.00 9912345678/Providus Bank</span>

<div className='class'>
    <span><h5>General Details</h5></span>
    <span><h5>Documents</h5></span>
     <span><h5>Bank Details</h5></span>
     <span><h5>Loans</h5></span>
     <span><h5>Savings</h5></span>
     <span><h5>App and System</h5></span>
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

     <div className='form'>
      <form action="form1" onSubmit={handleAddBookSubmit}>
        <h3>Personal Information</h3>
        <label htmlFor="">Full Name:</label>
        <input type="text" name="" id="" placeholder='Enter your full name' onChange={(e)=>setFullName(e.target.value)} value={fullname} />

        <label htmlFor="">Phone Number:</label>
        <input type="text" name="" id="" placeholder='070' onChange={(e)=>setPhoneNumber(e.target.value)} value={phonenumber} />
        
        <label htmlFor="">Email Address:</label>
        <input type="text" name="" id="" placeholder='Enter Your Email' onChange={(e)=>setAddress(e.target.value)} value={address} />

        <label htmlFor="">BVN:</label>
        <input type="text" name="" id="" placeholder='BVN' onChange={(e)=>setBvn(e.target.value)} value={bvn} />

        <label htmlFor="">Gender:</label>
        <input type="text" name="" id="" placeholder='Male' onChange={(e)=>setGender(e.target.value)} value={gender} />

        <label htmlFor="">Marital Status:</label>
        <input type="text" name="" id="" onChange={(e)=>setMaritalStatus(e.target.value)} value={maritalstatus} />

        <label htmlFor="">Children:</label>
        <input type="text" name="" id="" onChange={(e)=>setChildren(e.target.value)} value={Children} />

        <label htmlFor="">Type of Residence:</label>
        <input type="text" name="" id="" onChange={(e)=>setResidence(e.target.value)} value={residence} />
        <hr />
        <h3>Education and Employment</h3>
        <label htmlFor="">Level of Education:</label>
        <input type="text" name="" id=""  onChange={(e)=>setEducation(e.target.value)} value={education}/>

        <label htmlFor="">Employment Status:</label>
        <input type="text" name="" id="" onChange={(e)=>setEmploymentStatus(e.target.value)} value={employmentstatus} />

        <label htmlFor="">Sector of Employment:</label>
        <input type="text" name="" id="" onChange={(e)=>setSectorofEmployment(e.target.value)} value={sectorofemployment} />

        <label htmlFor="">Duration:</label>
        <input type="text" name="" id="" onChange={(e)=>setDuration(e.target.value)} value={duration} />

        <label htmlFor="">Office Email:</label>
        <input type="text" name="" id="" onChange={(e)=>setOfficeEmail(e.target.value)} value={officeemail} />

        <label htmlFor="">Monthly Income:</label>
        <input type="text" name="" id="" onChange={(e)=>setMonthlyIncome(e.target.value)} value={monthlyincome} />

        <label htmlFor="">Loan Repayment:</label>
        <input type="text" name="" id="" onChange={(e)=>setLoanRepayment(e.target.value)} value={loanrepayment} />
        <hr />
        <h3>Socials</h3>
        <label htmlFor="">Twitter:</label>
        <input type="text" name="" id="" onChange={(e)=>setTwitter(e.target.value)} value={twitter}  />

        <label htmlFor="">Facebook:</label>
        <input type="text" name="" id="" onChange={(e)=>setFacebook(e.target.value)} value={facebook} />

        <label htmlFor="">Instagram:</label>
        <input type="text" name="" id="" onChange={(e)=>setInstagaram(e.target.value)} value={instagram} />

        <label htmlFor="">Linkedin:</label>
        <input type="text" name="" id="" onChange={(e)=>setLinkedIn(e.target.value)} value={linkedin} />

        <hr />
        <h3>Guarantor</h3>

        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} value={name}  />

        <label htmlFor="">Number:</label>
        <input type="text" name="" id="" onChange={(e)=>setNumber(e.target.value)} value={number} />

        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} value={email} />

        <label htmlFor="">Relationship:</label>
        <input type="text" name="" id=""  onChange={(e)=>setRelationship(e.target.value)} value={relationship} />

        <button className='btn'>Add</button>
      </form>
      <div className='viewcontainer'>
        {books.length>0&&<>
          <div className='table'>
            <table>
              <thead >
                <tr className='tablerow'>
                  <th>FName</th>
                  <th>PNumber</th>
                  <th>EAddress</th>
                  <th>Bvn</th>
                  <th>Gender</th>
                  <th>MStatus</th>
                  <th>Children</th>
                  <th>TResidence</th>
                  <th>LEducation</th>
                   <th>EStatus</th>
                   <th>SEmployment</th>
                   <th>Duration</th>
                   <th>OfficeEmail</th>
                   <th>MIncome</th>
                   <th>LRepayment</th>
                  <th>Twitter</th>
                   <th>Facebook</th>
                   <th>Instagram</th>
                   <th>Linkedin</th>
                   <th>GName</th>
                   <th>GNumber</th>
                   <th>GEmail</th>
                   <th>GRelationship</th>
                   <th>Delete</th>
                  
                  </tr>
                  </thead>
                  
              <tbody className='body'>
               <View books={books} deleteBook={deleteBook}/>
              </tbody>
            </table>
          </div>
          <button className='removebutton' onClick={()=>setbooks([])}>Remove All</button>
        </>}
        {books.length < 1 && <div>No record added yet</div>}
      </div>
     </div>

      
</div>
    
    
  )
}
