function SimpleAPMLParser() {}

SimpleAPMLParser.prototype.parse = function(content) {
  return {
    app_configuration: { title: "CityRep", version: "2.0.0" },
    design_system: {},
    data_model: {},
    ui_components: {},
    styling: {}
  };
};

module.exports = SimpleAPMLParser;