/**
 * Created by dsmiley on 6/26/15.
 */
//global namespace for app
SampleApp = function(){

}

SampleApp.init = function(){
    if(!SampleApp.resources){
        SampleApp.resources = new SampleApp.Context(SampleApp.Model());
    }
}