module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "strapi",
        },
        uploadStream: {
          folder: "strapi",
        },
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "alanna.stokes12@ethereal.email",
          pass: "E8nhcjZx987UcduCYj",
        },
      },
      settings: {
        defaultFrom: "info@lgdweb.fr",
        defaultReplyTo: "info@lgdweb.fr",
      },
    },
  },
});
