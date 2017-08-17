public class ProductController {
    
    @AuraEnabled
    public static List<SObject> productList(String searchTerm) {
        if(searchTerm != ''){
            String queryString = 'FIND {'+searchTerm+'*} IN ALL FIELDS RETURNING Product2 (Id, Name, ProductCode where Product_Level__c = \'Base\' LIMIT 20)';
            List<List<SObject>> products = search.query(queryString);
            if(products.size()>0)
                return products.get(0);
            return null;
        }else{
            String queryString = 'SELECT Id,Name, ProductCode From Product2 where Product_Level__c = \'Base\' LIMIT 20';
            List<SObject> products = Database.query(queryString);
            return products;
        }
    }
}