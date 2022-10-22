# MyStore

<br>

## Description

myStore is a simple e-commerce single-page application, Users able to browse and shop products through the 
application. 

## Setup

1. Clone the repo into your local machine
2. open cmd in the project directive
3. Run `npm install`
4. Run `ng serve` or `npm run start`
5. Open your browser on `http://localhost:4200`


## Scripts

```
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
```

## Code scaffolding

Run `ng generate component <component-name>` to generate new component.
You can also use `ng generate service|class|interface|module`.

## Components

    * app                    // root component
    * products               // to retrieve all product items
      * product-item         // represent a single product
    * product-item-detail    // to show all product item details
    * nav-bar                // represent navigation bar
    * shopping-cart          // to show all product items in shopping cart
      * shopping-form        // represent a form to collect user's data
    *shopping-receipt        // to show receipt for the user

<br>

## Services

    * ProductService
    * CartService


## Routes

| PATH              | COMPONENT           |
| ----------------- | ------------------- |
| /                 | products            |
| /product/:id      | product-item-detail |
| /cart             | shopping-cart       |
| /order-confirmed  | shopping-receipt    |


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
