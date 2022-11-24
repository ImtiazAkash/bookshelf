import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { FaFacebook, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function OffCanvas() {
  const { currentUser, logout } = useAuth();

  const [data, setData] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "userData/users/" + currentUser.uid);
    onValue(userRef, (snapshot) => {
      const getdata = snapshot.val();
      setData(getdata) 
    });
  },[currentUser.uid]);

  return (
    <>
      {["false"].map((expand) => (
        <div key={expand} expand={expand}>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {data.user_name}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <Container>
                  <Row className="justify-content-center align-items-center">
                    <Col md="12" xl="12">
                      {currentUser ? (
                        <Card style={{ borderRadius: "15px" }}>
                          <Card.Body className="text-center">
                            <div className="mt-3 mb-4">
                              <Card.Img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                className="rounded-circle"
                                fluid
                                style={{ width: "100px" }}
                              ></Card.Img>
                            </div>
                            <h4>{data.full_name}</h4>
                            <Card.Text className="text-muted mb-4">
                              Programmer | <Link>hero.com</Link>
                            </Card.Text>
                            <div className="mb-4 pb-2">
                              <Button outline floating>
                                <FaFacebook />
                              </Button>
                              <Button outline floating className="mx-1">
                                <FaTwitter />
                              </Button>
                              <Button outline floating>
                                <FaSkype />
                              </Button>
                            </div>
                            <div className="d-flex justify-content-between text-center mt-5 mb-2">
                              <Link to="/fileupload">
                                <Button rounded size="sm">
                                  Upload
                                </Button>
                              </Link>
                              <Button rounded size="sm">
                                See your uploads
                              </Button>
                            </div>
                            <div className="d-flex justify-content-between text-center mt-5 mb-2">
                              <div>
                                <Card.Text className="mb-1 h5">8471</Card.Text>
                                <Card.Text className="small text-muted mb-0">
                                  Total Upload
                                </Card.Text>
                              </div>
                              <div className="px-3">
                                <Card.Text className="mb-1 h5">8512</Card.Text>
                                <Card.Text className="small text-muted mb-0">
                                  Total Download
                                </Card.Text>
                              </div>
                            </div>
                            <Button variant="danger" onClick={logout}>
                              logout
                            </Button>
                          </Card.Body>
                        </Card>
                      ) : (
                        <div>
                          <Link to="/signup">Signup </Link>
                          or
                          <Link to="/login"> Login</Link>
                        </div>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      ))}
    </>
  );
}

export default OffCanvas;