import Tweakpane from 'tweakpane';
import * as tome from 'chromotome';

export default function (PARAMS, reset, reset_with_new_seed) {
  const pane = new Tweakpane({ title: 'Ornament options' });
  pane.addInput(PARAMS, 'grid_dim', {
    label: 'Segment size',
    x: { min: 2, max: 30, step: 2 },
    y: { min: 2, max: 30, step: 2 },
  });
  pane.addInput(PARAMS, 'symmetries', {
    label: 'Symmetries',
    options: {
      none: 'none',
      rotate_180: 'rotate_180',
      rotate_90: 'rotate_90',
      rotate_reflect_h: 'rotate_reflect_h',
      rotate_reflect_v: 'rotate_reflect_v',
      translate_reflect_h: 'translate_reflect_h',
      translate_reflect_v: 'translate_reflect_v',
    },
  });
  pane.addInput(PARAMS, 'grid_copies', {
    label: 'Number of segments',
    x: { min: 1, max: 8, step: 1 },
    y: { min: 1, max: 8, step: 1 },
  });

  pane.addInput(PARAMS, 'horizontal_reflection', { label: 'Horizontal reflection' });
  pane.addInput(PARAMS, 'vertical_reflection', { label: 'Vertical reflection' });

  let stylePane = pane.addFolder({ title: 'Style' });
  stylePane.addInput(PARAMS, 'ornament_scale', { label: 'Scale', min: 2, max: 50, step: 2 });
  stylePane.addInput(PARAMS, 'resolution', { label: 'Resolution', min: 1, max: 10, step: 1 });
  stylePane.addInput(PARAMS, 'spacing', { label: 'Spacing', min: 0.1, max: 2, step: 0.05 });
  stylePane.addInput(PARAMS, 'noise_intensity', { label: 'Distortion', min: 0, max: 2, step: 0.1 });
  stylePane.addInput(PARAMS, 'palette', {
    label: 'Color palette',
    options: Object.assign({}, ...tome.getNames().map((n) => ({ [n]: n }))),
  });

  let explorerPane = pane.addFolder({ title: 'Explorer' });
  explorerPane.addInput(PARAMS, 'split_chance', { label: 'Split chance', min: 0, max: 0.5, step: 0.05 });
  explorerPane.addInput(PARAMS, 'blank_chance', { label: 'Blank chance', min: 0, max: 0.9, step: 0.1 });
  explorerPane.addInput(PARAMS, 'path_priority', { label: 'Path priority', min: 0.1, max: 1, step: 0.1 });

  let controlPane = pane.addFolder({ title: 'Control' });
  controlPane.addInput(PARAMS, 'animate_drawing', { label: 'Animate drawing' });

  const btn = pane.addButton({ title: 'Redraw' });
  btn.on('click', () => reset_with_new_seed(PARAMS));
  pane.on('change', (_) => reset(PARAMS));
}
