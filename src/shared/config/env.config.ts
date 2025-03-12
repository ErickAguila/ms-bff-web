import * as dotenv from 'dotenv';
dotenv.config();

export const configVar = {
  PORT: Number(process.env.PORT),
  URL_MS_BS_USER: process.env.URL_MS_BS_USER,
  URL_MS_BS_PRODUCT: process.env.URL_MS_BS_PRODUCT,
};

export const configEnv = () => configVar;
