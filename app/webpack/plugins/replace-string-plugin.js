function ReplaceStringPlugin(options) {
    this.options = options;
}

ReplaceStringPlugin.prototype.apply = function(compiler) {
    if (this.options.pattern && this.options.replacement) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
                htmlPluginData.html = htmlPluginData.html.replace(this.options.pattern, this.options.replacement);
                callback(null, htmlPluginData);
            });
        });
    } else {
        throw 'string pattern and replacement is required';
    }
};

module.exports = ReplaceStringPlugin;