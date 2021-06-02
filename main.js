Status = "";
function preload()
{}
function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}
function start()
{
    CoCo = ml5.objectDetector("cocossd", ModelL);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    Input = document.getElementById("input").value;
}
function ModelL()
{
    console.log("Model Loaded");
    Status = true;
}
function draw()
{
    image(Video,0,0,400,400)
}