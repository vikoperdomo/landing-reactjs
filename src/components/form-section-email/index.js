import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { FieldArray } from "formik";
import TextInput from "../text-input";
import Dropdown from "react-dropdown";
import options from "../../data/role.json";
import "react-dropdown/style.css";
import "./styles.scss";

function FormSectionEmails({ addRoles }) {
  return (
    <FieldArray
      name="addRoles"
      render={(arrayHelpers) => (
        <>
          {addRoles && addRoles.length > 0 ? (
            addRoles.map((email, index) => (
              <Card className="mb--15" key={index}>
                <Card.Header>
                  <Card.Title>Email & role {index + 1}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form.Row className="wrap-form-row">
                    <Col md={8} lg={8} xs={12}>
                      <TextInput
                        name={`addRoles.${index}.addRoleEmail`}
                        type="text"
                        className="modify-input"
                        placeholder={"Email*"}
                      />
                    </Col>
                    <Col md={4} lg={4} xs={12}>
                      <Dropdown
                        controlClassName="customize-control"
                        placeholderClassName="customize-placeholder"
                        placeholder="Select role*"
                        value={options[0]}
                        onChange={(opt, e) => {
                          email["addRoleName"] = opt.value;
                          email["addRole"] = opt.value;
                        }}
                        options={options}
                      />
                    </Col>
                  </Form.Row>
                </Card.Body>
                <Card.Footer>
                  <Button
                    type="button"
                    variant="outline-danger"
                    style={{ marginRight: 5 }}
                    size="lg"
                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                  >
                    -
                  </Button>
                  <Button
                    type="button"
                    variant="outline-success"
                    size="lg"
                    onClick={() =>
                      arrayHelpers.push({
                        addRoleEmail: "",
                        addRole: "artist",
                        addRoleName: "artist",
                      })
                    }
                  >
                    +
                  </Button>
                </Card.Footer>
              </Card>
            ))
          ) : (
            <Button
              type="button"
              style={{ fontFamily: 'font-family: "Poppins", sans-serif' }}
              onClick={() =>
                arrayHelpers.push({
                  addRoleEmail: "",
                  addRole: "artist",
                  addRoleName: "artist",
                })
              }
            >
              {"Add another colleague"}
            </Button>
          )}
        </>
      )}
    />
  );
}

export default FormSectionEmails;
