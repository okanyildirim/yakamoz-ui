import { WriterRoutingModule } from './writer-routing.module';

describe('WriterRoutingModule', () => {
  let routingWriterModule: WriterRoutingModule;

  beforeEach(() => {
    routingWriterModule = new WriterRoutingModule();
  });

  it('should create an instance', () => {
    expect(routingWriterModule).toBeTruthy();
  });
});
