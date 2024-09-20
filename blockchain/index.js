const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_KEY);
const client = Client.forTestnet();
client.setOperator(operatorId, operatorKey);


const evmBytecode = await fs.readFile(
  './trogdor_sol_Trogdor.bin', { encoding: 'utf8' });