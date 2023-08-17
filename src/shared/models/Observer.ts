export interface Observer<T> {
	update(): void;
	getState(): T | null;
}
