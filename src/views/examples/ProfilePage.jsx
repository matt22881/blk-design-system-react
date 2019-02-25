import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ProfilePage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("profile-page");
  }
  render() {
    return (
      <>
        {/* Navbar */}
        <Navbar
          className=" fixed-top navbar-transparent"
          color-on-scroll="100"
          expand="lg"
        >
          <Container>
            <div className=" navbar-translate">
              <NavbarBrand
                data-placement="bottom"
                href="https://demos.creative-tim.com/blk-design-system/index.html"
                rel="noopener noreferrer"
                target="_blank"
                title="Designed and Coded by Creative Tim"
              >
                <span>BLK•</span>
                Design System
              </NavbarBrand>
              <button
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className=" navbar-toggler navbar-toggler"
                data-target="#navigation"
                data-toggle="collapse"
                id="navigation"
                type="button"
              >
                <span className=" navbar-toggler-bar bar1" />
                <span className=" navbar-toggler-bar bar2" />
                <span className=" navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse
              className=" justify-content-end"
              id="navigation"
              navbar
              toggler="#navigation"
            >
              <div className=" navbar-collapse-header">
                <Row>
                  <Col className=" collapse-brand" xs="6">
                    <a>BLK•</a>
                  </Col>
                  <Col className=" collapse-close text-right" xs="6">
                    <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler"
                      data-target="#navigation"
                      data-toggle="collapse"
                      id="navigation"
                      type="button"
                    >
                      <i className=" tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://twitter.com/CreativeTim"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Follow us on Twitter"
                  >
                    <i className=" fab fa-twitter" />
                    <p className=" d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                </NavItem>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://www.facebook.com/CreativeTim"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Like us on Facebook"
                  >
                    <i className=" fab fa-facebook-square" />
                    <p className=" d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                </NavItem>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Follow us on Instagram"
                  >
                    <i className=" fab fa-instagram" />
                    <p className=" d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="../index.html">Back to Kit</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/blk-design-system/issues">
                    Have an issue?
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        {/* End Navbar */}
        <div className=" wrapper">
          <div className=" page-header">
            <img
              alt="..."
              className=" dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className=" path"
              src={require("assets/img/path4.png")}
            />
            <Container className=" align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className=" profile-title text-left">Mike Scheinder</h1>
                  <h5 className=" text-on-back">01</h5>
                  <p className=" profile-description">
                    Offices parties lasting outward nothing age few resolve.
                    Impression to discretion understood to we interested he
                    excellence. Him remarkably use projection collecting. Going
                    about eat forty world has round miles.
                  </p>
                  <div className=" btn-wrapper profile pt-3">
                    <Button
                      className=" btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className=" fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className=" fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-round"
                      color="dribbble"
                      href="https://dribbble.com/creativetim"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className=" fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className=" ml-auto mr-auto" lg="4" md="6">
                  <Card className=" card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className=" img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className=" title">Transactions</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className=" nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className=" active"
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Wallet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Send
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            News
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent className=" tab-subcategories">
                        <TabPane className=" active" id="linka">
                          <Table className=" tablesorter" responsive>
                            <thead className=" text-primary">
                              <tr>
                                <th className=" header">COIN</th>
                                <th className=" header">AMOUNT</th>
                                <th className=" header">VALUE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>BTC</td>
                                <td>7.342</td>
                                <td>48,870.75 USD</td>
                              </tr>
                              <tr>
                                <td>ETH</td>
                                <td>30.737</td>
                                <td>64,53.30 USD</td>
                              </tr>
                              <tr>
                                <td>XRP</td>
                                <td>19.242</td>
                                <td>18,354.96 USD</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane id="linkb">
                          <Row>
                            <Label sm="3">Pay to</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input
                                  placeholder="e.g. 1Nasd92348hU984353hfid"
                                  type="text"
                                />
                                <FormText color="default" tag="span">
                                  Please enter a valid address.
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">Amount</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="1.587" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            className=" btn-simple btn-icon btn-round float-right"
                            color="primary"
                            type="submit"
                          >
                            <i className=" tim-icons icon-send" />
                          </Button>
                        </TabPane>
                        <TabPane id="linkc">
                          <Table className=" tablesorter" responsive>
                            <thead className=" text-primary">
                              <tr>
                                <th className=" header">Latest Crypto News</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Nexo to Pay on Stable...</td>
                              </tr>
                              <tr>
                                <td>Venezuela Begins Public of Nation...</td>
                              </tr>
                              <tr>
                                <td>PR: BitCanna – Dutch Blockchain...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className=" section">
            <Container>
              <Row className=" justify-content-between">
                <Col md="6">
                  <Row className=" justify-content-between align-items-center">
                    <div
                      className=" carousel slide"
                      data-ride="carousel"
                      id="carouselExampleIndicators"
                    >
                      <ol className=" carousel-indicators">
                        <li
                          className=" active"
                          data-slide-to="0"
                          data-target="#carouselExampleIndicators"
                        />
                        <li
                          data-slide-to="1"
                          data-target="#carouselExampleIndicators"
                        />
                        <li
                          data-slide-to="2"
                          data-target="#carouselExampleIndicators"
                        />
                      </ol>
                      <div className=" carousel-inner" role="listbox">
                        <div className=" carousel-item active">
                          <img
                            alt="..."
                            className=" d-block"
                            src={require("assets/img/denys.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <h5>Big City Life, United States</h5>
                          </div>
                        </div>
                        <div className=" carousel-item">
                          <img
                            alt="..."
                            className=" d-block"
                            src={require("assets/img/fabien-bazanegue.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <h5>Somewhere Beyond, United States</h5>
                          </div>
                        </div>
                        <div className=" carousel-item">
                          <img
                            alt="..."
                            className=" d-block"
                            src={require("assets/img/mark-finn.jpg")}
                          />
                          <div className=" carousel-caption d-none d-md-block">
                            <h5>Stocks, United States</h5>
                          </div>
                        </div>
                      </div>
                      <a
                        className=" carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <i className=" tim-icons icon-minimal-left" />
                      </a>
                      <a
                        className=" carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        <i className=" tim-icons icon-minimal-right" />
                      </a>
                    </div>
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className=" profile-title text-left">Projects</h1>
                  <h5 className=" text-on-back">02</h5>
                  <p className=" profile-description text-left">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className=" btn-wrapper pt-3">
                    <Button
                      className=" btn-simple"
                      color="primary"
                      href="javascript:void(0)"
                    >
                      <i className=" tim-icons icon-book-bookmark" />
                      Bookmark
                    </Button>
                    <Button
                      className=" btn-simple"
                      color="info"
                      href="javascript:void(0)"
                    >
                      <i className=" tim-icons icon-bulb-63" />
                      Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className=" section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className=" card-plain">
                    <CardHeader>
                      <h1 className=" profile-title text-left">Contact</h1>
                      <h5 className=" text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Mike" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue="CreativeTim" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className=" btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="submit"
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className=" ml-auto" md="4">
                  <div className=" info info-horizontal">
                    <div className=" icon icon-primary">
                      <i className=" tim-icons icon-square-pin" />
                    </div>
                    <div className=" description">
                      <h4 className=" info-title">Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className=" info info-horizontal">
                    <div className=" icon icon-primary">
                      <i className=" tim-icons icon-mobile" />
                    </div>
                    <div className=" description">
                      <h4 className=" info-title">Give us a ring</h4>
                      <p>
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <footer className=" footer">
            <Container>
              <Row>
                <Col md="3">
                  <h1 className=" title">BLK•</h1>
                </Col>
                <Col md="3">
                  <Nav>
                    <NavItem>
                      <NavLink href="../index.html">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/landing-page.html">
                        Landing
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/register-page.html">
                        Register
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/profile-page.html">
                        Profile
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="3">
                  <Nav>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/contact-us">
                        Contact Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/about-us">
                        About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/blog">
                        Blog
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://opensource.org/licenses/MIT">
                        License
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="3">
                  <h3 className=" title">Follow us:</h3>
                  <div className=" btn-wrapper profile">
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://twitter.com/creativetim"
                      id="tooltip413240637"
                      target="_blank"
                    >
                      <i className=" fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip413240637">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip934410994"
                      target="_blank"
                    >
                      <i className=" fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip934410994">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://dribbble.com/creativetim"
                      id="tooltip615223336"
                      target="_blank"
                    >
                      <i className=" fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip615223336">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </>
    );
  }
}

export default ProfilePage;
