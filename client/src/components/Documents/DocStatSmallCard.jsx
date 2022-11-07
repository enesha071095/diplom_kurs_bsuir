import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';
import useDocuments from '../../hooks/useDocuments';

const DocStatSmallCard = ({docs, initDocsCount}) => {

    const fileAttachedPercentage = ()=>{

    }

  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="file-alt" className="primary-color"/>
                <div className="data">
                  <p className=" ">ВСЕГО ДОКУМЕНТОВ</p>
                  <h4>
                    <strong>{initDocsCount}</strong>
                  </h4>
                </div>
              </div>

            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="search" className="light-blue lighten-1 "/>
                <div className="data">
                  <p className=" ">НАЙДЕНО ДОКУМЕНТОВ</p>
                  <h4>
                    <strong>{docs.length}</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0"  className="progress-bar bg grey darken-2" role="progressbar"
                    style={{width:  `${docs.length/initDocsCount*100}%` }}></div>
                </div>
                <MDBCardText>От всех документов ({ (docs.length/initDocsCount*100).toFixed(0)}%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="cloud-download-alt" className="warning-color"/>
                <div className="data">
                  <p className="">BYN ДОГОВОРЫ</p>
                  <h4>
                    <strong>{docs.filter((d)=>d.currency==="BYN").length}</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey " role="progressbar"
                    style={{width:  `${docs.filter((d)=>d.currency==="BYN").length/docs.length*100}%` }}  ></div>
                </div>
                <MDBCardText>Договоров по BYN ({ (docs.filter((d)=>d.currency==="BYN").length/docs.length*100).toFixed(0)}%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="check" className="red accent-2"/>
                <div className="data">
                  <p className=" ">ПОДПИСАНЫ</p>
                  <h4>
                    <strong>{docs.filter((d)=>d.status).length}</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                  className="progress-bar bg-primary" role="progressbar"
                  style={{width:  `${docs.filter((d)=>d.status).length/docs.length*100}%` }}  ></div>
                </div>
                <MDBCardText>Документов подписано ({ (docs.filter((d)=>d.status).length/docs.length*100).toFixed(0)}%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default DocStatSmallCard;

