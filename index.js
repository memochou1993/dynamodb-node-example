import { createTable } from './examples/create-table.js';
import { deleteTables } from './examples/delete-table.js';
import { listTables } from './examples/list-tables.js';

await createTable();
await listTables();
await deleteTables();
