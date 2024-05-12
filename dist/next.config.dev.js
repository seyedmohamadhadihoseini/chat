"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nextPwa = _interopRequireDefault(require("next-pwa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @type {import('next').NextConfig} */
var nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "http",
      hostname: "localhost"
    }]
  }
};
var withPWA = (0, _nextPwa["default"])({
  dest: "public",
  // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development",
  // Disable PWA in development mode
  register: true,
  // Register the PWA service worker
  skipWaiting: true // Skip waiting for service worker activation

});

var _default = withPWA(nextConfig);

exports["default"] = _default;