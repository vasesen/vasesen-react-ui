
module.exports = {
    verbose: true,
    clearMocks:false,
    collectCoverage:true,//开启测试覆盖率
    reporters: ['default','jest-junit'],
    collectCoverageFrom:["{lib,include}/**/*.{ts,tsx}","!**/node_modules/**"],
    coverageDirectory:'coverage',
    coverageReporters:['text','lcov'],
    globals:{
        'ts-jest':{
            tsConfig:'tsconfig.test.json'
        }
    },
    moduleFileExtensions: ['js','jsx','ts','tsx'],
    moduleDirectories:['node_modules',],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": 
        "<rootDir>/test/__mocks__/file-mock.js",
       "\\.(css|less|scss|sass)$":"identity-obj-proxy"
       //"<rootDir>/test/__mocks__/styleMock.js"  //对样式导出 object
    },
    testMatch:['<rootDir>/**/__test__/**/*.unit.(js|jsx|ts|tsx)'],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        '^.+unit\\.(js|jsx)$':'babel-jest',

    },
    //setupTestFrameworkScriptFile:"<rootDir>/test/setupTest.js"
    setupFilesAfterEnv:["<rootDir>/test/setupTest.js"]
}
 