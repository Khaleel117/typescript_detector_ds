//{fact rule=improper-input-validation@v1.0 defects=1}

function endsWith(x: string | any[], y: string) {
  return x.lastIndexOf(y) === x.length - y.length;
}

//{/fact}
