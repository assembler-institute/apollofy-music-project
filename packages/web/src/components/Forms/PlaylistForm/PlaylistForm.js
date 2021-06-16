import React from "react";
import { string, bool, func } from "prop-types";

import { Formik } from "formik";
import { validationSchema, initialValues } from "../../../utils/validation";

import * as Layout from "../../Layout";
import Button from "../../Button";
import { FormInput, FormTextArea, FormDropzone, fileTypes } from "../../Form";

function PlaylistForm({ handleSubmit, isEditing, formError }) {
  const onSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    handleSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues.playlistForm}
      validationSchema={validationSchema.playlistForm}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Layout.Container>
          <form onSubmit={formikProps.handleSubmit}>
            <Layout.Column>
              <Layout.Flex width="full" height="auto">
                <Layout.Row justify="start" align="start">
                  {/* <Layout.Flex
                    justify="center"
                    align="center"
                    growValue={0}
                    shrinkValue={2}
                    noMargins
                  >
                    <Dropzone
                      fileType={fileTypes.IMAGE}
                      file={formikProps.values.filePath}
                      error={formikProps.errors.filePath}
                      classes={["p-4"]}
                      onFileSelected={formikProps.handleChange}
                    />
                  </Layout.Flex> */}
                  <Layout.Column fullWidth classes={[""]}>
                    <FormInput
                      darkMode
                      type="text"
                      id="playlist-title"
                      name="title"
                      title="Title"
                      placeholder="Enter title"
                      value={formikProps.values.title}
                      textError={formikProps.errors.title}
                      onChange={formikProps.handleChange}
                    />
                    <FormTextArea
                      darkMode
                      id="playlist-description"
                      name="description"
                      title="Description"
                      placeholder="Add an optional description"
                      classes={["mt-4"]}
                      value={formikProps.values.description}
                      textError={formikProps.errors.description}
                      onChange={formikProps.handleChange}
                    />
                    <FormInput
                      darkMode
                      type="text"
                      id="playlist-thumbnail"
                      name="thumbnail"
                      title="Thumbnail URL"
                      placeholder="Enter url"
                      value={formikProps.values.thumbnail}
                      textError={formikProps.errors.thumbnail}
                      onChange={formikProps.handleChange}
                    />
                  </Layout.Column>
                </Layout.Row>
              </Layout.Flex>
              <Layout.Container classes={["mt-2"]}>
                <Button roundedBorders type="submit">
                  {isEditing ? "SAVE" : "CREATE"}
                </Button>
              </Layout.Container>
            </Layout.Column>
          </form>
        </Layout.Container>
      )}
    </Formik>
  );
}

PlaylistForm.propTypes = {
  handleSubmit: func,
  isEditing: bool,
  formError: string,
};

PlaylistForm.defaultProps = {
  handleSubmit: () => {},
  isEditing: false,
  formError: null,
};

export default PlaylistForm;
