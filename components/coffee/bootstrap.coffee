define ['require','angular','scripts/app'], (require, ng) -> 
    require ['domReady!'], (doc)->
        ng.bootstrap doc,['digitalmonkstudio']
        return



