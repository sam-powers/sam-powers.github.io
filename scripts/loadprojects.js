
var project_grid;
var data_length;
var rownumber;
var project_grid_nested;

function loadProjects() {
    
d3.csv("https://github.com/sam-powers/sam-powers.github.io/blob/master/project_grid.csv")
    .then(
        function(data) {   
            project_grid = data;
            draw_rectangles(project_grid);           
        });   
}


function draw_rectangles(project_data){
    
    
project_data.forEach((item, index) => {
        item.row = "row" + Math.ceil((index+1)/4);
        });
    
    
project_grid_nested =  d3.nest()
        .key(function(d) {return d.row})
        .entries(project_data)
    
var  projectscontainer = d3.select("#projectscontainer");
    
var projectrows  = projectscontainer.selectAll(".row")
        .data(project_grid_nested)
        .enter()
        .append("div")
        .attr("class", "row")    
    
var projectelements = projectrows.selectAll(".square")    
        .data(function (d){
            return d.values;      
        })
        .enter()
        .append("div")
        .attr("class", "col-lg-3 col-sm-6 square")

var projecttitles = projectelements.append("div")
        .attr("class", "textbox")
        .append("text")
        .text(function (d) { return d.title})
        .attr("class", "projecttitles")

var projecttitles = projectelements.append("div")
        .attr("class", "textboxview")
        .append("text")
        .text("- click to view – ")
        .attr("class", "projectview")

var projectlinks = projectelements.append("a")
        .attr("href", function (d){return d.link})

var projectimages = projectlinks.append("img")
        .attr("src", function(d) { return "https://github.com/sam-powers/sam-powers.github.io/blob/master/images/" + d.image + ".jpg"})
        .attr("class", "img-fluid")

};