# Proxy Pattern



### Delegatecall

delegatecall is a low level function similar to call.

When contract A executes delegatecall to contract B, B's code is executed

with contract A's storage, msg.sender and msg.value.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// NOTE: Deploy this contract first
contract B {
    // NOTE: storage layout must be the same as contract A
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // A's storage is set, B is not modified.
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}

```

### Proxy Admin, Upgradeability Proxy, Implementation Contract

Proxy contract will be the storage layer

Implementation contract will be the logic layer

In the case of an upgrade, existing storage variables cannot be changed or omitted. While upgrading the contract, the storage sequence has to be the **same**. Only new variables can be added.




[ref](https://medium.com/coinmonks/proxy-pattern-and-upgradeable-smart-contracts-45d68d6f15da)

It shows assembly and calldatacopy ... function


### UUPS vs Transparent Proxy

[Link](https://ethereum.stackexchange.com/questions/141547/use-cases-of-uups-proxies-over-transparent)

[How to do](https://forum.openzeppelin.com/t/hardhat-deploy-with-uups/28535/2)


