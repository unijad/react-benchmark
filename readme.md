# Readme

Read More about this experamint on: [Vite vs SWC vs Webpack: A Performance Comparison for React Applications](https://younisjad.medium.com/vite-vs-swc-vs-webpack-a-performance-comparison-for-react-applications-1384553c659d)

![Alt text](https://miro.medium.com/v2/resize%253Afit%253A1400/format%253Awebp/1%252AVpcgcF4KS4hzHipEbDYrVw.png)

## Performance Check for React Build Tools

This performance check aims to compare three commonly used build tools for developing and building a React application: Vite + SWC, Vite with Babel.js, and Create React App. The check analyzes the run time, build time, and bundle size of each build tool to provide developers with insights on their performance.

## Performance Results

Based on the performance check, it is apparent that all three build tools are viable options for developing and building a React application. However, each tool differs in its performance:

- Vite + SWC has the fastest run time
- Vite with Babel.js has the fastest build time
- Create React App resulted in the smallest bundle size

While there is little difference in run time between the tools, the selection of the build tool may differ depending on the developer's preference and specific project requirements. Therefore, developers should consider these factors while choosing the suitable build tool for their React app.

## Installation

To use any of the build tools mentioned in this performance check, please refer to their respective documentation and follow their installation guide.

- [vite](https://github.com/vitejs/vite)
- [hyperfine](https://github.com/sharkdp/hyperfine)
- [CRA](https://github.com/facebook/create-react-app)

## Usage

please refer to Makefile for benchmarking commands

## Conclusion

In conclusion, choosing the right build tool for your React app is vital to achieve the optimal performance and the best possible user experience. While all three build tools - Vite + SWC, Vite with Babel.js, and Create React App - provide good performance, the choice may vary depending on the developer's preference and specific project requirements. We hope this performance check will be useful to help developers make an informed decision when choosing the best build tool for their React app.