import { EntityRepository, Repository } from "typeorm";
import { ShortnerUris } from "./shortner-uris.entity";

@EntityRepository(ShortnerUris)
export class ShortnerUrisRepository extends Repository<ShortnerUris> {

}