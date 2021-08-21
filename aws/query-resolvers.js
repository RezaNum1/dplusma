import { s3 } from '../utils/config.js'
import { promisify } from 'util'
import { getUrl } from '../utils/object.js'

export const queryResolver = class QueryResolver {

    constructor(){
        this.s3 = s3;
    };

    //fetching buckets.
    async fetchBuckets(){

        const listBuckets = promisify(this.s3.listBuckets.bind(this.s3));

        let result = await listBuckets().catch(console.log);

        result = result.Buckets.map(result => result.Name);

        return result;

    };

    //fetching objects.
    async fetchObjects(bucketName){

        const params = {
            Bucket:bucketName
        };

        let getObjects = promisify(this.s3.listObjects.bind(this.s3));

        let result = await getObjects(params).catch(console.log)
        
        let objects = [];

        result.Contents.forEach( content => {
            return objects.push({
                key:content.Key,
                url:getUrl.bind(this,bucketName,content.Key)
            })
        } );

        return objects;

    };
    

};