import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  endpoint: 'http://localhost:8000',
});

export const listTables = async () => {
  const command = new ListTablesCommand({});
  const response = await client.send(command);
  console.log(response.TableNames.join('\n'));
  return response;
};
