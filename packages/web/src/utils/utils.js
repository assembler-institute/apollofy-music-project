export const formatDuration = (duration) => {
  const durMins = Math.floor((duration % 3600) / 60);
  const durSecs = Math.floor((duration % 3600) % 60);
  return `${durMins}:${durSecs}`;
};

export const makePrefix = (prefix) => {
  return function getTestId(dataTestId) {
    return `${prefix}-${dataTestId}`;
  };
};

export const validateName = (value) => {
  const nameRegex = RegExp(/^[a-zA-z\d_-]+$/i);
  return nameRegex.test(value) ? "" : "Invalid name!";
};

export const validateEmail = (email) => {
  const emailRegex = RegExp(
    /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  );
  return emailRegex.test(email) ? "" : "Invalid email!";
};

export const validatePassword = (password) => {
  const passRegex = RegExp(/^[#\w@_-]+$/i);
  return passRegex.test(password) ? "" : "Invalid Password!";
};

export const urlWithQuery = (url, key, value) => {
  return `${url}?${key}=${value}`;
};

export const randomHexColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
};

export const randomRGBColor = () => {
  const random = [];
  for (let i = 0; i < 3; i += 1) {
    random.push(Math.floor(Math.random() * 256));
  }
  return random;
};
