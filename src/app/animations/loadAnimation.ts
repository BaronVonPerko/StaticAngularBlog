import {
  animate,
  animation,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const loadAnimation = animation([
  style({
    transform: 'translateY(100px)',
    opacity: 0,
  }),
  animate('250ms', style({ transform: 'translateY(0)', opacity: 1 })),
]);
