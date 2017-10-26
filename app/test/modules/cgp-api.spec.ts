// // File: cgp-api-spec.ts
// // Author: James Seebach
// // Date: 6/19/2017
// // Desc: CGP API test file.
// // Other Contributors:

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, RequestMethod, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CgpApiService } from '../../src/modules/cgp-api';

describe("CGP API", () => {
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers:    [
                CgpApiService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });

        let mockBeforeSend = {
            opts : '',
            error : null
        };

        spyOn(CgpApiService.prototype, 'beforeSend').and.returnValue(mockBeforeSend);
    });    

    describe("GET", () => {
        it('should get data.',
            inject([CgpApiService, XHRBackend], (cgpApiService, mockBackend) => {            

            let mockData = {
                data: [
                    { id: 0, name: 'Test Data 0' },
                    { id: 1, name: 'Test Data 1' },
                    { id: 2, name: 'Test Data 2' },
                    { id: 3, name: 'Test Data 3' }
                ]
            };

            mockBackend.connections.subscribe((connection : MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Get);
                connection.mockRespond(new Response(new ResponseOptions({body : mockData})))
            });

            cgpApiService.get('http://example.com').subscribe((response) => {

                expect(response._body.data.length).toBe(4);
                expect(response._body.data[0].name).toEqual('Test Data 0');
                expect(response._body.data[1].name).toEqual('Test Data 1');
                expect(response._body.data[2].name).toEqual('Test Data 2');
                expect(response._body.data[3].name).toEqual('Test Data 3');
            });
        }));
    });

    describe("POST", () => {
        it('should send data and recieve a response with a status of 200.',
            inject([CgpApiService, XHRBackend], (cgpApiService, mockBackend) => {
            
            let mockData = {
                data: [
                    { id: 0, name: 'Test Data 0' },
                    { id: 1, name: 'Test Data 1' },
                    { id: 2, name: 'Test Data 2' },
                    { id: 3, name: 'Test Data 3' }
                ]
            };

            mockBackend.connections.subscribe((connection : MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Post);
                connection.mockRespond(new Response(new ResponseOptions({status: 200})))
            });
            
            cgpApiService.post('http://example.com', mockData).subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.status).toBe(200); 
            });
        }));
    });

    describe("PUT", () => {      
        it('should insert new data and recieve a response with a status of 200.',
            inject([CgpApiService, XHRBackend], (cgpApiService, mockBackend) => {

            let mockData : { 'id' : '', 'itemId' : 6547, 'itemName' : 'Engine', 'color' : '' };

            mockBackend.connections.subscribe((connection : MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Post);
                connection.mockRespond(new Response(new ResponseOptions({status: 200})))
            });
            
            cgpApiService.post('http://example.com', mockData).subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.status).toBe(200);
            });
        }));

        it('should update existing data and recieve a response with a status of 204.',
            inject([CgpApiService, XHRBackend], (cgpApiService, mockBackend) => {

            let mockData : { 'id' : 12345, 'itemId' : 6547, 'itemName' : 'Engine', 'color' : 'red' };

            mockBackend.connections.subscribe((connection : MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Put);
                connection.mockRespond(new Response(new ResponseOptions({status: 204})))
            });
            
            cgpApiService.put('http://example.com', mockData).subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.status).toBe(204);
            });
        }));
    });

    describe("DELETE", () => {
        it('should remove data and recieve a response with a status of 202.',
            inject([CgpApiService, XHRBackend], (cgpApiService, mockBackend) => {

            let mockData : { 'id' : 12345 };

            mockBackend.connections.subscribe((connection : MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Delete);
                connection.mockRespond(new Response(new ResponseOptions({status: 202})))
            });
            
            cgpApiService.delete('http://example.com', mockData).subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.status).toBe(202);
            });
        }));
    });
});