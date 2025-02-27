import { Client } from "minio";

export const minio = new Client({
  endPoint: process.env.MINIO_END_POINT!,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
  useSSL: true,
});
