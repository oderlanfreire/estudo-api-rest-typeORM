import { Subject } from "../entities/Subject";
import { AppDataSource } from "../data-source";

export const subjectRepository = AppDataSource.getRepository(Subject)