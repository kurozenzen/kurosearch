export type ApiErrorType = 'not-found' | 'fetch-error' | 'parse-error' | 'aborted';
export class ApiError implements Error {
	name: ApiErrorType;
	message: string;
	cause?: unknown;

	constructor(name: ApiErrorType, message: string, cause?: unknown) {
		this.name = name;
		this.message = message;
		this.cause = cause;
	}
}
