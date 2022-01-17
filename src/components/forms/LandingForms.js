import React, { Fragment, useState } from "react";
import { Col, Container, Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import Dropdown from "react-dropdown";

// component
import TextInput from "../text-input";
import TextArea from "../textarea";
import MyCheckbox from "../checkbox";
import ButtonCustomize from "../button";
import FormSectionEmails from "../form-section-email";
import CheckMark from "../check-mark";
import options from "../../data/role.json";

// api
import userAPI from "../../services/UserAPI";

// helper
import { ValidationGoogelSheerSchema } from "../../utilities/validationSchemaSheet";
import { isEmpty } from "lodash";

import "./styles.scss";

function SignUpModal(props) {
  const { size } = props;
  return (
    <Modal
      {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.content}</Modal.Body>
    </Modal>
  );
}

const LandingForms = () => {
  const [modalArtistShow, setArtistModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleHideModal = () => {
    setArtistModalShow(false);
    setSuccess(false);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { addRoles } = values;
      const newAddRoles = [...addRoles];
      for (let i = 0; i < newAddRoles.length; i++) {
        newAddRoles[i].addRole = newAddRoles[i].addRoleName;
      }
      const newForm = {
        ...values,
        addRoles: newAddRoles,
      };
      const res = await userAPI.submitGoogleSheet(newForm);
      if (!isEmpty(res)) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }
  };
  return (
    <div className="frisson-brand-area bg-shape ptb--85 ptb-md--80 ptb-sm--60">
      <Container fluid>
        <Col
          className="mt_sm--30 mt_md--30"
          style={{ margin: "auto" }}
          xs={12}
          md={12}
          lg={6}
        >
          <div className="contact-form bg_color--1 contact-form--2 move-left wow">
            <h4 className="heading heading-h4">If You're An Artist</h4>
            <div className="fr-separator--15" />
            <p>
              Perform on your own virtual stage in{" "}
              <span style={{ color: "#DF0346" }}>August 2021</span>
            </p>
            <Button
              variant="primary"
              className="frisson-btn artist_button"
              onClick={() => setArtistModalShow(true)}
            >
              Sign Up Now
            </Button>

            <SignUpModal
              show={modalArtistShow}
              onHide={() => handleHideModal()}
              size={success ? "xs" : "lg"}
              title={
                !success ? (
                  <h4 className="heading heading-h4 text-center theme-color">
                    Frisson Producer Sign Up Form
                  </h4>
                ) : null
              }
              content={
                success ? (
                  <CheckMark />
                ) : (
                  <Fragment>
                    <div className="contact-form bg_color--1 ">
                      <Formik
                        validationSchema={ValidationGoogelSheerSchema}
                        onSubmit={handleSubmit}
                        initialValues={{
                          name: "",
                          role: "artist",
                          email: "",
                          addRoles: [],
                          submissionDatetime: new Date().getTime(),
                        }}
                      >
                        {({
                          handleSubmit,
                          values,
                          setFieldValue,
                          isValid,
                          dirty,
                        }) => (
                          <Form noValidate onSubmit={handleSubmit}>
                            <Col xs={12} className="text-left">
                              <TextInput
                                name="name"
                                type="text"
                                placeholder="Name of the artist you represent*"
                              />
                            </Col>
                            <Col xs={12} className="mt--15 text-left">
                              <TextInput
                                name="musicLink"
                                type="text"
                                placeholder="Artist music profile link (Spotify, etc.)"
                              />
                            </Col>
                            <Col xs={12} className="mt--15 text-left">
                              <TextInput
                                name="email"
                                type="text"
                                placeholder={"Your email*"}
                              />
                            </Col>
                            <Col xs={12} className="mt--15 text-left">
                              <p className="text-left">Your Role:</p>
                              <Dropdown
                                name="role"
                                controlClassName="customize-control"
                                placeholderClassName="customize-placeholder"
                                placeholder="Select role*"
                                onChange={(opt, e) => {
                                  setFieldValue("role", opt.value);
                                }}
                                value={options[0]}
                                options={options}
                              />
                            </Col>
                            <Col xs={12} className="mt--15 text-left">
                              <TextArea
                                name="representing"
                                rows="6"
                                placeholder={
                                  "Comments on how you found Frisson or how you plan to use our platform"
                                }
                              />
                            </Col>
                            <Col className="mt--15 text-left">
                              <FormSectionEmails addRoles={values.addRoles} />
                            </Col>
                            <Col xs={12} className="mt--15 text-left">
                              <MyCheckbox name="teamIsFrisson">
                                <span style={{ wordBreak: "break-all" }}>
                                  By signing up, you and the company or parties
                                  you represent agree to our <br></br>
                                  <div style={{ textAlign: "center" }}>
                                    <a
                                      href=" https://www.frisson.live/privacypolicy.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "#007bff",
                                        marginLeft: 5,
                                      }}
                                    >
                                      Privacy Policy
                                    </a>{" "}
                                    and
                                    <a
                                      href="https://www.frisson.live/termsandconditions.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "#007bff",
                                        marginLeft: 5,
                                      }}
                                    >
                                      Terms & Conditions
                                    </a>
                                  </div>
                                </span>
                              </MyCheckbox>
                            </Col>
                            <Col xs={12} className="text-center">
                              <ButtonCustomize
                                disabled={!(isValid && dirty) || loading}
                                btnText={"Sign Up Now"}
                                btnLink={"/"}
                                size={"lg"}
                                type="submit"
                                color={"theme"}
                                loading={loading}
                                btnStyle={"rounded"}
                              />
                            </Col>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </Fragment>
                )
              }
            />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default LandingForms;
