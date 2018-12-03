export const US_KEY = {
  REACT_APP_UNSPLASH_KEY:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_UNSPLASH_KEY
      : require("./privateKeys").US_KEY.REACT_APP_UNSPLASH_KEY
};
