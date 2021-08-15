import { CustomError } from './custom-error';
import { ErrorResponse } from './error-response';

export class AuthorizationError extends CustomError {
    statusCode = 401;

    constructor() {
        super('Unauthorized');

        (Object as any).setPrototypeOf(this, AuthorizationError.prototype);
    }

    toErrorResponse(): ErrorResponse {
        return {
            errors: [
                {
                    message: this.message,
                },
            ],
        };
    }
}
