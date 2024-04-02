import { DeleteTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  endpoint: 'http://localhost:8000',
});

export const deleteTables = async () => {
  const command = new DeleteTableCommand({
    TableName: "Drinks",
  });
  const response = await client.send(command);
  return response;
};
