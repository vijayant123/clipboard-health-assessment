const crypto = require("crypto");

exports.deterministicPartitionKey = (inputData) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;

  // create hash from input data if provided
  if (inputData) {
    if (inputData.partitionKey) {
      partitionKey = inputData.partitionKey;
    } else {
      const data = JSON.stringify(inputData);
      partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

// Check:
// 1. partitonKey is defined, if not set it to trivial partition key
// 2. if partitionKey is defined then check if its is string. If not then convert/cast it to its string form.
  if (!partitionKey) {
    partitionKey = TRIVIAL_PARTITION_KEY;
  }
  
  if(typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
  }

  return partitionKey;
};
