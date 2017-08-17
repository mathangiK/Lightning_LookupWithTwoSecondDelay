({
    init: function(component, event, helper) {
        helper.getSearchResults(component,event);
    },
    SearchKeyChange : function(component, event, helper) {
        var timer = component.get('v.timer');
        clearTimeout(timer);

        var timer = setTimeout(function(){
            var newlst = [];
            console.log('keyup!!');
            helper.getSearchResults(component,event);
            clearTimeout(timer);
            component.set('v.timer', null);
        }, 500);

        component.set('v.timer', timer);
    }
})