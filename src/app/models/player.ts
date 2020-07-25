import { IFirebaseObject } from 'src/app/interfaces/ifirebase-object';


export class Player implements IFirebaseObject  {

    public firebaseId: string;
    public firebaseTimestamp: number;
    public name: string;
    public playerImage: string;

    constructor() { }

    public static create(name: string, playerImage: string ): Player {
        let newPlayer = new Player();
        newPlayer.firebaseTimestamp = Date.now();
        newPlayer.name = name;
        newPlayer.playerImage = playerImage;

        return newPlayer;
    }
}
