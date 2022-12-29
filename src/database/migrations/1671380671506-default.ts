import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671380671506 implements MigrationInterface {
    name = 'default1671380671506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "balanceId" integer, CONSTRAINT "REL_122eba7abb932493831f1e0f62" UNIQUE ("balanceId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "balance" ("id" SERIAL NOT NULL, "balance" integer NOT NULL, CONSTRAINT "PK_079dddd31a81672e8143a649ca0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_122eba7abb932493831f1e0f62b" FOREIGN KEY ("balanceId") REFERENCES "balance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_122eba7abb932493831f1e0f62b"`);
        await queryRunner.query(`DROP TABLE "balance"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
