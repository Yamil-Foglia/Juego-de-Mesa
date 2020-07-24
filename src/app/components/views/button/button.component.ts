import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	public on;

	constructor() { }

	ngOnInit() {
		this.on = false;
	}

	public onClick(): void {
		this.on = true;
	}

	public offClick(): void {
		this.on = false;
	}
}
