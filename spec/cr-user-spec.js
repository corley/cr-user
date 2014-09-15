describe("cr-user module", function(){
    
    beforeEach(function(){
        module('cr.user');
    });
    
    it('can get an instance of $crUser provider', inject(function($crUser) {
        expect($crUser).toBeDefined();
    }));
    
    it('can get an instance of crUser factory', inject(function(crUser) {
        expect(crUser).toBeDefined();
    }));

    it("Configure provider", function(){
        inject(function($crUser){
            $crUser.setAuthHandler("pippo");
            expect($crUser.getAuthHandler()).toEqual("pippo");
        });
    });

});
