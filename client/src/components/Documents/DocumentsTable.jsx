import React from 'react';
import { MDBCard, MDBCardBody,MDBView, MDBIcon,MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = ({docs}) => {
  return (
    <MDBRow className="mb-4">
          <MDBCol md="12">
              <MDBCard>
                    <MDBView className="gradient-card-header blue darken-2">
                        <h4  className="h4-responsive text-white">Все договоры</h4>
                    </MDBView>
                  <MDBCardBody>
                    <MDBTable hover striped>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>№</th>
                          <th>Название</th>
                          <th>Партнер</th>
                          <th>Создан</th>
                          <th>Срок подписания</th>
                          <th>Статус</th>
                            <th>Валюта</th>
                            <th>Сумма</th>
                          <th>Отдел</th>
                          <th>Тип продукции</th>
                          <th>Загрузить</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                      {
                            docs.map((doc, idx)=>
                                <>
                                <tr key={doc.id}>
                                    <td>{idx+1}</td>
                                    <td><b>{`"${doc.name}"`}</b></td>
                                    <td><>{doc.user_fullname}</></td>
                                    <td><>{doc.created_at}</></td>
                                    <td><>{doc.deadline}</></td>
                                    <td><>{doc.status ? <MDBIcon fas icon="user-plus" style={{ color: 'green' }} /> : <MDBIcon fas icon="user-minus" style={{ color: 'red' }} />}</></td>
                                    <td><>{doc.currency}</></td>
                                    <td><>{doc.amount}</></td>
                                    <td><>{doc.departament}</></td>
                                    <td><>{doc.type}</></td>
                                    <td>
                                        <a className="p-2" href={
                                            `http://localhost:3000${doc.file}`}>
                                            <MDBIcon icon="download" className="ml-1" style={{ color: 'green' }}/>
                                        </a></td>
                                </tr>
                                </>
                            )
                          }
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>

      </MDBRow>
  )
}

export default TableSection;

