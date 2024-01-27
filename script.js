// Function to draw plot
function drawPlot(canvasId, x, y, label) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Plot data
  var scaleX = canvas.width / (Math.max.apply(null, x) - Math.min.apply(null, x));
  var scaleY = canvas.height / (Math.max.apply(null, y) - Math.min.apply(null, y));

  ctx.beginPath();
  ctx.moveTo((x[0] - x[0]) * scaleX, canvas.height - y[0] * scaleY);
  for (var i = 1; i < x.length; i++) {
    ctx.lineTo((x[i] - x[0]) * scaleX, canvas.height - y[i] * scaleY);
  }
  ctx.strokeStyle = "#ff0000"; // Line color
  ctx.stroke();

  // Label plot
  ctx.fillStyle = "#ffffff"; // Label color
  ctx.font = "bold 14px Arial";
  ctx.fillText(label, 10, 20);
}

// Function to draw FFT plot
function drawFFTPlot(canvasId, fftResult) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Plot FFT
  var scaleX = canvas.width / (fftResult.length - 1);
  var scaleY = canvas.height / (Math.max.apply(null, fftResult));

  ctx.beginPath();
  for (var i = 0; i < fftResult.length; i++) {
    ctx.moveTo(i * scaleX, canvas.height);
    ctx.lineTo(i * scaleX, canvas.height - fftResult[i] * scaleY);
  }
  ctx.strokeStyle = "#00ff00"; // Line color
  ctx.stroke();
}

// Function to generate plot based on selected signal
function generatePlot() {
  // Get selected signal
  var signalFunction = document.getElementById("signal-select").value;

  // Generate data for the selected signal
  var x = [];
  var y = [];
  var N = 1000; // Number of data points

  for (var i = 0; i < N; i++) {
    x.push(i / N * 10); // x values from 0 to 10
    switch(signalFunction) {
      case "sine":
        y.push(Math.sin(x[i])); // Sine wave
        break;
      case "cosine":
        y.push(Math.cos(x[i])); // Cosine wave
        break;
      case "sineAndCosine":
        y.push(Math.sin(x[i]) + Math.cos(x[i])); // Sum of sine and cosine waves
        break;
      case "sineTimesCosine":
        y.push(Math.sin(x[i]) * Math.cos(x[i])); // Product of sine and cosine waves
        break;
      case "random":
        y.push(Math.random() * 2 - 1); // Random signal between -1 and 1
        break;
    }
  }

  // Draw signal plot
  drawPlot("signal-canvas", x, y, "Signal");

  // Calculate FFT (placeholder)
  var fftResult = fft(y); // Calculate FFT (replace with actual FFT implementation)

  // Draw FFT plot
  drawFFTPlot("fft-canvas", fftResult);
}

// Function to calculate FFT (placeholder)
function fft(y) {
  var fftResult = [];
  var N = y.length;
  for (var k = 0; k < N; k++) {
    fftResult.push(Math.abs(y[k])); // Dummy FFT result (absolute value)
  }
  return fftResult;
}