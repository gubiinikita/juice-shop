///<reference types = "cypress"/>

export function searchExistingProductPageByPage(productName){
    cy.get('mat-grid-list').then((body) => {
        if (body.find('mat-card', `${productName}`).length > 0) {
            cy.log(`***Searching ${productName}***`);
            cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click();
        }
        else{
            cy.log(`***Searching ${productName}***`);
            cy.get('[aria-label="Next page"]').click();
            searchExistingProductPageByPage(productName);
        }
    })
}