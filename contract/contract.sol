// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BorrowReturn {
    address public owner;
    uint256 public itemCount;

    // Each item has an id and a borrower
    struct Item {
        address borrower; // 0x0 = available
        bool exists;
    }

    // Store all items
    mapping(uint256 => Item) public items;

    constructor() {
        owner = msg.sender;
    }

    // Only the owner can add items
    function addItem() external {
        require(msg.sender == owner, "Only owner");

        itemCount += 1;
        items[itemCount] = Item({
            borrower: address(0),
            exists: true
        });
    }

    // Anyone can borrow an available item
    function borrow(uint256 id) external {
        require(items[id].exists, "Item does not exist");
        require(items[id].borrower == address(0), "Already borrowed");

        items[id].borrower = msg.sender;
    }

    // Only the borrower can return the item
    function returnItem(uint256 id) external {
        require(items[id].exists, "Item does not exist");
        require(items[id].borrower == msg.sender, "You didn't borrow this");

        items[id].borrower = address(0);
    }

    // Check if item is available
    function isAvailable(uint256 id) external view returns (bool) {
        require(items[id].exists, "Item does not exist");
        return items[id].borrower == address(0);
    }
}