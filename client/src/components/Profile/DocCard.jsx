import React, {useState} from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import docImg from './../../assets/images/doc.jpg'

const DocCard = ({doc, changeDocStatusById}) => {


    const isUrgent = ()=>{
        return  ((new Date(doc.deadline).setDate(new Date(doc.deadline).getDate()-5) < new Date()  )
         &&
         (new Date(doc.deadline) > new Date()  )
            && !doc.status)
    }

    const isOverdue = ()=>{
            return (!doc.status
             &&
             (new Date(doc.deadline) < new Date()  ) )
    }

    const getCardColor=()=>{
    if(isOverdue())
        return "rgba(186, 2, 61, 0.87)"
    else if(isUrgent())
        return "rgba(245, 74, 85, 0.47)"
    else if(!doc.status)
        return "rgba(250, 238, 20, 0.47)"
    else return 'rgba(42, 209, 42, 0.47)'
    }

    const [checked, setChecked] = useState(false)

    const handleChangeSwitch = () => {

        if(!checked){
            changeDocStatusById(doc.id)
            setChecked(true)

        }

      }

    return (
        <>
            <MDBCol lg="3"  className="mb-3  "
            >
                    <MDBCard className="d-flex mb-3" style={{
               background: `linear-gradient(to right, rgba(52,58,96,0.9),  ${getCardColor() }  )` }} >
                        <MDBView className="text-center">
                        <img src={docImg} alt="Project"  style={{display: 'block', margin: 'auto',  objectFit: 'cover'}} className="img-fluid "/>
                        <MDBMask overlay="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="text-white">
                        <MDBCardTitle className="font-bold mb-3 text-center">
                            <strong>{doc.name}</strong>

                        </MDBCardTitle>
                        <MDBCardText className="text-white">
                            <div className="font-bold mb-3 text-center" >
                        <strong className="mb-2 font-bold mb-3 text-center text-white"> {doc.status ?
                                     "Подписан"  :  isOverdue() ?
                                     "Просрочен": isUrgent() ? "К рассмотрению срочно" : "К рассмотрению"}</strong>
                                     </div>
                        <br />
                        <div className='custom-control custom-switch text-center'>
                            {

                                doc.status ?
                                <>
                                <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitches'

                                disabled defaultChecked
                                />
                                <label className='custom-control-label' htmlFor={ `customSwitches${doc.id}` } >
                                Подписано
                                </label>
                                </>
                                :
                                <>
                                <input
                                type='checkbox'
                                className='custom-control-input'
                               checked={checked}
                               onChange={handleChangeSwitch}
                                id={ `customSwitches${doc.id}` }
                                />
                                <label className='custom-control-label' htmlFor={ `customSwitches${doc.id}` } >
                                Подписать
                                </label>
                                </>

                            }



                        </div>
                        <br />
                                 <strong className="mb-2">Создан: {doc.created_at}</strong>
                                <br />
                                <strong className="mb-2">Срок рассмотрения:  {doc.deadline}</strong>
                                <br />
                                <strong className="mb-2">Отдел:  {doc.departament}</strong>
                                <br />
                                <strong className="mb-2">Тип договора:  {doc.type}</strong>
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="links-light profile-card-footer text-center">
                        <span className="right" style={{color: "#08290F"}}>
                            <a className="p-2 linkDownload" href={
                            `http://localhost:3000${doc.file}`}>
                            Загрузить договор
                            <MDBIcon icon="file-alt" className="ml-1"/>
                            </a>
                        </span>
                        </MDBCardFooter>
                    </MDBCard>
            </MDBCol>
        </>
    )
}

export default DocCard

