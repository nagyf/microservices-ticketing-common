import { ErrorResponse } from './error-response';

export abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract toErrorResponse(): ErrorResponse;

    constructor(message: string) {
        super(message);
        (Object as any).setPrototypeOf(this, CustomError.prototype);
    }
}
