import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // Status bawaan error
    const status = exception.getStatus();

    // Body bawaan error
    const resBody = exception.getResponse();

    // Bisa manual override status di sini
    const customStatus = status === 404 ? 400 : status; // contoh: 404 jadi 400

    response.status(customStatus).json({
      success: false,
      statusCode: customStatus,
      error: resBody,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
