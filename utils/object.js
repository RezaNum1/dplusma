import { s3 } from './config.js'

import { promisify } from 'util'

async function getUrlConf(bucketName,key){

    const params = {
        Bucket:bucketName,
        Key:key
    };

    let getObject = promisify(s3.getSignedUrl.bind(s3));

    let result = await getObject('getObject',params).catch(console.log);

    result = result.split('?')[0];

    return result;
    
};

export const getUrl = getUrlConf