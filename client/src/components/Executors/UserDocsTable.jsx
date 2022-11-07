import React, {useContext} from 'react';
import { MDBCard,MDBIcon, MDBCardBody,MDBView, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import { AuthContext } from '../../context';

const UserDocsTable = ({docs}) => {

  const {isAdmin} = useContext(AuthContext)

  return (
    <MDBRow className="mb-4">
          <MDBCol md="12">
              <MDBCard>
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">Договоры</h4>
            </MDBView>
                  <MDBCardBody>
                    <MDBTable hover >
                      <MDBTableHead color="blue-grey lighten-4 " >
                        <tr>
                          <th>№</th>
                          <th >Название</th>
                          <th>Создан</th>
                          <th>Статус</th>
                          <th>Отдел</th>
                          {
                            isAdmin ?
                          <th>Загрузить</th>
                          :
                          <></>
                          }

                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>

                          {
                            docs.map((doc, idx)=>
                                <>
                                <tr>
                                    <td>{idx+1}</td>
                                    <td>{`"${doc.name}"`}</td>
                                    <td>{doc.created_at}</td>
                                    <td>{doc.status ? "Подписан" : "На рассмотрении"}</td>
                                    <td>{doc.departament}</td>
                                    {
                            isAdmin ?
                            <td>
                            <a className="p-2" href={
                                `http://localhost:3000${doc.file}`}>
                                <MDBIcon icon="download" className="ml-1" style={{color: "green"}} />
                            </a></td>
                          :
                          <></>
                          }

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

export default UserDocsTable;

