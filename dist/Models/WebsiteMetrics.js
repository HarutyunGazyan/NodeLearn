"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.testSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    test: { type: String, required: true }
});
exports.testModel = mongoose_1.model('tests', exports.testSchema);
//# sourceMappingURL=WebsiteMetrics.js.map