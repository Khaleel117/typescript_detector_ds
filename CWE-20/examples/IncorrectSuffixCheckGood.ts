//{fact rule=method-input-validation@v1.0 defects=0}

function endsWith(x: string | any[], y: string) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}


//{/fact}