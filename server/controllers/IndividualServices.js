'use strict';

var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');
var restResponseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var executionAndTraceService = require('onf-core-model-ap-bs/basicServices/ExecutionAndTraceService');
var IndividualServices = require('../service/IndividualServicesService');

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.disregardApplication = async function disregardApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try {
    let startTime = process.hrtime();
    let responseCode = responseCodeEnum.code.NO_CONTENT;
    let responseBodyToDocument = {};
    await IndividualServices.disregardApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
      .then(async function (responseBody) {
        responseBodyToDocument = responseBody;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      })
      .catch(async function (responseBody) {
        responseBodyToDocument = responseBody;
        responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument);
  } catch (error) {}
};

module.exports.listApplications = async function listApplications (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try {
    let startTime = process.hrtime();
    let responseCode = responseCodeEnum.code.OK;
    let responseBodyToDocument = {};
    await IndividualServices.listApplications(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
      .then(async function (responseBody) {
        responseBodyToDocument = responseBody;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      })
      .catch(async function (responseBody) {
        responseBodyToDocument = responseBody;
        responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument);
  } catch (error) {}
};

module.exports.listRecords = function listRecords (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listRecords(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRecordsOfFlow = function listRecordsOfFlow (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listRecordsOfFlow(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRecordsOfUnsuccessful = function listRecordsOfUnsuccessful (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listRecordsOfUnsuccessful(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recordServiceRequest = function recordServiceRequest (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.recordServiceRequest(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.regardApplication = async function regardApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try {
    let startTime = process.hrtime();
    let responseCode = responseCodeEnum.code.NO_CONTENT;
    let responseBodyToDocument = {};
    await IndividualServices.regardApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
      .then(async function (responseBody) {
        responseBodyToDocument = responseBody;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      })
      .catch(async function (responseBody) {
        responseBodyToDocument = responseBody;
        responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument);
  } catch (error) {}
};

module.exports.startApplicationInGenericRepresentation = async function startApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try {
    let startTime = process.hrtime();
    let responseCode = responseCodeEnum.code.OK;
    let responseBodyToDocument = {};
    await IndividualServices.startApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
      .then(async function (responseBody) {
        responseBodyToDocument = responseBody;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      })
      .catch(async function (responseBody) {
        responseBodyToDocument = responseBody;
        responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
        let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
        restResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument);
  } catch (error) {}
};
