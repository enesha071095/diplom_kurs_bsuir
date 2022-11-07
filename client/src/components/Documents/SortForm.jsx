import React from 'react';
import { MDBIcon, MDBFormInline, MDBBtn } from 'mdbreact';

const SortForm = ({sort, setSort}) => {
    
    return (
    

            <select className="browser-default custom-select mb-1 mr-5" value={sort} 
                onChange={e => setSort(e.target.value)} >
                <option disabled>Выберите сортировку</option>
                <option value="created_at">Сначала новые</option>
                <option value="deadline">Сначала срочные</option>
                <option value="completed">Сначала подписанные</option>
            </select>
   
    
  )
}

export default SortForm;

