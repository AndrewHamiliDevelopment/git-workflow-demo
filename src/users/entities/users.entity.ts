import { BaseEntity } from 'src/base-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @Column()
  lastName: string;
  @Column()
  firstName: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ type: 'boolean', default: true })
  enabled: boolean;

  constructor(u: Partial<Users>) {
    super();
    Object.assign(this, u);
  }
}
