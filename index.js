function newton() {
    var x = [];
    for (let i = 0; i < 5; i++) {
      x[i] = document.getElementsByClassName("inputx")[i].value;

    }
    var y = [];
    for (let i = 0; i < 5; i++) {
      y[i] = document.getElementsByClassName("inputy")[i].value;

    }
    var del1 = [];
    for (let i = 0; i < 4; i++) {
      del1[i] = y[i + 1] - y[i];

    }
    var del2 = [];
    for (let i = 0; i < 3; i++) {
      del2[i] = del1[i + 1] - del1[i];

    }
    var del3 = [];
    for (let i = 0; i < 2; i++) {
      del3[i] = del2[i + 1] - del2[i];

    }
    var del4 = [];
    for (let i = 0; i < 1; i++) {
      del4[i] = del3[i + 1] - del3[i];

    }
    // var del = [del1[0],del2[0],del3[0],del4[0]];
    // del[0] = del1[0];
    // del[1] = del2[0];
    // del[2] = del3[0];
    // del[3] = del4[0];

    var fact = [];
    fact[0] = 1;
    for (let i = 1; i < 6; i++) {

      fact[i] = fact[i - 1] * (i + 1);
    }
    var point = document.getElementById("point-number").value;

    var p1 = point - x[0];
    var p = p1 / (x[1] - x[0]);

    var sum = [];
    sum[0] = y[0];
    sum[1] = (del1[0] * p);
    sum[2] = (del2[0] * p * (p - 1)) / 2;
    sum[3] = (del3[0] * p * (p - 1) * (p - 2)) / 6;
    sum[4] = (del4[0] * p * (p - 1) * (p - 2) * (p - 3)) / 24;
    answer = 1 * (1 * sum[0] + 1 * sum[1] + 1 * sum[2] + 1 * sum[3] + 1 * sum[4]);
    document.getElementById("value").innerText = answer;
  }

  function clearanswer(){
    document.getElementById("value").innerText = 'Answer';

  }