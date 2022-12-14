import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post('/login')
  async login(@Req() req) {
    return this.userService.login(req.body);
  }

  @Post('/register')
  async registerUser(@Req() req): Promise<User> {
    return this.userService.register(req.body);
  }

  @Post('/verifyToken')
  async verify(@Req() req) {
    return this.userService.verifyToken(req.body);
  }

  @Post('/verifyRefreshToken')
  async verifyRefresh(@Req() req) {
    return this.userService.verifyRefreshToken(req.body);
  }
}
