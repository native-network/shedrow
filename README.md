
# Shedrow Demo

Demo v0.0.1

## Getting Started

Angular 5 app with Truffle framework support

### Prerequisites

In order to run the Truffle box, you will need Node.js (tested with version 8.9.x). This will include npm, needed to install dependencies. In order install these dependencies, you will also need Python (version 2.7.x) and git. You will also need the MetaMask plugin for Chrome.


### Installing

Install truffle, Angular CLI and an Ethereum client. If you don't have a test environment, Ethereum TestRPC

```
npm install -g truffle
npm install -g @angular/cli
npm install -g ethereumjs-testrpc
```

npm install dev libs

```
npm install
```

Run your Ethereum client. For TestRPC:
This is not neccessary for demo but can be used to deploy initial .sol contracts.

```
testrpc -l 1000000000
```
Note the mnemonic 12-word phrase printed on startup, you will need it later.

Compile and migrate your contracts:

```
truffle compile && truffle migrate
```

Alternatively to use same wallet
```
testrpc --seed 0 or testrpc -m "prize drum enter service reform bike chalk milk saddle client bulb music"
```

Run development server:

```
ng serve
```

## Configure

1) In order to connect with the Ethereum network, you will need to configure MetaMask
2) Log into the testrpc test accounts in MetaMask, using the 12-word phrase printed earlier.
* Normally, the available test accounts will change whenever you restart testrpc.
* In order to receive the same test accounts every time you start testrpc, start it with a seed like this: testrpc --seed 0 or testrpc -m "put your mnemonic phrase here needs twelve words to work with MetaMask"
3) Point MetaMask to testrpc by connecting to the network localhost:8545

## Running the tests

1) Running the Angular component tests:

```ng test```

2) Running the Truffle tests:

```truffle test```

3) Running Protactor end-to-end tests

```ng e2e```


## Deployment

```ng build```

## Authors

* **CTRL OFFICE**
* **Dekan Brown** - *Initial work* - [github](https://github.com/dekanbro)
* **Ven Gist** - *Initial work* - [github](https://github.com/oovg)

See also the list of contributors

## License

...

## Acknowledgments

...

## Folder Structure

Seperated into sub modules
* global - is all components that are always there
* sharred - dumb components that can be used onther places, also import/export of material
   mocks folder for data mock ups
* sub app folders - project, task, vote, etc. 
* pages - static pages like home and about
* paddock temporary sub app to test custom componets
