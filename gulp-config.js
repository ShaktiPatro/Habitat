module.exports = function () {
  var instanceRoot = "C:\\websites\\Habitat.dev.local";
  var config = {
    websiteRoot: instanceRoot + "\\Website",
    sitecoreLibraries: instanceRoot + "\\Website\\bin",
    licensePath: instanceRoot + "\\Data\\license.xml",
    solutionDirectory: "C:\\projects\\Habitat",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
    runCleanBuilds: false
  };
  return config;
}