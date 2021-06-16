import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { string, bool, func } from "prop-types";

import { Formik } from "formik";
import { validationSchema, initialValues } from "../../../utils/validation";

import { selectGenreState } from "../../../redux/genre/genre-selectors";
import { fetchGenres } from "../../../redux/genre/genre-actions";

import * as Layout from "../../Layout";
import Button from "../../Button";
import {
  FormInput,
  FormTextArea,
  FormSelect,
  FormDropzone,
  fileTypes,
} from "../../Form";

function TrackForm({ handleSubmit, isEditing, formError }) {
  const dispatch = useDispatch();
  const [genresAvailable, setGenresAvailable] = useState(false);

  const {
    genresLoading,
    genresLoadingError,
    genresFetched,
    byID,
    ids,
  } = useSelector(selectGenreState);

  useEffect(() => {
    if (ids.length === 0) {
      dispatch(fetchGenres());
    } else {
      setGenresAvailable(true);
    }
  }, [dispatch, ids]);

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  let genres = [];
  if (genresAvailable) {
    genres = ids.map((id) => {
      return {
        id: id,
        option: byID[id].name,
      };
    });
  }

  return (
    <Formik
      initialValues={initialValues.trackForm}
      validationSchema={validationSchema.trackForm}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Layout.Container>
          <form onSubmit={formikProps.handleSubmit}>
            <Layout.Column>
              <Layout.Flex width="full">
                <Layout.Row justify="start" align="start">
                  <Layout.Column fullWidth classes={[""]}>
                    <FormInput
                      darkMode
                      type="text"
                      id="track-title"
                      name="title"
                      title="Title"
                      placeholder="Enter title"
                      value={formikProps.values.title}
                      textError={formikProps.errors.title}
                      onChange={formikProps.handleChange}
                    />
                    <FormSelect
                      darkMode
                      id="track-genre"
                      name="genre"
                      labelTitle="Genre"
                      placeholder="Choose a genre"
                      disabled={!genresAvailable}
                      options={genres}
                      value={formikProps.values.genre}
                      textError={formikProps.errors.genre}
                      handleChange={formikProps.handleChange}
                      handleBlur={formikProps.handleBlur}
                    />
                    <FormInput
                      darkMode
                      type="text"
                      id="track-thumbnail"
                      name="thumbnailUrl"
                      title="Thumbnail URL"
                      placeholder="Enter url"
                      value={formikProps.values.thumbnailUrl}
                      textError={formikProps.errors.thumbnailUrl}
                      onChange={formikProps.handleChange}
                    />
                    <FormDropzone
                      darkMode
                      labelTitle="Track File"
                      hintText="Select an audio file"
                      fileType={fileTypes.AUDIO}
                      file={formikProps.values.trackFile}
                      error={formikProps.errors.trackFile}
                      classes={["mt-1 p-4"]}
                      setFieldValue={formikProps.setFieldValue}
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

TrackForm.propTypes = {
  handleSubmit: func,
  isEditing: bool,
  formError: string,
};

TrackForm.defaultProps = {
  handleSubmit: () => {},
  isEditing: false,
  formError: null,
};

export default TrackForm;
