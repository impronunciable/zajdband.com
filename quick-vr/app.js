
(function (){

  var id = function (val) { return [val] }

  var actions = {
    'position': {method: 'moveTo', preprocess: function(position) { return position.split(',') } }
  }

  Tabletop.init({
    key: window.location.hash.substr(1),
    callback: onSheetLoaded,
    simpleSheet: true
  })

  function onSheetLoaded (data, tabletop) {
    data.forEach(function(row) {
      var obj = VR[row.object](row) // not so pretty
      if(row.object == 'video') {
        obj.play()
      }
      
      delete row.object
      Object.keys(row).forEach(function(prop) {
        if(!row[prop]) return
        var action = actions[prop]
        if (action) {
          obj[action.method].apply(obj, action.preprocess(row[prop]))
        }
      })
    })
  }

})()
