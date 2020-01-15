import { TestBed } from '@angular/core/testing';

import { ZMusicService } from './z-music.service';

describe('ZMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZMusicService = TestBed.get(ZMusicService);
    expect(service).toBeTruthy();
  });
});
