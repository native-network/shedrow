import { QuorumPipe } from './quorum.pipe';

describe('QuorumPipe', () => {
  it('create an instance', () => {
    const pipe = new QuorumPipe();
    expect(pipe).toBeTruthy();
  });
});
