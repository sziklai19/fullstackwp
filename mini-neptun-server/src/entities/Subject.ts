import { Collection, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Building } from "./Building";
import { Result } from "./Result";
import { User } from "./User";

@Entity()
export class Subject {

    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    code!: number;

    @Property()
    description!: string;

    @Property()
    credit!: number;

    @Property()
    room!: string;

    @OneToMany(() => Result, result => result.sid)
    results = new Collection<Result>(this);

    // @ManyToMany(() => User, 'subjects', {owner: true})
    // users = new Collection<User>(this);

    @ManyToOne(() => Building)
    building!: Building;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();
}