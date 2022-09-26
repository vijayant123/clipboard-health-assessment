const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the (unhashed) partitionKey as it is when provided as string input in event object", () => {
    const partitionKey = "12345678";
    const event = {
      partitionKey
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(partitionKey);
  });

  it("Returns the (unhashed) partitionKey in string form when provided as numeric input in event object", () => {
    const partitionKey = 12345678;
    const event = {
      partitionKey
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedOutput = JSON.stringify(partitionKey);
    expect(trivialKey).toBe(expectedOutput);
  });
  
  it("Returns the (unhashed) partitionKey in string form when provided as boolean input in event object", () => {
    const partitionKey = true;
    const event = {
      partitionKey
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedOutput = JSON.stringify(partitionKey);
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns the hashed partitionKey when provided input partitionKey is longer than 256 characters", () => {
    // partitionKey is 257 chars long
    const partitionKey = "0502b4449de58be821a90edf4eb119be9d63bdbd41bcb79cee1638891eaee465980b395ba1c8f193ef493e7f7a1634663b0723c9d90f7f39465fe0a0e8af92c90502b4449de58be821a90edf4eb119be9d63bdbd41bcb79cee1638891eaee465980b395ba1c8f193ef493e7f7a1634663b0723c9d90f7f39465fe0a0e8af92c9a";
    const event = {
      partitionKey
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedOutput = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns the unhashed partitionKey as it is when provided input partitionKey is not longer than 256 characters", () => {
    // partitionKey is 256 chars long
    const partitionKey = "0502b4449de58be821a90edf4eb119be9d63bdbd41bcb79cee1638891eaee465980b395ba1c8f193ef493e7f7a1634663b0723c9d90f7f39465fe0a0e8af92c90502b4449de58be821a90edf4eb119be9d63bdbd41bcb79cee1638891eaee465980b395ba1c8f193ef493e7f7a1634663b0723c9d90f7f39465fe0a0e8af92c9";
    const event = {
      partitionKey
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedOutput = partitionKey;
    expect(trivialKey).toBe(expectedOutput);
  });

  it("Returns the hash of event object (when event object does not have partitionKey field)", () => {
    const event = {
      field1: 1,
      field2: "a"
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedOutput = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(trivialKey).toBe(expectedOutput);
  });

});
