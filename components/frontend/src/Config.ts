import {CalculationStore} from "./calculations/calculationStore";
import {LocalStorageCalculationRepository} from "./calculations/localStorageCalculationRepository";

export const calculations = new CalculationStore(new LocalStorageCalculationRepository(localStorage))
