const LibraryReducer = require("./LibraryReducer")
// @ponicode
describe("LibraryReducer.default", () => {
    test("0", () => {
        let callFunction = () => {
            LibraryReducer.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
