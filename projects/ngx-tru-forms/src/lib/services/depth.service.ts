import { Injectable } from '@angular/core';

@Injectable()
export class DepthService {
  depth = 1;

  increment() {
    this.depth++;
  }
}
