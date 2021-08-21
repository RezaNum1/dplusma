import aws from 'aws-sdk'
import dotEnv from 'dotenv'
dotEnv.config()

aws.config.update({
    secretAccessKey:process.env.SECRETACCESSKEY,
    accessKeyId:process.env.ACCESSKEYID,
    region:process.env.REGION
});

const bucket = new aws.S3();

export const s3 = bucket;