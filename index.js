var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name);
  var message = 'Welcome, ' + name  + '. You are number ' + line.length + ' in line.'
  return message;
}

function nowServing(line, name) {
  if (line < 1) {
    return "There is nobody waiting to be served!"
  } else {
    line.slice(0);
    var servingMessage = 'Currently serving ' + line.shift(0); + '.'
    return servingMessage;
  }
}

function currentLine(line, name) {
  if (line.length > 1) {
    let n = 0
    var linePeople = [];
    
    while (n < line) {
      linePeople.push(" " + [n + 1] + ". " + line.length[n])
      n++
    }
    
    var lineMessage = "The line is currently: " + linePeople
    return lineMessage;
  } else {
    var emptyMessage = "The line is currently empty."
    return emptyMessage;
  }
}