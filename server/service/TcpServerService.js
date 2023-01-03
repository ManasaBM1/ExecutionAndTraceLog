'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns Description of TcpServer
 *
 * uuid String
 * returns inline_response_200_32
 **/
exports.getTcpServerDescription = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(url);
      var response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:description" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject();
    }
  });
}

/**
 * Returns address of the server
 *
 * uuid String
 * returns inline_response_200_34
 **/
exports.getTcpServerLocalAddress = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(url);
      var response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-address": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject();
    }
  });
}

/**
 * Returns TCP port of the server
 *
 * uuid String
 * returns inline_response_200_35
 **/
exports.getTcpServerLocalPort = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(url);
      var response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-port": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject();
    }
  });
}

/**
 * Returns Protocol of TcpServer
 *
 * uuid String
 * returns inline_response_200_33
 **/
exports.getTcpServerLocalProtocol = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      var value = await fileOperation.readFromDatabaseAsync(url);
      var response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-protocol" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
      } catch (error) {
        reject();
    }
  });
}

/**
 * Documents Description of TcpServer
 *
 * body Tcpserverinterfaceconfiguration_description_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerDescription = function(url, body) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(url, body, false);
      resolve();
    } catch (error) {
      reject();
    }
  });
}

/**
 * Documents address of the server
 *
 * body Tcpserverinterfaceconfiguration_localaddress_body 
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalAddress = function (url, body) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(url, body, false);
      resolve();
    } catch (error) {
      reject();
    }
  });
}

/**
 * Documents TCP port of the server
 *
 * body Tcpserverinterfaceconfiguration_localport_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalPort = function (url, body) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(url, body, false);
      resolve();
    } catch (error) {
      reject();
    }
  });
}

/**
 * Documents Protocol of TcpServer
 *
 * body Tcpserverinterfaceconfiguration_localprotocol_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalProtocol = function(url, body) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(url, body, false);
      resolve();
    } catch (error) {
      reject();
    }
  });
}
