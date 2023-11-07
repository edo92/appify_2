const configuration = {
  app: {
    devEnv: process.env.DEVELOPMENT_ENV || false,
  },
};

export default () => configuration;
export type Config = typeof configuration;
