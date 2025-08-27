import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

class MockUserRepository {}

describe('UserService', () => {
  let service: UserService;
  const mockRepository = new MockUserRepository();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: 'USER_REPOSITORY',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
