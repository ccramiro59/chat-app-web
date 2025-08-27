import { ObjectId } from 'mongodb';

const isObjectId = (value: any) => value instanceof ObjectId;

export { isObjectId };
