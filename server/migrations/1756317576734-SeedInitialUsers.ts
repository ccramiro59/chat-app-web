import { User } from 'src/user/models/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedInitialUsers1756317576734 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      const repository = queryRunner.connection.getMongoRepository(User);
      const users = [
        repository.create({
          type: 'admin',
          username: 'ccramiro',
          password: 'admin123',
          emailAddress: 'christian.ramiro0509@gmail.com',
          firstName: 'Christian',
          lastName: 'Ramiro',
          displayName: 'cosmiccringe',
          dateOfBirth: '1997-05-09',
        }),
        repository.create({
          type: 'standard',
          username: 'jdoe01',
          password: 'std123',
          emailAddress: 'john.doe01@example.com',
          firstName: 'John',
          lastName: 'Doe',
          displayName: 'johndynamo',
          dateOfBirth: '1985-03-14',
        }),
        repository.create({
          type: 'standard',
          username: 'msmith22',
          password: 'std123',
          emailAddress: 'mary.smith22@example.com',
          firstName: 'Mary',
          lastName: 'Smith',
          displayName: 'pixelqueen',
          dateOfBirth: '1990-07-22',
        }),
        repository.create({
          type: 'standard',
          username: 'rlee88',
          password: 'std123',
          emailAddress: 'ray.lee88@example.com',
          firstName: 'Ray',
          lastName: 'Lee',
          displayName: 'codehawk',
          dateOfBirth: '1988-11-30',
        }),
        repository.create({
          type: 'standard',
          username: 'akhan77',
          password: 'std123',
          emailAddress: 'amir.khan77@example.com',
          firstName: 'Amir',
          lastName: 'Khan',
          displayName: 'bytebuster',
          dateOfBirth: '1992-04-18',
        }),
        repository.create({
          type: 'standard',
          username: 'lgarcia09',
          password: 'std123',
          emailAddress: 'lisa.garcia09@example.com',
          firstName: 'Lisa',
          lastName: 'Garcia',
          displayName: 'neonpulse',
          dateOfBirth: '1995-09-09',
        }),
        repository.create({
          type: 'standard',
          username: 'tnguyen33',
          password: 'std123',
          emailAddress: 'thanh.nguyen33@example.com',
          firstName: 'Thanh',
          lastName: 'Nguyen',
          displayName: 'quantumflash',
          dateOfBirth: '1987-12-01',
        }),
        repository.create({
          type: 'standard',
          username: 'bwright66',
          password: 'std123',
          emailAddress: 'ben.wright66@example.com',
          firstName: 'Ben',
          lastName: 'Wright',
          displayName: 'stormbyte',
          dateOfBirth: '1993-06-15',
        }),
        repository.create({
          type: 'standard',
          username: 'cchan21',
          password: 'std123',
          emailAddress: 'cindy.chan21@example.com',
          firstName: 'Cindy',
          lastName: 'Chan',
          displayName: 'cybernova',
          dateOfBirth: '1998-02-21',
        }),
        repository.create({
          type: 'standard',
          username: 'dpatel44',
          password: 'std123',
          emailAddress: 'dev.patel44@example.com',
          firstName: 'Dev',
          lastName: 'Patel',
          displayName: 'glitchguru',
          dateOfBirth: '1989-10-10',
        }),
        repository.create({
          type: 'standard',
          username: 'hkim12',
          password: 'std123',
          emailAddress: 'hana.kim12@example.com',
          firstName: 'Hana',
          lastName: 'Kim',
          displayName: 'sparkstorm',
          dateOfBirth: '1996-08-05',
        }),
        repository.create({
          type: 'standard',
          username: 'jroberts99',
          password: 'std123',
          emailAddress: 'jake.roberts99@example.com',
          firstName: 'Jake',
          lastName: 'Roberts',
          displayName: 'datadrifter',
          dateOfBirth: '1986-01-19',
        }),
        repository.create({
          type: 'standard',
          username: 'nfernandez88',
          password: 'std123',
          emailAddress: 'nina.fernandez88@example.com',
          firstName: 'Nina',
          lastName: 'Fernandez',
          displayName: 'echoflare',
          dateOfBirth: '1991-03-03',
        }),
        repository.create({
          type: 'standard',
          username: 'owilliams55',
          password: 'std123',
          emailAddress: 'oliver.williams55@example.com',
          firstName: 'Oliver',
          lastName: 'Williams',
          displayName: 'techphantom',
          dateOfBirth: '1994-05-25',
        }),
        repository.create({
          type: 'standard',
          username: 'slopez77',
          password: 'std123',
          emailAddress: 'sofia.lopez77@example.com',
          firstName: 'Sofia',
          lastName: 'Lopez',
          displayName: 'binarybliss',
          dateOfBirth: '1999-12-12',
        }),
        repository.create({
          type: 'standard',
          username: 'kthomas31',
          password: 'std123',
          emailAddress: 'kevin.thomas31@example.com',
          firstName: 'Kevin',
          lastName: 'Thomas',
          displayName: 'matrixmuse',
          dateOfBirth: '1984-07-07',
        }),
      ];
      await repository.save(users);
    } catch (err) {
      console.error(err);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      const repository = queryRunner.connection.getMongoRepository(User);
      await repository.clear();
    } catch (err) {
      console.error(err);
    }
  }
}
