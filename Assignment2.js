({
	openModal : function(component, event, helper) {
	  component.set("v.isOpen", true);
	},
    closeModal : function(component, event, helper) {
      component.set("v.isOpen", false);
      component.set("v.message", "you clicked the Cancel button")
   },
 
   confirmModal : function(component, event, helper) {
      component.set("v.isOpen", false);
      component.set("v.message", "you clicked the Confirm button");
   }
})