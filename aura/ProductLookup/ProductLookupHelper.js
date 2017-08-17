({
    getSearchResults : function(component,event){
        var action = component.get("c.productList");
        action.setParams({
            "searchTerm": component.get("v.searchTerm")
        });
        action.setCallback(this, function(response){                
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log(response.getReturnValue());
                if(response.getReturnValue()!=null)
                    component.set("v.items", response.getReturnValue());
                else{	
                    var items = component.get("v.items");
                    items.splice(0,items.length);
                    component.set("v.items",items);
                }
            }
        });
        $A.getCallback(function() {
        	$A.enqueueAction(action);
    	})();
    }
})