import { EntityRepository, MikroORM } from "@mikro-orm/core";
import { Building } from "./entities/Building";
import { Subject } from "./entities/Subject";
import { Users } from "./entities/Users";

declare global {
    namespace Express {
        export interface Request {
            orm: MikroORM;
            subjectRepository?: EntityRepository<Subject>;
            userRepository?: EntityRepository<Users>;
            buildingRepository?: EntityRepository<Building>;
        }
    }
}