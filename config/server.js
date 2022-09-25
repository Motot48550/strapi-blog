module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["EzQPh7nZfAGtLXgYLACXzw==","vFf+MBy8yZgc/hb0nX8vXQ==",'VsT3UeWCbnyBxj/8x249xg==',"ABJ2vntWNHrgw6rfzSfmYQ=="]),
  },
});
