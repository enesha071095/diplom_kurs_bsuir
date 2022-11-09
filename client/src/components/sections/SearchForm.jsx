import React from 'react';
import { MDBIcon, MDBFormInline, MDBBtn } from 'mdbreact';

const SearchForm = ({query, setQuery}) => {



    return (
      <>
        <input className="form-control form-control-sm"  style={{color: "black"}}
        type="search" placeholder="Поиск"
        aria-label="Search"
        value={query}
        onChange={(e)=>{ setQuery(e.target.value) }}
        />
        <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
  </>
  )
}

export default SearchForm;

