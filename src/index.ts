import { EventEmitter } from 'events';
import { Http } from './class/Http';
import { CompanyValuation } from './class/CompanyValuation';

/* eslint-disable @typescript-eslint/no-explicit-any */
function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(
        baseCtor.prototype,
        name,
      ) as any);
    });
  });
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * @constructor
 * @mixins EventEmitter, Http, CompanyValuation
 */
class FinancialModelingPrep {}

interface FinancialModelingPrep extends CompanyValuation {} // eslint-disable-line @typescript-eslint/no-empty-interface

applyMixins(FinancialModelingPrep, [EventEmitter, Http, CompanyValuation]);

FinancialModelingPrep.prototype.constructor = FinancialModelingPrep;

export { FinancialModelingPrep };
