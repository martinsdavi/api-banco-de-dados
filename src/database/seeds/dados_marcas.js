/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("marcas").del();
  await knex("marcas").insert([
    { id: 1, nome: "Apple", site: "apple.com", telefone: "0800-761-532" },
    { id: 2, colName: "rowValue2" },
    { id: 3, colName: "rowValue3" },
  ]);
}
