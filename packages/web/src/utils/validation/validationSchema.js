import * as Yup from "yup";

export const validationSchema = {
  login: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),

  signUp: Yup.object(),

  userProfile: Yup.object(),

  playlistForm: Yup.object().shape({
    title: Yup.string().required("Playlist title is required"),
    description: Yup.string().default(""),
    isPublic: Yup.boolean().default(false),
    filePath: Yup.string().nullable(),
    thumbnail: Yup.string().default(""),
  }),
  /*     .with("description", "title")
    .with("filePath", "title"), */

  trackForm: Yup.object({
    title: Yup.string().required("Song title is required"),
    artists: Yup.array().of(Yup.string()).required("Song artists are required"),
    genre: Yup.string().required(),
    trackFile: Yup.string().required(),
    thumbnailFile: Yup.string().nullable(),
    thumbnailUrl: Yup.string().default(""),
  }),
};

export const initialValues = {
  login: {
    email: "",
    password: "",
  },
  signUp: {},
  userProfile: {},
  playlistForm: {
    title: "",
    description: "",
    isPublic: false,
    filePath: "",
    thumbnail: "",
  },
  trackForm: {
    title: "",
    artists: [],
    genre: "",
    trackFile: null,
    thumbnailFile: null,
    thumbnailUrl: "",
  },
};
