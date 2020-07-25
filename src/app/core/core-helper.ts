import { IFirebaseObject } from '../interfaces/ifirebase-object';
import { QueryDocumentSnapshot } from 'angularfire2/firestore';


export class CoreHelper {
    
    public static convertToObject(obj: any): Object {
		return JSON.parse(JSON.stringify(obj));
    }
    
	public static mapObject<T extends IFirebaseObject>(doc: QueryDocumentSnapshot<unknown>): T {
		let obj = doc.data() as T;
		obj.firebaseId = doc.id;
		return obj; 
	}
}
