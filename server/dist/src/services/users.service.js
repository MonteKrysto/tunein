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
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const constants_1 = __importDefault(require("../constants"));
class UserService {
    constructor() {
        this.signup = ({ email, password }) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if this email is already registered, if so throw an error
                const existingUser = yield user_model_1.User.findOne({ email });
                if (existingUser) {
                    throw new Error(constants_1.default.userMessage.DUPLICATE_EMAIL);
                }
                // Create the user
                password = yield bcrypt_1.default.hash(password, 12);
                const newUser = new user_model_1.User({ email, password });
                const resp = yield newUser.save();
                return utils_1.formatData(resp);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.signin = ({ email, password }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_model_1.User.findOne({ email });
                const pwd = { user };
                if (!user) {
                    throw new Error(constants_1.default.userMessage.USER_NOT_FOUND);
                }
                const isValid = yield bcrypt_1.default.compare(password, user.password);
                if (!isValid) {
                    throw new Error(constants_1.default.userMessage.INVALID_PASSWORD);
                }
                const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.SECRET_KEY || "my-secret-key", { expiresIn: "1d" });
                return { token };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.UserService = UserService;
