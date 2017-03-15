function Weather(){

};

Weather.prototype.generator = function() {
    return Math.random() > 0.8;
};
