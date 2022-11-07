import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';

const SimpleBreadcrumSection = ({pageName, isAdmin, form, sortForm}) => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb className="brdBody">
                <MDBBreadcrumbItem className="brdText">{localStorage.getItem('is_admin')==='true' ? `Торговый агент` : `Торговый партнер`}</MDBBreadcrumbItem>
                <MDBBreadcrumbItem className="brdText" active>{pageName}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0" >
            {
                sortForm ?
                sortForm : null
            }
            {
                form ?
                form : null
            }
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
  )
}

export default SimpleBreadcrumSection;

