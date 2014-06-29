define ['angular'], (angular)->
    'use strict'
    # return new controller 
    # note the namespace
    console.log 'digitalmonkstudio.controllers::init'
    angular.module 'digitalmonkstudio.controllers',[]

    # define app controller deps
    define ['navigationController'], ->
        return

    return
#define ['navigation-ctrl'], ->
#    return
