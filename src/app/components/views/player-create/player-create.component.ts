import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';


@Component({
	selector: 'app-player-create',
	templateUrl: './player-create.component.html',
	styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
	
	public playerForm: FormGroup;

	constructor(private service: PlayerService) { }

	ngOnInit() {
		this.initializeForm();
	}

	public add(): void {
        this.service.add(this.build());
	} 
	
	private initializeForm(): void {
        this.playerForm = new FormGroup({
            'name': new FormControl(null, [Validators.required]),
            'player': new FormControl(null, [Validators.required]),
        });
    }

	private build(): Player {
        return Player.create(
            this.playerForm.get('name').value,
            this.playerForm.get('player').value,
        )
    }

}
