"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const WebsiteMetrics_1 = require("./Models/WebsiteMetrics");
const app = express_1.default();
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect('mongodb://localhost:27017/Node', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('first');
    next();
}));
app.get('/', ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const t = new WebsiteMetrics_1.testModel({ test: 'JohnDoe', _id: 'owswsk2' });
    let ttt;
    try {
        yield t.save();
        ttt = yield WebsiteMetrics_1.testModel.find();
        console.log(ttt);
        res.json(ttt);
    }
    catch (ex) {
        ttt = yield WebsiteMetrics_1.testModel.find();
        console.log(ttt);
        res.json(ttt);
    }
    next();
})));
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('last');
    next();
}));
app.listen(5000, () => console.log('ok22'));
//# sourceMappingURL=app.js.map