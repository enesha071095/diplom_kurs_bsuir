import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const GeneralDocsStatSection = ({docs}) => {

    const getUrgentCount = ()=>{
        return  (docs.filter((obj) => 
        !obj.status  
         && 
         (new Date(obj.deadline).setDate(new Date(obj.deadline).getDate()-5) < new Date()  )
         &&
         (new Date(obj.deadline) > new Date()  )
    )).length
    }

    const overdueCount = ()=>{
            return (docs.filter((obj) => 
            !obj.status  
             && 
             (new Date(obj.deadline) < new Date()  )
        )).length
    }

    const getCompletedCount = ()=>{
        return docs.filter((e)=>e.status).length
    }

    const getIncompletedCound = ()=>{
        return docs.filter((e)=>!e.status).length
    }


  return (
    <MDBRow className="mb-4">

        <MDBCol lg="3" className="mb-3 mr-5">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="file-alt"/>
              </div>
              <p className="white-text">ВСЕГО ДОКУМЕНТОВ</p>
              <h4><strong>{docs.length}</strong></h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="2" className="mb-3">
          <MDBCard color="success-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="sign-language"/>
              </div>
              <p className="white-text">ПОДПИСАННЫХ</p>
              <h4><strong>{getCompletedCount()}</strong></h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="2" className="mb-3">
          <MDBCard color="warning-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="sign-language"/>
              </div>
              <p className="white-text">НЕПОДПИСАННЫХ</p>
              <h4><strong>{getIncompletedCound() }</strong></h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="2" className="mb-3">
          <MDBCard color="red accent-1" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="tools"/>
              </div>
              <p className="white-text">СРОЧНЫХ</p>
              <h4><strong>{getUrgentCount() }</strong></h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="2" className="mb-3">
          <MDBCard color="red accent-4" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="tools"/>
              </div>
              <p className="white-text">ПРОСРОЧЕННЫХ</p>
              <h4><strong>{overdueCount()}</strong></h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
  )
}

export default GeneralDocsStatSection;

