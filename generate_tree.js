const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require("fs");

// Example: [index, address, amount_in_wei]
const values = [
  ["0", "0x1111111111111111111111111111111111111111", "1000000000000000000"],
  ["1", "0x2222222222222222222222222222222222222222", "2000000000000000000"],
];

const tree = StandardMerkleTree.of(values, ["uint256", "address", "uint256"]);

console.log("Merkle Root:", tree.root);

// Write to file so frontend can read it for proofs
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
