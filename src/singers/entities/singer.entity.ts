import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Singer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  edad: string;
  @Column()
  nacionalidad: string;
  @Column()
  generoMusical: string;
}
