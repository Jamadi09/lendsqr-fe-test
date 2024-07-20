import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./View.scss"

export interface IAppProps {
}

export const View = ({books, deleteBook}) => {
  return books.map(book=>(
    <tr key={book.fullname}>
        <div className='fullname'><td>{book.fullname}</td></div>
        <div className='phonenumber'><td>{book.phonenumber}</td></div>
        <div className='address'><td >{book.address}</td></div>
        <div  className='bvn'><td>{book.bvn}</td></div>
        <div  className='gender'><td>{book.gender}</td></div>
        <div className='maritalstatus'><td >{book.maritalstatus}</td></div>
        <div className='children'><td >{book.Children}</td></div>
        <div className='residence'><td >{book.residence}</td></div>
       <div className='education'> <td >{book.education}</td></div>
        <div className='status'><td >{book.employmentstatus}</td></div>
        <div  className='employment'><td>{book.sectorofemployment}</td></div>
        <div className='duration'><td >{book.duration}</td></div>
        <div className='officeemail'><td >{book.officeemail}</td></div>
       <div className='monthlyincome'> <td>{book.monthlyincome}</td></div>
        <div className='loanrepayment'><>{book.loanrepayment}</></div>
        <div  className='twitter'><td>{book.twitter}</td></div>
        <div className='facebook'><td >{book.facebook}</td></div>
        <div className='instagram'><td >{book.instagram}</td></div>
        <div className='linkedin'><td >{book.linkedin}</td></div>
         <div className='name'><td >{book.name}</td></div>
        <div  className='number'><td>{book.number}</td></div>
        <div className='address'><td >{book.address}</td></div>
        <div  className='email'><td>{book.email}</td></div>
        <div className='relationship'><td>{book.relationship}</td></div>
       <div  className='delete' > <td onClick={()=>deleteBook(book.fullname)}><FontAwesomeIcon icon={faTrash} /></td></div>


        
    </tr>
  ))
   
  
}
