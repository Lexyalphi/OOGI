require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7J2-cGS_949RKZ8KvfANpJMPyDzQD2sP',
      accounts: [ '965c3a29858a9ee737fc138c2922781cdd9210b5ca1598d7b127d0a499773bf1' ]
    }
  }
}