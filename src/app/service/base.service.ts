import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as nth from 'src/app/common/util'

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  domain: string = nth.urlAPI
  constructor(public http: HttpClient) { }

  getCurrentLang(): string{
    return nth.getCurrentLanguage();
  }

  /**
   *Chia 1 mảng các item thành mảng chứa các mảng con, mỗi mảng con chứa x phần tử
   *
   * @param {*} inputArray: mảng cần chia
   * @param {number} perChunk: số lượng phần tử trong 1 mảng con
   * @memberof DestinationService
   */
   splitArrayIntoChunks(inputArray: any, perChunk: number): any {
    if (inputArray.length < perChunk) perChunk = inputArray.length;
    return inputArray.reduce((resultArray: any, item: any, index: any) => {
      const chunkIndex = Math.floor(index / perChunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
  }
}
