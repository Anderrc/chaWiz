import { Observer } from '../models/Observer';
import { Subject } from '../models/Subject';

export class canaldeyoutube<T> implements Subject<T> {
	private observers: Observer<T>[] = [];
	private state: T | null = null;

	registerObserver(o: Observer<T>): void {
		console.log('Se agrego el observer');
		this.observers.push(o);
	}
	removeObserver(o: Observer<T>): void {
		const index = this.observers.indexOf(o);
		if (index >= 0) {
			this.observers.splice(index, 1);
		}
	}

	getStates() {
		return this.state;
	}

	setState(state: T): void {
		this.state = state;
		this.notifyObservers();
	}

	notifyObservers(): void {
		for (const observer of this.observers) {
			console.log('Se notifico al observer');

			observer.update();
		}
	}
}

export class suscriptor<T> implements Observer<T> {
	private subject: Subject<T>;
	private cantWords: T | null = null;

	constructor(s: Subject<T>) {
		this.subject = s;
		this.subject.registerObserver(this);
	}
	getState() {
		console.log('CantWords: ' + this.cantWords);

		return this.cantWords;
	}

	update(): void {
		const content = this.subject.getStates() as string;
		console.log('Counter: ' + content);
		const arrayWords = content
			.split(' ')
			.filter(
				(word: string) => word !== '' && word !== '\n' && word !== ' ',
			);
		this.cantWords = arrayWords.length as T;
		console.log(
			'🚀 ~ file: Counter.ts:58 ~ CantWords<T> ~ update ~ this.cantWords:',
			this.cantWords,
		);
	}
}
