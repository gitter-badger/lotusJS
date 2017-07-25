/**
 * Created by dsmiley on 7/24/17.
 */
import { IContext } from './IContext';
export interface IInjector {
    context: IContext;
    objectMap: Object;
    mapObject(key: string, constructor: Function, useSingleton: boolean): any;
    mapSingletonInstance(key: string, instance: any): any;
    inject(key: string): Object;
}
