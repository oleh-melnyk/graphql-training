import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql';
import {Photo} from "../../photos/entities";

@ObjectType()
@Entity('album')
export class Album {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({nullable: true})
  @Column({nullable: true})
  coverUrl: string

  @Field((type) => [Photo])
  photos: Photo[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
