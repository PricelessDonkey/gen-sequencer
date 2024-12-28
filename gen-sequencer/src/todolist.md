## to do 
[] - split up app into components (sequencer, controls)
[x] - move state into service file
[] - refactor state service into separate instrument services
[] - delete unused css/html
[] - change control button color to match sequences
[x] - start adding sounds
[] - add sequences to instruments
[] - add settings to instruments
[] - add master controls (solo, volumes, overall effects)
[] - add effects to instruments
[] - add buffer / granular synth for 'clouds'. basically take a 1 bar section and loop it with granular synthesis
[] - add sub divisions to sequences for rhythmic variation


control component, basically a wrapper around the input element we already have. takes in min, max, step, and color values. styling in component. emits a change event with the new value. onChange($event, "'setting'");