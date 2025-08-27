import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

class MockUserRepository {}

describe('UserResolver', () => {
  let resolver: UserResolver;
  const mockRepository = new MockUserRepository();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        UserService,
        {
          provide: 'USER_REPOSITORY',
          useValue: mockRepository,
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
