export class NoOpStorage implements Storage {
	length: number = 0;
	clear(): void {}
	getItem(_key: string): string | null {
		return null;
	}
	key(_index: number): string | null {
		return null;
	}
	removeItem(_key: string): void {}
	setItem(_key: string, _value: string): void {}
}
