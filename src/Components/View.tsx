import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./View.scss"

export interface IAppProps {
}

export const View = ({books, deleteBook}) => {
  return books.map(book=>(
    <tr key={book.fullname}>
        <td className='fullname'>{book.fullname}</td>
        <td className='phonenumber'>{book.phonenumber}</td>
        <td className='address'>{book.address}</td>
        <td className='bvn'>{book.bvn}</td>
        <td className='gender'>{book.gender}</td>
        <td className='maritalstatus'>{book.maritalstatus}</td>
        <td className='children'>{book.Children}</td>
        <td className='residence'>{book.residence}</td>
        <td className='education'>{book.education}</td>
        <td className='status'>{book.employmentstatus}</td>
        <td className='employment'>{book.sectorofemployment}</td>
        <td className='duration'>{book.duration}</td>
        <td className='officeemail'>{book.officeemail}</td>
        <td className='monthlyincome'>{book.monthlyincome}</td>
        <td className='loanrepayment'>{book.loanrepayment}</td>
        <td className='twitter'>{book.twitter}</td>
        <td className='facebook'>{book.facebook}</td>
        <td className='instagram'>{book.instagram}</td>
        <td className='linkedin'>{book.linkedin}</td>
        <td className='name'>{book.name}</td>
        <td className='number'>{book.number}</td>
        <td className='address'>{book.address}</td>
        <td className='email'>{book.email}</td>
        <td className='relationship'>{book.relationship}</td>
        <td className='delete' onClick={()=>deleteBook(book.fullname)}><FontAwesomeIcon icon={faTrash} /></td>


        
    </tr>
  ))
   
  
}
