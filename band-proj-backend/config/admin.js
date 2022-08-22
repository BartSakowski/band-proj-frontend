module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a2e5468a980efced7867d92d7b17759f'),
  },
});
