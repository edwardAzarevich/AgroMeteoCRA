"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataList = void 0;
var nameSensorList = ['СФ-03', 'СФ-06', 'Sl-31'],
    baudRate = [9600, 1200, 2400],
    nameInterfaceConnect = ['v23', 'RS-485'];
var dataList = {
  nameSensorList: nameSensorList,
  baudRate: baudRate,
  nameInterfaceConnect: nameInterfaceConnect
};
exports.dataList = dataList;