import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  endpoint: process.env.AWS_ENDPOINT_URL_S3,
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

export const uploadToS3 = async (file: File, key: string) => {
  // upload file to conffomo public bucket

  const blob = Buffer.from(await file.arrayBuffer())

  const command = new PutObjectCommand({
    Bucket: 'conffomo-public',
    Key: key,
    Body: blob,
    ContentType: file.type,
  })

  const response = await s3.send(command)
  console.log(response)

  // return the key-name from the response
  return `https://fly.storage.tigris.dev/${process.env.BUCKET_NAME}/${key}`
}
