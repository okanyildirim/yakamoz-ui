import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  ngOnInit() {}
/*
  currentUser: User = {};
  captcha: Captcha = {};

  // shared data definitions
  private statusDataSource = new Subject<string>();
  private channelStatusDataSource = new Subject<string>();
  private dataSource = new Subject<boolean>();
  private userDataSource = new BehaviorSubject(this.currentUser);
  private qualityDataSource = new Subject<string>();
  private seqReProcessName = new Subject<string>();
  private otherReProcessName = new Subject<string>();
  private isCustomerDeleted = new Subject<boolean>();
  private hasRawMaterial = new Subject<boolean>();
  private posterCatalog = new Subject<boolean>();
  private scheduleDate = new Subject<boolean>();
  private licence = new Subject<boolean>();
  private refreshSupplier = new Subject<boolean>();
  private refreshState = new Subject<boolean>();
  private contentSearchResponse = new Subject<BaseApiResponse>();
  private contentSearchRequestPageNumber = new Subject<number>();
  private captchaDataSource = new BehaviorSubject(this.captcha);
  private refreshdetailPage = new Subject<boolean>();

  // shared data definitions as observable
  statusDataSource$ = this.statusDataSource.asObservable();
  channelStatusDataSource$ = this.channelStatusDataSource.asObservable();
  dataSource$ = this.dataSource.asObservable();
  userDataSource$ = this.userDataSource.asObservable();
  qualityDataSource$ = this.qualityDataSource.asObservable();
  seqReProcessName$ = this.seqReProcessName.asObservable();
  otherReProcessName$ = this.otherReProcessName.asObservable();
  isCustomerDeleted$ = this.isCustomerDeleted.asObservable();
  hasRawMaterial$ = this.hasRawMaterial.asObservable();
  posterCatalog$ = this.posterCatalog.asObservable();
  scheduleDate$ = this.scheduleDate.asObservable();
  licence$ = this.licence.asObservable();
  refreshSupplier$ = this.refreshSupplier.asObservable();
  refreshState$ = this.refreshState.asObservable();
  contentSearchResponse$ = this.contentSearchResponse.asObservable();
  contentSearchRequestPageNumber$ = this.contentSearchRequestPageNumber.asObservable();
  captchaDataSource$ = this.captchaDataSource.asObservable();
  refreshdetailPage$ = this.refreshdetailPage.asObservable();

  // functions for sending shared data
  sendStatusData(data: string) {
    console.log('send status data');

    this.statusDataSource.next(data);
  }

  sendData(data: boolean) {
    this.dataSource.next(data);
  }

  sendUserData(data: User) {
    this.userDataSource.next(data);
  }

  sendQualityData(data: string) {
    this.qualityDataSource.next(data);
  }

  sendChannelStatusData(data: string) {
    this.channelStatusDataSource.next(data);
  }

  sendSeqReProcessName(name: string) {
    this.seqReProcessName.next(name);
  }

  sendOtherReProcessName(name: string) {
    this.otherReProcessName.next(name);
  }

  sendDeletedCustomer(data: boolean) {
    this.isCustomerDeleted.next(data);
  }

  sendHasRawMedia(data: boolean) {
    this.hasRawMaterial.next(data);
  }

  posterOk(data: boolean) {
    this.posterCatalog.next(data);
  }

  scheduledate(data: boolean) {
    this.scheduleDate.next(data);
  }

  sendToLicence(data: boolean) {
    this.licence.next(data);
  }

  sendToRefreshSupplier(data: boolean) {
    this.refreshSupplier.next(data);
  }

  sendRefreshState(data: boolean) {
    this.refreshState.next(data);
  }

  sendContentSearchResponse(data: BaseApiResponse) {
    this.contentSearchResponse.next(data);
  }

  sendCaptcha(data: Captcha) {
    this.captchaDataSource.next(data);
  }

  sendPage(pageNumber: number) {
    this.contentSearchRequestPageNumber.next(pageNumber);
  }

  refreshDetailPage(refresh: boolean) {
    this.refreshdetailPage.next(refresh);
  }*/

}
