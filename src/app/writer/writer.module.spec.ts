import { WriterModule } from './writer.module';

describe('WriterModule', () => {
  let writerModule: WriterModule;

  beforeEach(() => {
    writerModule = new WriterModule();
  });

  it('should create an instance', () => {
    expect(writerModule).toBeTruthy();
  });
});
