var d;
d3.csv("../../data/project_grid.csv").then(function (q) {
    d = q;
    drawProjects(d, "a");
});

function drawProjects(project_data, filter_key) {

    var projectscontainer = d3.select("#projectcontainer")

    var PATTERN = filter_key,
        filtered = project_data.filter(function (str) {
            return str.tags.includes(PATTERN);
        });

    console.log(filtered);
    
    projectscontainer
        .selectAll(".square").remove();
    
   var  projectelements = projectscontainer
        .selectAll(".square")
        .data(filtered)
        .enter()
        .append("div")
        .attr("class", (d) => d.tags) 
        .classed("square", true)
        .classed("show", true)
        .classed("contains-image", (d) => (d.imagesize !== "0") ? true : false)
        .classed("square-extend-1", (d) => (d.imagesize === "1") ? true : false)
        .classed("square-extend-2", (d) => (d.imagesize === "2") ? true : false);
    
    var squareswithimage = d3.selectAll(".contains-image");

    var imageboxes = squareswithimage
        .append("div")
        .classed("square-content", true)
        .classed("image-box", true)
        .classed("image-box-1", (d) => (d.imagesize === "1") ? true : false)
        .classed("image-box-2", (d) => (d.imagesize === "2") ? true : false);

    imageboxes.append("img")
        .attr("src", function (d) {
            return "../../images/" + d.image + "" + d.type
        })

    var textboxes = projectelements
        .append("a")
        .attr("href", function (d) {
            if (d.project_page == 1) {
               return "../../projects/" + d.link
               } else {return  d.link}
               })
        .attr("class", "text-box-link")
        .append("div")
        .classed("square-content", true)
        .classed("text-box", true)
        .classed("with-image", (d) => (d.image !== "0") ? true : false)
        .classed("with-image-1", (d) => (d.imagesize === "1") ? true : false)
        .classed("with-image-2", (d) => (d.imagesize === "2") ? true : false);
    
    squareswithimage
        .append("div")
        .classed("triangle-bottom", true)
        .classed("triangle-bottom-1", (d) => (d.imagesize === "1") ? true : false)
        .classed("triangle-bottom-2", (d) => (d.imagesize === "2") ? true : false);

    textboxes.append("h1").text(d => d.title);
    textboxes.append("p").text(d => d.description);
    
    textboxes.append("div").classed("with", true).text(function(d) {
                                                        if (d.with == "") {
                                                            return ""
                                                        } else {return "@" + d.with}
                                                        });
    
    textboxes.append("div").classed("corner", true).classed("corner-left", true)
    textboxes.append("div").classed("corner", true).classed("corner-right", true)


};
