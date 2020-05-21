function createBarChart(data) {
    // Start with the container.
    var chart = document.createElement("div");

    // The container must have position: relative.
    chart.style.position = "relative";

    // The chart's height is the value of its largest
    // data item plus a little margin.
    var height = 0;
    for (var i = 0; i < data.length; i += 1) {
        height = Math.max(height, data[i].value);
    }
    chart.style.height = (height + 10) + "px";

    // Give the chart a bottom border.
    chart.style.borderBottomStyle = "solid";
    chart.style.borderBottomWidth = "1px";

    // Iterate through the data.
    var barPosition = 0;

    // We have a preset bar width for the purposes of this
    // example.  

    var barWidth = 50;
    for (i = 0; i < data.length; i += 1) {
        // Basic column setup.
        var dataItem = data[i];
        var bar = document.createElement("div");
        bar.setAttribute("id", "cv-box")
        bar.style.position = "absolute";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = dataItem.color;
        bar.style.height = dataItem.value + "px";
        bar.style.borderStyle = "ridge";
        bar.style.borderColor = dataItem.color;

        // Visual flair with CSS Level 3 (for maximum compatibility
        // we set multiple possible properties to the same value).
        bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.MozBorderRadiusTopleft = "8px";
        bar.style.WebkitBorderTopLeftRadius = "8px";
        bar.style.borderTopLeftRadius = "8px";
        bar.style.MozBorderRadiusTopright = "8px";
        bar.style.WebkitBorderTopRightRadius = "8px";
        bar.style.borderTopRightRadius = "8px";
        bar.style.backgroundImage =
            "-moz-linear-gradient(" + dataItem.color + ", black)";
        bar.style.backgroundImage =
            "-webkit-gradient(linear, 0% 0%, 0% 100%," +
            "color-stop(0, " + dataItem.color + "), color-stop(1, black))";
        bar.style.backgroundImage =
            "linear-gradient(" + dataItem.color + ", black)";

        // Recall that positioning properties are treated *relative*
        // to the corresponding sides of the containing element.
        bar.style.bottom = "0px";
        chart.appendChild(bar);

        // Move to the next bar.  We provide an entire bar's
        // width as space between columns.
        barPosition += (barWidth * 2);

        // label the bar graph
        var months = document.createElement("label");
        months.setAttribute("id", "month")
        months.innerHTML = dataItem.month

        // call the function within the bar div
        bar.appendChild(months)

    }

    return chart;
};

var millisecondsPerFrame = 30;
var startConstantVelocityAnimation = function () {

    // Start animating.
    var intervalID = setInterval(function () {
        var chart = createBarChart(reset);
        document.body.appendChild(chart)
    }, millisecondsPerFrame);

    // Toggle the start button to stop animation.
    setupButton(document.getElementById("cv-button"), "Stop Animation", function () {
        clearInterval(intervalID)

        // Toggle the start button to stop animation.
        setupButton(document.getElementById("cv-button"),
            "Start Animation", startConstantVelocityAnimation);
    });
};

window.onload = function () {
    var colors = [{ color: "red", value: 40, month: "January" },
    { color: "blue", value: 10, month: "February" },
    { color: "green", value: 100, month: "March" },
    { color: "HotPink", value: 65, month: "April" },
    { color: "Indigo", value: 75, month: "May" },
    { color: "cyan", value: 120, month: "June" },
    { color: "Tan", value: 121, month: "July" },
    { color: "Chocolate", value: 175, month: "August" },
    { color: "LightGreen", value: 220, month: "September" },
    { color: "LightSeaGreen", value: 275, month: "October" },
    { color: "Orange", value: 300, month: "November" },
    { color: "SlateGrey", value: 15, month: "December" },
    { color: "SlateGrey", value: 1000, month: "Example of value of 1000" },
    ];

    var chart = createBarChart(colors);
    document.body.appendChild(chart);
    document.getElementById("cv-button").onclick = startConstantVelocityAnimation();
};


var reset = [{ color: "red", value: 0, month: "January" },
{ color: "blue", value: 0, month: "February" },
{ color: "green", value: 0, month: "March" },
{ color: "HotPink", value: 0, month: "April" },
{ color: "Indigo", value: 0, month: "May" },
{ color: "cyan", value: 0, month: "June" },
{ color: "Tan", value: 0, month: "July" },
{ color: "Chocolate", value: 0, month: "August" },
{ color: "LightGreen", value: 0, month: "September" },
{ color: "LightSeaGreen", value: 0, month: "October" },
{ color: "Orange", value: 0, month: "November" },
{ color: "SlateGrey", value: 0, month: "December" },
{ color: "SlateGrey", value: 1000, month: "Example of value of 1000" },
]

