export type Step = {
  id: number,
  selected?: boolean,
  index?: number,
}

export type Sequencer = {
    color: string;
    value1: number;
    value2: number;
    value3: number;
    value4: number;
    value5: number;
    value6: number;
    value7: number;
    value8: number;
    value9: number;
    value10: number;
    currentStep?: number; // Optional and can be undefined or a number
    sequence: Step[];
  };
  