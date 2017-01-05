'use strict';

// Imitation of server - for testing purpose
angular.module('serverSide', ['ngMockE2E'])
        .run(['$httpBackend', function ($httpBackend) {
            var users = [
            { "RoleId": 464, "UserId": 100849, "UserName": "matt", "FirstName": "Tom", "LastName": "Blue", "Email": "matt@comp.com", "Telephone": null, "Mobilephone": "111222333", "Password": "tom", "CustCd": null, "CustId": 16, "Loccd": null, "IsLocked": true },
            { "RoleId": 463, "UserId": 100851, "UserName": "sale", "FirstName": "sale", "LastName": "sale", "Email": "sales@comp.com", "Telephone": null, "Mobilephone": "777111223", "Password": "sale", "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false },
            { "RoleId": 464, "UserId": 100853, "UserName": "novak", "FirstName": "Mark", "LastName": "Novak", "Email": "asa@asd.cz", "Telephone": null, "Mobilephone": "777888444", "Password": "new", "CustCd": null, "CustId": 15, "Loccd": null, "IsLocked": false },
            { "RoleId": 465, "UserId": 100860, "UserName": "testadmin", "FirstName": "testadmin", "LastName": "testadmin", "Email": "test@test.cz", "Telephone": null, "Mobilephone": "777888999", "Password": "testadmin", "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false },
            { "RoleId": 465, "UserId": 100861, "UserName": "admin", "FirstName": "admin", "LastName": "admin", "Email": "admin@comp.com", "Telephone": "777888999", "Mobilephone": "777888999", "Password": "admin", "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false },
            { "RoleId": 464, "UserId": 100873, "UserName": "test", "FirstName": "test", "LastName": "test", "Email": "test@test.cz", "Telephone": null, "Mobilephone": "789456123", "Password": "test", "CustCd": null, "CustId": 16, "Loccd": null, "IsLocked": false },
            { "RoleId": 463, "UserId": 100874, "UserName": "testsale", "FirstName": "testsale", "LastName": "testsale", "Email": "testsale@test.cz", "Telephone": null, "Mobilephone": "789456123", "Password": "testsale", "CustCd": null, "CustId": null, "Loccd": null, "IsLocked": false}];

            var roles = [{ "Text": "Sales Team", "Value": 463 }, { "Text": "Customer", "Value": 464 }, { "Text": "Admin", "Value": 465}];
            var custs = [{ "Text": "Company AAA", "Value": 15 }, { "Text": "Company BBB", "Value": 16}];

            $httpBackend.whenPOST('/GetRoles').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: roles })
                return result;
            });
            $httpBackend.whenPOST('/GetCusts').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: custs })
                return result;
            });
            $httpBackend.whenPOST('/GetUsers').respond(function (method, url, data, headers) {
                var result = [200];
                result.push({ data: users })
                return result;
            });
            $httpBackend.whenPOST('/EditUser').respond(function (method, url, data, headers) {
                var updatedUser = angular.fromJson(data);
                for (var i = 0; i < users.length; i++)
                    if (updatedUser.UserId === users[i].UserId) {
                        angular.extend(users[i], updatedUser);
                        var result = [200];
                        result.push({ data: users[i] })
                        return result;
                    }
            });
            $httpBackend.whenPOST('/AddUser').respond(function (method, url, data, headers) {
                var newUser = angular.fromJson(data);
                users.push(newUser);

                var result = [200];
                result.push({ data: newUser })
                return result;
            });
            $httpBackend.whenPOST('/DelUser').respond(function (method, url, data, headers) {
                var updatedUser = angular.fromJson(data);
                for (var i = 0; i < users.length; i++)
                    if (updatedUser.UserId === users[i].UserId) {
                        users.splice(i, 1);
                        var result = [200];
                        result.push({ data: users[i] })
                        return result;
                    }
            });
        } ]);