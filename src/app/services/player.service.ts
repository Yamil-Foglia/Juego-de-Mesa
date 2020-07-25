import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CoreHelper } from 'src/app/core/core-helper';
import { Player } from '../models/player';


@Injectable({
	providedIn: 'root'
})
export class PlayerService {

	constructor(private db: AngularFirestore) { }

	public add(player: Player): Promise<unknown> {
		return this.db.collection('players').add(CoreHelper.convertToObject(player));
	}

	public getAll(): AngularFirestoreCollection<unknown> {
		return this.db.collection('players');
	}

}
