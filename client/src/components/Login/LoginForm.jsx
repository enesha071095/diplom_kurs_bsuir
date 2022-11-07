import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavItem,MDBNavLink,MDBNavbarToggler,
  MDBCollapse,MDBMask,MDBRow,MDBCol,MDBIcon,MDBBtn,MDBView,MDBContainer,MDBCard,
  MDBCardBody,MDBInput,MDBFormInline,MDBAnimation
} from "mdbreact";
import "./login.css";

class LoginForm extends React.Component {
  state = {
    iconClasses: ['text-center']
  };

    componentDidUpdate() {

      if(this.props.isFailImgMustShake && this.state.iconClasses.length == 1)
      {

        this.setState({ iconClasses: ["active-icon", 'text-center'] });
        setTimeout(() => {this.setState({ iconClasses: ['text-center'] })}, 1000);
        this.props.setIsFailImgMustShake(false)
      }
    }

  render() {


    return (
      <div >

          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">DOCOMMERCE</strong>
                </MDBNavbarBrand>


              </MDBContainer>
            </MDBNavbar>
          </div>


              <MDBRow>

                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                  DOCOMMERCE
                  </h1>

                  <hr className="hr-light" />
                  <h6 className="mb-4">
                        Повышение качества и эффективности договорного процесса работы торговых агентов
                        с торговыми партнерами за счет разработки более эффективной
                    и рациональной автоматизированной системы договорной деятельности и контроля
                    дисциплины и статистики электронного подписания договоров.
                  </h6>
                  <Link  to="/about">
                  <MDBBtn outline color="white"  >
                       Узнать больше
                    </MDBBtn></Link>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                      <form onSubmit={this.props.handleSubmit}>
                        <h3  className={this.state.iconClasses.join(' ')}>
                          <MDBIcon  icon="user" /> Вход:
                        </h3>
                        <hr className="hr-light" />

                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Ваш email"
                          icon="envelope"
                          value={this.props.email}
                          onChange={(e) => this.props.setEmail(e.target.value)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Ваш пароль"
                          icon="lock"
                          type="password"
                          value={this.props.password}
                          onChange={(e) => this.props.setPassword(e.target.value)}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="warning" type="submit">Войти</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="vk"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
      </div>
    );
  }
}

export default LoginForm;
