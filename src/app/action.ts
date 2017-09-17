export class Action {

	actionName: string;
	categories: any[];
	date: string;
	descLong: string;
	descShort: string;
	fundeeId: string;
	id: string;
	referenceId: string;
	status: string;
	thumbnailUrl: string;

	constructor(actionName: string,
	categories: string,
	date: string,
	descLong: string,
	descShort: string,
	fundeeId: string,
	id: string,
	referenceId: string,
	status: string,
	thumbnailUrl: string
	) {}
}
