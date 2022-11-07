import React from 'react';
import {MDBJumbotron, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBAnimation
  } from "mdbreact";
import {BrowserRouter as Router,Link} from 'react-router-dom'


class AboutPage extends React.Component {

    render() {
        return (
            <div className="white-text" >
                     <MDBAnimation
                  type="fadeInLeft"
                  delay=".1s"
                  className="white-text text-center text-md-left col-md-12 mt-xl-5 mb-5"
                >
                            <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                <MDBJumbotron style={{opacity: "0.5", backgroundColor: "black"}} >
                    <h2 className="h1 display-3">CONTSIGN</h2>
                    <p className="lead">
                    Веб-сайт "Contsign" предоставляет систему автоматизации договорной деятельности торгового предприятия.
                    На сайте возможна работа в двух ролях - торгового партера и торгового агента. Торговый партнер регистрируется агентом через
                    встроенную систему администрирования и имееет возможность мониторинга своих договоров и корпоративных клиентов торговой организации, 
                    а также наименований договоров в корпорации. Также возможность электронного подписания и загрузки договоров. Торговый агент 
                    реализует администрирование системы, работу со статистикой и договорной деятельностью с клиентами-партерами. 
                    Мы желаем Вам успешной работы!
                    </p>
                    <hr className="my-2" />
                    <p>
                    Использование системы "Contsign" возможно только для авторизованных пользователей.
                    Для продолжения войдите в систему
                    </p>
                    <p className="lead">
                   
                    </p>
                </MDBJumbotron>
               
                 
                    <Link  to="/sign_in"> <MDBBtn outline color="white" >
                        Войти
                    </MDBBtn></Link>
                    
                    
                
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            </MDBAnimation>
            </div>
        )
    }

}

export default AboutPage;