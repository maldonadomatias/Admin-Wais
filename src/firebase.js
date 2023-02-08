require('dotenv').config()
const admin = require('firebase-admin')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { getAuth } = require('firebase-admin/auth')

initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: 'wais-f4f29',
    private_key_id: 'a233dfc402523464666b63e615c02a2cd63549e5',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1+wxVmgJo8sqs\nUjjhG7MRpKbYC5If6hBCw5/YfI2qpHQgh7PfNdVEoQ7/jZUG74nUechQuj47Rbuo\npYxPd4NQRrfznzMIKUjbamZWOiYwYHiOonP/iqgdwRhkiFouiN1yhZBXeeFiLVDU\nIRC49hXshU3zVZZFrD/gwC8eWg4wnEXMKT/VLse1TTfBWWJZgrqazGytlqJraQkM\n+bst39nJ+Z5uS8yjiic47u57FUdzB59mNNqByCvFJqJh2EebpqR9mDe/OYDQAf/L\nNf0w8FBMbI5cB2Qkk2+//Qs1sykkg89ZX4qs9nvMnwzqjkLQcGfyxxaxEBRmIViw\n57pclZCxAgMBAAECggEAAdiQS4m2Ch5ZgquMRkzcs6XB2hPkin7DZZse0uX+1HVe\ndHpONADvAWKRtk6gkgMVT8POe3KUw3OVtDsrYbD6u83M+3W7KpM9xr24fQeSHb3w\nNEUMl3aA9eu8A0B7HbRwtXnBOQDLSLNOjDu96sFASPePM10x0Yj3aKCV3lgp8Rz8\n27xebj6loAEUDjK+cy87EMRlV1n1x55/8q8k5HxrTV7dWT9t07fzu5dJrj2h+1lL\nT5mD2gvIBZKI9nUORLHQ2R/9D3Am4tRv0c9FhX4ud4arE95wMaNt+AdVu6eFtKVw\nF3Y7skmA1eI2UbZDpvyno2ADqRvBlmrUks+INOObMwKBgQDz6O0hzLkoQTCdZv06\nJOdRM4qWTWB0Qu3q8mFlknbyuv7oQqqd7y9KRN2Ym1w9Rhq40H3T+CpEG4PM91VF\nQEpdfsMj2xHyqBUWK8aQoW0LRHjLZBlwBh2JuZtspvFutp/6g0a57ryFBsuaENPC\n+Apu8aJxyCYzKttftMQLpfbFcwKBgQC/AEbAzGIy2yBnQAD41wQ5WdJQKRVQntCb\nw4ew7rdLUSZjt/ggz+QjPhs+PDAcXTrfzd33KmTp3UxeQySvqNAd7Ixx74PvCi1N\nUf9tznqQ0CwxHcylnUWAWcXqiKl+gsteixmbbaORZqnrMRVgh3B8ozSxrjFD8Hz2\nA9P2geFoSwKBgQCwAdl8lnrWbZRjQTpihtbVZdgP9e4wd0uwSw+1eCeVqRLhD5qH\nNV5uvZsa0KGTJc+KpgjmuSHm2+QUODa0Llx7c0nlyeP9swTkZtp268YAZ3yzaJxi\nlkciZ2mc0itOtUJkR+71pS0s4WZy2sm028DLplqOuNu3+KktOwhtT2nvuQKBgAiN\nw51oydELPTVCiYibYIYM/r02Sc0Vf7QqGo6S8kR+OuDmYUde6BGn+2JbIbBzgGp7\ndsBV9rT+gygJi8AOKFvetx93IYp4AzVeQbkyMQ0BNalxczPLikxIOPPa8PRIeUEf\nq6LpUxT06xEsXo+3IROD351BdtVbFM2TuE9m26hnAoGBAJEeEqV8NDz/3EtotBcU\nKNviorU8ZMaZThC1rbNOJxKq8ZRjHQkfGW8I5VeGYdR1pGaOxRcqZFJOOP7bCOO0\nVqigwV0CmiWkRudFMc00QwGdFwsaieebJ2AP+Ap2ozf/6IFDk2XvAC/cYW0pFqpy\nzZV+vA6xQVz/3p7h2fQkAK8W\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-vkqak@wais-f4f29.iam.gserviceaccount.com',
    client_id: '100069859665802970123',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vkqak%40wais-f4f29.iam.gserviceaccount.com',
  }),
  databaseURL: 'https://wais-f4f29-default-rtdb.firebaseio.com',
})

const db = getFirestore()

const auth = getAuth()

module.exports = {
  db,
  auth
}
