import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("url", table => {
    table.increments("id").primary();
    table.string("url_normal", 120).notNullable();
    table.string("token_shortener", 120).notNullable();
    table
      .timestamp("dt_create")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .integer("expiration")
      .defaultTo(10)
      .notNullable();
    table
      .enum("unit_expiration", ["segundos", "minutos", "horas", "dias"])
      .defaultTo("minutos")
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("url");
}
