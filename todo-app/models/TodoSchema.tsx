import { Realm } from 'realm';

export class TodoSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  id!: string;
  text!: string;
  completed!: boolean;
  createdAt!: Date;

  static schema = {
    name: 'Todo',
    properties: {
      id: 'string',
      text: 'string',
      completed: 'bool',
      createdAt: 'date',
    },
    primaryKey: 'id',
  };
}

export const realmConfig = Realm.Configuration = {
schema: [TodoSchema],
schemaVersion: 1,
};