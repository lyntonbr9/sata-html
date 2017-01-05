'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', ['smartTable.table', 'serverSide']).
        controller('mainCtrl', ['$scope', function (scope) {

            scope.rowCollection = [];

            scope.columnCollection = [
                { label: 'First Name', map: 'FirstName', validationAttrs: 'required', validationMsgs: '<span class="error" ng-show="smartTableValidForm.FirstName.$error.required">Required!</span>' },
                { label: 'Ultimo Name', map: 'LastName' },
                { label: 'User Name', map: 'UserName', validationAttrs: 'required' },
                { label: 'Password', map: 'Password', noList: true, editType: 'password' },
                { label: 'Customer', map: 'CustId', optionsUrl: '/GetCusts', editType: 'radio' },
                { label: 'Role', map: 'RoleId', optionsUrl: '/GetRoles', editType: 'select', defaultTemplate: '<option value="" ng-hide="dataRow[column.map]">---</option>', validationAttrs: 'required', validationMsgs: '<span class="error" ng-show="smartTableValidForm.RoleId.$error.required">Required!</span>' }, // NOTE: small hack which enables defaultTemplate option :)
                { label: 'E-mail', editType: 'email', map: 'Email' },
                { label: 'Cell Phone', map: 'Mobilephone', noEdit: true, validationAttrs: 'required' },
                { label: 'Locked', map: 'IsLocked', cellTemplate: '<input disabled type="checkbox" name="{{column.map}}" ng-model="dataRow[column.map]">', editType: 'checkbox', noAdd: true }
            ];

            scope.globalConfig = {
                isPaginationEnabled: true,
                isGlobalSearchActivated: true,
                itemsByPage: 10,
                selectionMode: 'single',
                actions: {
                    list: { url: '/GetUsers' },
                    edit: { url: '/EditUser', title: 'Edit User', desc: 'Edit', iconClass: '' }, 
                    add: { url: '/AddUser', title: 'Add User', buttonClass: 'pull-right', iconClass: 'icon-plus', desc: ' Add User' }, // TODO: zkontrolovat default description
                    remove: { url: '/DelUser', title: 'Confirmation Dialog', msg: 'Do you really want to delete the user?' }
                }
            };

        } ]);