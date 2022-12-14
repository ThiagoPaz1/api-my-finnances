import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBalance1670979609557 implements MigrationInterface {
    name = 'CreateBalance1670979609557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "balance" ("id" SERIAL NOT NULL, "balance" integer NOT NULL, CONSTRAINT "PK_079dddd31a81672e8143a649ca0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "balanceId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_122eba7abb932493831f1e0f62b" UNIQUE ("balanceId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_122eba7abb932493831f1e0f62b" FOREIGN KEY ("balanceId") REFERENCES "balance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_122eba7abb932493831f1e0f62b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_122eba7abb932493831f1e0f62b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "balanceId"`);
        await queryRunner.query(`DROP TABLE "balance"`);
    }

}
