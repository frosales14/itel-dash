import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException('There is no token');

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: process.env.JWT_SEED,
      });

      const employee = await this.authService.findById(payload.id);

      if (!employee) throw new UnauthorizedException('user does not exist');
      if (!employee.isActive)
        throw new UnauthorizedException('user is not active');

      request['employee'] = employee;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return Promise.resolve(true);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
