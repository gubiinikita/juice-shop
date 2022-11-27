///<reference types = "cypress"/>

export function searchProductPageByPage(productName){
    cy.get('mat-grid-list').then(() => {
        if (cy.$$(`:contains(${productName})`)[0]) {
            cy.log(`***Searching ${productName}***`);
            cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click();
        }
        else{
            cy.log(`***Not found on this page, going to another***`);
            cy.get('[aria-label="Next page"]').click({force: true});
            searchProductPageByPage(productName);
        }
    })
}